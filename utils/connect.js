const mongoose = require('mongoose');
require ("dotenv").config ();
const uri = process.env.uri;

const connect = ()=>{
    mongoose
    .connect(uri, 
        { useNewUrlParser: true, useUnifiedTopology: true } , 
        (err) => {
            if (err) throw err;
            console.log("connected to database successufully")
        });
};
module.exports = connect;

 