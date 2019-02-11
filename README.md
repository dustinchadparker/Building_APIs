#REQUIRED
- Setup an API with a project structure like:

/client
/server
--/routes
----index.js
----chirps.js
--server.js
--chirpsstore.js (file provided in this lab)

1. In routes/chirps.js, create GET, POST, PUT, DELETE methods on a router that is created in chirps.js.
2. Import chirpsstore, and use it to read and write chirps to the json file.
- The json file will be created the first time you run successfully!
- Remember to export your router with module.exports.
3. In routes/index.js, import the chirps router and add it to a new router.
4. Use app.use with the /chirps route to add to the root api router.
5. Export the router.
6. In server.js, import the routes folder (./routes).
7. Add the api router to the express app with the path /api.
8. Test all of your methods using Postman (https://www.getpostman.com/)

##ADVANCED
1. Create an index.html, styles.css, and app.js file in the client folder.
2. Code an app that uses jQuery to call your API and displays chirps.
3. Create a form that lets you create new chirps
4. Do not use a form submit (you only need the inputs and not necessarily a form!)
5. Use a button click event to call the API.
6. Add an x next to each chirp that will delete the chirp when clicked.
7. When a chirp is clicked, popup a modal that lets you edit the chirp.
- Remember to use express.static middleware!
- HINT: jQuery functions for calling APIs: $.ajax, $.get, $.post