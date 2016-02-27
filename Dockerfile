FROM node:argon

#Environment variables
ENV DEAD_MANS_SNITCH_KEY ${DEAD_MANS_SNITCH_KEY}

#Mount the directory todo
ADD ./app /app

#Directory from which to run command
WORKDIR /app

RUN npm install

#Install deps
RUN chmod 700 ./run.sh