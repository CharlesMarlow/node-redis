This project uses node.js and the Redis service to demonstrate
how an app can benefit by caching data that's either rarely or 
never updated, in order to make less calls to the server, 
improve the app's speed by fetching cached data instead of springing
up fresh data for every single call, and void the rate limit horror from 
APIs who force a rate limit. 

In order to run Redis you need it on your machine. If you're on a 
Windows machine please visit this page and download the first link: 
https://github.com/dmajkic/redis/downloads

Mac users can use homebrew to install Redis

