# Mappi

Mappi is a full-stack web application built with the EJS template engine, Express, Node and PostgreSQL. This app allows users to create, collaborate, and favourite community maps.

## Project Stack

**Front-End**: HTML, SASS, JavaScript  
**Back-End**: EJS, Express, Node  
**Database**: PostgreSQL  
**API**: Google Maps JavaScript API  

## Project Features

- Browse all available maps on the homepage, contribute to one that interests you or create a new map
- Interactively create pins and edit pin details through a slide-down form
- Form validation to check whether users have entered a valid URL for images
- User dashboard that displays their maps, favourited maps, and contributed maps

## Final Product

**Mappi Homepage**

!["Home Page"](https://github.com/Isams01/mappi/blob/features/ejs_views/images/homepage.gif?raw=true)

**Creating Mappi**

!["Create a map"](https://github.com/Isams01/mappi/blob/features/ejs_views/images/create_mappi.png?raw=true)

**Editing Mappi**

!["Editing a map"](https://github.com/Isams01/mappi/blob/features/ejs_views/images/editing_map.png?raw=true)

**User Dashboard**

!["Dashboard"](https://github.com/Isams01/mappi/blob/features/ejs_views/images/dashboard.png?raw=true)

## Getting Started

This project requires a Google Maps API key to use, please see: <https://developers.google.com/maps/gmp-get-started>

1. Fork this repository, and clone your fork of the repository

2. Create the `.env` file by using `.env.example` as a reference: `cp .env.example .env`

3. Update the .env file with your correct local information

- username: `labber`
- password: `labber`
- database: `midterm`

4. Install the dependencies with `npm install`

5. Fix to binaries for sass: `npm rebuild node-sass`

6. Reset database: `npm run db:reset`

- Check the db folder to see what gets created and seeded in the SDB

7. Run the web server with `npm run local`

8. Open your web browser on <http://localhost:8080/> to start using Mappi!

## Dependencies

- Body-parser
- Chalk
- Dotenv
- EJS
- Express
- Morgan
- Node-sass-middleware
- PG
- PG-native
- Request
