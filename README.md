## What is this repo about
This project uses a simple Node.js and the Redis service to demonstrate
how an app can benefit by caching data that's either rarely or never 
updated, in order to make less calls to the server, improve the app's 
speed by fetching cached data instead of springing up fresh data
for every single call, and avoid the rate limit horror from APIs who force one. 

## Redis installation
In order to run Redis you need it on your machine.
If you're on a Windows machine please visit this link and download Redis: 
https://github.com/dmajkic/redis/downloads

Mac users can use homebrew to set up the installation.

## Node installation
In order to use Node you need it on your machine.
If you're on a Windows machine please visit this link and downlaod Node:
https://nodejs.org/en/download/ 

Mac users can use homebrew to set up the installation.

## Run project
Once Redis and Node are both up and running, in a terminal of your choice
please run `npm install` in order to fetch the project's dependencies, 
and then run this app with `npm start`.


