const express = require('express');
const fetch = require('node-fetch');
const redis = require('redis');

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const client = redis.createClient(REDIS_PORT);

const app = express(); 

// Set app response
const setResponse = (username, repos) => {
    return (
        `<div>
            <h2>${username} has ${repos} public repositories</h2>
        </div>`
    );
};

// Make request to Github to fetch data
const getRepos = async(req, res, next) => {
    try {
        console.log('Fetching data...');

        const { username } = req.params;
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        const repos = data.public_repos;

        // Set to Redis for caching purposes- expiry duration of 1hr
        client.setex(username, 3600, repos);

        res.send(setResponse(username, repos)); 
    } catch(err) {
        console.log(err);
        res.status(500);
    }
};

// Cache middleware
const cacheToRedis = (req, res, next) => {
    const { username } = req.params;
    
    client.get(username, (err, data) => {
        if (err) throw err;

        if (data !== null) {
            res.send(setResponse(username, data));
        } else {
            next();
        }
    })
};

app.get('/repos/:username', cacheToRedis, getRepos);

app.listen(5000, () => {
    console.log(`App listening on port ${PORT}. This is great news!`);
});