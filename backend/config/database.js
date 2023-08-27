const mongoose = require("mongoose");

const connectDatabase = () => {
    const uri = process.env.DB_URI
    mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true}).then(
        (data) => {
            console.log(`Mongodb connected with server: ${data.connection.host}`);
        }
    ).catch((err) => {
        console.log(err);
    })
}

module.exports = connectDatabase