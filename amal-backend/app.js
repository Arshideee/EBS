const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser")
// const {userRegister} = require("./controllers/userController")


const app = express();
app.use(cors({
origin:true,
credentials:true
}));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
const userRoutes = require("./routes/userRoutes")

app.use('/api/users', userRoutes);

app.use((err,req,res,next) => {
res.status(500).json({
    message:err.message
})
})
module.exports = app;