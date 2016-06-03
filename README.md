##About
`CLI` utility to check your [snitches]().

Uses [dead-mans-snitch library](https://www.npmjs.com/package/dead-mans-snitch).
Powered by NodeJS harmony

##Why
Purpose of this project was two fold;
- Need a `CLI` utility to check my snitches.
- Play around with NodeJS `--Harmony`

##Usage

- Download project (git clone)
- Run `npm install`
- Assign key to an environment variable named `DEAD_MANS_SNITCH_KEY`.
- In project directory run `node --harmony index.js --help`

#####Only tested on OSX & Ubuntu 14:04

##Docker support
This utility can also run as a Docker container.
https://hub.docker.com/r/singh1469/dead-mans-snitch-cli/
```
#grab your api key
docker run -e DEAD_MANS_SNITCH_KEY=<API_KEY>  singh1469/dead-mans-snitch-cli ./run.sh --list
```

##Example usage
`node --harmony index.js --list`
`node --harmony index.js --healthy`
`node --harmony index.js --unhealthy`

##Todo
#####output errors to var/log
#####tests
