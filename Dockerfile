FROM node:argon

#Mount the application directory
ADD ./app /app

#Directory from which to run commands
WORKDIR /app

#Install deps
RUN npm install

#Make script executable
RUN chmod 700 ./run.sh