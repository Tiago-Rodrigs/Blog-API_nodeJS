# MyBlog

This application is a backend part of the application "Blog".
Frontend part you can find at the [link](https://github.com/Oops61rus/Blog-React_Redux)

## Getting started
To run this project, you need to download it and run it locally. Before starting, you must install the dependencies and then run the application. First you need to set the database

### Main stack
This app use Node.JS and PostgreSQL databases. Its you're can download there: [NodeJS](https://nodejs.org/), [PostrgeSQL](https://www.postgresql.org/).

### Installing
Firstly you should install dependencies

`npm install`

Then you shoud to set database configuration

Change .env file. This is necessary for the correct setting.
You're shoud to create database
Change the fields in the file.

```
JWT_SECRET=secretWord
DOMAIN=http://localhost:3000/

DB_NAME=blog
DB_USER=postgres
DB_PASSWORD=*********
HOST=localhost
DIALECT=postgres
TIMESTAMPS=false
```

### To start:

run the command

`npm run start`

enter the link in the address bar "localhost:3000"
