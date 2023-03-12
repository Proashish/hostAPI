const mongoose = require("mongoose");

uri ="mongodb+srv://ashishapi:ycV9udthsV8c3quC@cluster0.am7y24t.mongodb.net/ashishapi?retryWrites=true&w=majority";

const connectDB = () => {
    //console.log("connect db");
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
};

module.exports = connectDB;