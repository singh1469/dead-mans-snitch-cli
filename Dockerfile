FROM node:argon

#Environment variables
ENV DEAD_MANS_SNITCH_KEY ${DEAD_MANS_SNITCH_KEY}

#Mount the directory todo
ADD ./app /app

#Directory from which to run command
WORKDIR /app

RUN chmod 700 ./run.sh

RUN npm install

#Command to run
#ENTRYPOINT ["/bin/bash"] This won't work as this is NOT the comment
#we want to run on startup

#Need to specify entrypoint as it will otherwise default to /bin/sh
#ENTRYPOINT ["node"] too restrictive cannot login in interactive mode

#command parameters
#CMD ["--harmony", "index.js --list"]
#CMD ["./run.sh"] cannot pass through cli paramter from host cli to container