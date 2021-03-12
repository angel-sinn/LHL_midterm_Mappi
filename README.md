# Mappi ~ Midterm Project

- Mappi harnesses the power of the Google Maps Javascript API to allow users to create, collaborate, and favourite community created maps
- Drop pins and edit the pins details, then save them to create a map
- Browse all available maps on the homepage and contribute to one that interests you by following the above steps
- Don't worry about making mistakes while dropping pins as you can easily delete them with the `Delete` button 

## Getting Started

1. This project requires a Google Maps API key to use, please see: https://developers.google.com/maps/gmp-get-started if you're interested.
2. Fork this repository, then clone your fork of this repository.
3. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
4. Update the .env file with your correct local information 
  - username: `labber` 
  - password: `labber` 
  - database: `midterm`
5. Install dependencies: `npm i`
6. Fix to binaries for sass: `npm rebuild node-sass`
7. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
8. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
9. Visit `http://localhost:8080/`

## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- chalk
- ejs
- morgan
- node-sass-middleware
- pg
- pg-native
- request
- chance

## Usage 

- Click `create a map` to get started or feel free to browse the available maps by clicking `view maps`
- Navigate to the dashboard to see an overview of: your maps, your favourite maps, and maps you've contributed to
- When creating a map simply click on the map to drop a pin and edit the pins details in the edit form
- Save your: pin(s) or map by clicking the respective buttons
- Favourite a map by clicking the favourite map button

## Final Product

**Mappi Homepage**

!["Home Page"](https://github.com/Isams01/mappi/blob/features/ejs_views/images/homepage.gif?raw=true)


**Creating Mappi**

!["Create a map"](https://github.com/Isams01/mappi/blob/features/ejs_views/images/create_mappi.png?raw=true)


**Editing Mappi**

!["Editing a map"](https://github.com/Isams01/mappi/blob/features/ejs_views/images/editing_map.png?raw=true)


**User Dashboard**

!["Dashboard"](https://github.com/Isams01/mappi/blob/features/ejs_views/images/dashboard.png?raw=true)
