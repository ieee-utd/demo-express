# NodeJS Demo

For the IT committee workshop. This is some awesome boilerplate code to get you started with the following awesome technologies:

- NodeJS, a JavaScript runtime for servers
- Express, a really fast way to make servers and APIs
- MongoDB, a NoSQL database that is fast and massively scalable

## Installation

You will need to install both NodeJS and MongoDB on your systems. Here's how:

1. Install NodeJS 10.x LTS: https://nodejs.org/en/
2. Install MongoDB 4.0.x: https://docs.mongodb.com/manual/administration/install-community/
3. (Optional) Get an IDE: install Atom or Visual Studio Code
4. Clone this repository using `git`. Place it somewhere safe on your computer.
5. Go inside the folder with this readme in your terminal and run `npm install`.

That's it!

## Running

1. Start MongoDB if not already running. (Please ask if you are not sure if it is running or not. Use `mongod` to start a new server.)
- You may need to run `sudo mkdir -p /data/db && sudo chown -R $USER /data/db` if an error occurs
2. Run `npm start` in the folder with this readme.

Any time you make changes to the code, `gulp` will automatically recompile your changes and restart the server.
