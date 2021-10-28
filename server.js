const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');  // This is logging program
// Bring in a reference to the MODEL


const PORT =3001;
const app = express();

// Middleware
app.use(morgan('dev'));

// Connection to the Database
mongoose.connect("mongodb://localhost/workoutTrackerdb", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})


app.get('/api/workouts', (req, res) => {
    // Here we want to communicate with the Database
    // mongoose.Model.find({})
    let data = 0;
    // We return the Data from the DB to the function that made the request
    return data;
})

app.listen(PORT, () =>{
    console.log (`listening at port ${PORT}`)
});