##About
`CLI` utility to check your [snitches]().

Uses [dead-mans-snitch library](https://www.npmjs.com/package/dead-mans-snitch).
Powered by NodeJS harmony

##Why
Purpose of this project was two fold;
- Need a `CLI` utility to check my snitches.
- Play around with NodeJS `--Harmony`

##Usage

- Download project
- Run `npm install`
- Assign key to an environment variable called `DEAD_MANS_SNITCH_KEY`.
- In project directory run `node --harmony index.js --help`

#####Only tested on OSX

##Docker support
This utility can also run as a Docker container
```
cd /path/to/dead-mans-snitch-cli
docker build .
#grab the docker image id
#grab your api key
docker run -e DEAD_MANS_SNITCH_KEY=<API_KEY>  <DOCKER_IMAGE_ID> ./run.sh --list
```

##Example usage
`node --harmony index.js --list`

##Todo
#####comments
#####output errors to var/log
#####tests