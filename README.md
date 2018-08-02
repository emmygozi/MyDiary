# MyDiary
<a href="https://codeclimate.com/github/emmygozi/MyDiary/maintainability"><img src="https://api.codeclimate.com/v1/badges/0f42795d78882890ca28/maintainability" /></a> [![Coverage Status](https://coveralls.io/repos/github/emmygozi/MyDiary/badge.svg?branch=ft-add-error-handler-159156539)](https://coveralls.io/github/emmygozi/MyDiary?branch=ft-add-error-handler-159156539) [![Build Status](https://travis-ci.org/emmygozi/MyDiary.svg?branch=ft-add-error-handler-159156539)](https://travis-ci.org/emmygozi/MyDiary) <a href="https://codeclimate.com/github/emmygozi/MyDiary/test_coverage"><img src="https://api.codeclimate.com/v1/badges/0f42795d78882890ca28/test_coverage" /></a>

MyDiary is an online journal where users can pen down their thoughts and feelings

## API Documentation
API documentation is hosted at https://mysterious-hamlet-72841.herokuapp.com/api-docs/

## API 
API is deployed at  https://mysterious-hamlet-72841.herokuapp.com/api/v1/

## Frontend 
Frontend is deployed at  https://mysterious-hamlet-72841.herokuapp.com/

## Registered user
Registered user is signed in to https://mysterious-hamlet-72841.herokuapp.com/myindex

## Template
Template hosted at https://emmygozi.github.io/MyDiary/UI/


## Table of Contents

 
 
 * [Getting Started](#getting-started)
    * [Installation](#installation)
    * [Testing](#testing)
    * [Development](#development)
* [Features](#features)
* [API Endpoints](#api-endpoints)
 * [Technologies](#technologies)

 
### Pivotal Tracker Stories
Find relevant Pivotal Tracker stories at [https://www.pivotaltracker.com/projects/2184342)

## Getting Started

### Installation

* git clone
  [MyDiary](https://github.com/emmygozi/MyDiary.git)
* Run `npm install or yarn install` to install packages
* Run `npm start or yarn start` to start the server
* Navigate to [localhost:8000](http://localhost:8000/) in browser to access the
  application

### Testing

#### Prerequisites

* [Postman](https://getpostman.com/) - API Toolchain

#### Testing with Postman

* After installing as shown above
* Navigate to [localhost:8000](http://localhost:8000/) in
  [Postman](https://getpostman.com/) to access the application

#### Testing with Coverage Data

* After installing as shown 

* Run `npm test or yarn test`
* It will run test and display coverage data as generated by
  Istanbul's [nyc](https://github.com/istanbuljs/nyc)

### Development
You can run `npm run start:dev or yarn start:dev` in development to use [Nodemon](https://nodemon.io/)

[Nodemon](https://nodemon.io/) watches for file changes and restarts your code. 

## Features

### Users
* Sign Up
* Sign In
* Create Diary Entries
* Modify Diary Entries
* Delete Diary Entries
* Set notification 

### API Endpoints
<table>
	<tr>
		<th>HTTP VERB</th>
		<th>ENDPOINT</th>
		<th>FUNCTIONALITY</th>
	</tr>
	<tr>
		<td>POST /</td>
		<td>/api/v1/auth/signup</td> 
		<td>User signup</td>
	</tr>
	<tr>
		<td>POST /</td>
		<td>/api/v1/auth/login</td> 
		<td>User login</td>
	</tr>
	<tr>
		<td>GET /</td>
		<td>/api/v1/entries/</td> 
		<td>Fetch all entries</td>
	</tr>
	<tr>
		<td>GET /:id</td>
		<td>/api/v1/entries/:id</td> 
		<td>Fetch a specific entry</td>
	</tr>
	<tr>
		<td>POST /</td>
		<td>/api/v1/entries/</td> 
		<td>Make an entry</td>
	</tr>
	<tr>
		<td>PUT /:id</td>
		<td>/api/v1/entries/:id</td> 
		<td>Modify an entry</td>
	</tr>
	<tr>
		<td>DELETE /:id</td>
		<td>/api/v1/entries/:id</td> 
		<td>Delete an entry</td>
	</tr>
</table>

## Technologies

* [NodeJS](https://nodejs.org/) - Runtime Environment
* [ExpressJs](https://expressjs.com/) - Web Application Framework
* [Yarn](https://yarnpkg.com/lang/en/) - Dependency Manager
* [Npm](https://www.npmjs.com/) - Dependency Manager

### Supporting Packages

#### Linter(s)

* [ESLint](https://eslint.org/) - Linter Tool

#### Compiler

* [Babel](https://eslint.org/) - Compiler for Next Generation JavaScript

#### Test Tools

* [Mocha](https://mochajs.org/) - JavaScript Test Framework for API Tests
* [Chai](http://chaijs.com/) - TDD/BDD Assertion Library for Node
* [Istanbul(nyc)](https://istanbul.js.org/) - Code Coverage Generator



