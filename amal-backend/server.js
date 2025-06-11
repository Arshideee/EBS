const app = require("./app");
const dotenv = require("dotenv");
const databaseConnnection = require("./config/databaseConnection");

dotenv.config({path:'./config/config.env'})
databaseConnnection()
app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);

});
