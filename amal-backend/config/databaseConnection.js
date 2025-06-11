const mongoose = require("mongoose");

const databaseConnnection = () => {
mongoose.connect(process.env.DB_URI || 'mongodb://localhost:27017/ebs' )
.then((data) => {
    console.log(`Database is connected with ${data.connection.host}`);
    
}).catch((err) => {
    console.log(`Database connection error ${err} `);
    
})
}

module.exports =  databaseConnnection;