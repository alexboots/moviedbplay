## Start app

### Development

The client and server must be started up seperatly. First, start the server:

## server
cd into `/server` and run `yarn && yarn start` or `npm install && npm run start`

Next, we need to start the client:

## client
cd into `/client` and run `yarn && yarn start` or `npm install && npm run start`

The frontend is using create-react-app which sproxies all requests to the API. See package.json to change API port. 

### Production

There is currently no production build