const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// ****** Database Connection with Mongoose ****** //
mongoose.connect('mongodb://localhost/hospital_API', { useNewUrlParser: true ,useUnifiedTopology: true });
const db = mongoose.connection;

// ****** Connection Error Handling ****** //
db.on('error', console.error.bind(console, "Error connecting to the databse"));

// ****** Connection Error Successful ****** //
db.once('open', function () {
    console.log("Successfully connected to the Database");
});