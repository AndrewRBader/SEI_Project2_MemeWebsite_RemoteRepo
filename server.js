// require npm express library 
const express = require('express');
// set up instance of express
const app = express();
// set up port variable
PORT = 4000;



//routes//
// show get route
app.get('/:id', (req, res) =>{
    res.send('this is my show route');
})

// home get route
app.get('/', (req, res) => {
    res.send('Welcome to We Meme It');
});


// app.listen to server at given port
app.listen(PORT, () => {
    console.log('listening on port: ${PORT}');
});

