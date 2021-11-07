# Extreme Startup Example Server
Built by Luke Bellamy for the Booking.com GreatUniHack November 2021

## Starting the server
To run this server you will need nodejs version 13.0 or higher. The easiest way to do this is using the [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installing NVM

> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

Once you have NVM installed, navigate to this project in your terminal and run 

> nvm install

Once this command is run you will have nodejs 13 installed and you can continue

Install the project dependencies

**NPM (Default)**
> npm i

**Yarn**
> yarn 



## Configure your server

Your server should work out of the box, but you will need to edit the <b>package.json</b> start script and change the USERNAME=example part to be USERNAME='your name here'

Before:
> "start": "PORT=3000 USERNAME='example' node ./bin/root"

After:
>   "start": "PORT=3000 USERNAME='Luke Bellamy' node ./bin/root"

This is because the nodejs server will register with the game server automatically but your name is required to do so

## Ready to begin
Once you have done the above, you're ready to begin by running the following command in your terminal

**NPM (Default)**
> npm run start

**Yarn**
> yarn start

### Windows users
Most of the above commands can be run using the git bash shell instead of the terminal

Windows users will need to run the start:windows command as setting environment variables is not the same as Linux / MacOS.


# Game Server

The central game server can be found [here](https://extreme-startup.vercel.app/server)

When the game is running you will be able to find your score as well as the scores of other players
