FROM node:argon

#Mount the application directory
#ADD ./app /app
#Clone repo to root directory
RUN cd / && wget https://github.com/singh1469/dead-mans-snitch-cli.git

#Directory from which to run commands
WORKDIR /app

#Install deps
RUN npm install

#Make script executable
RUN chmod 700 ./run.sh
