const bcrypt = require("bcrypt")
const User = require("../models/userModel")

const jwt = require("jsonwebtoken")


exports.userRegister = async (req, res) => {

    console.log("////");
    const { username, phone, programme, password, email, state, city } = req.body;

 console.log(req.body);


    if (!username || !phone || !programme || !password || !email || !state || !city) {
        return res.status(400).json({
            success: false,
            message: "enter full data"
        })
    }
    const hashedPassword = await bcrypt.hash(password, Number(process.env.BCRYPT_SALT_ROUND));
    console.log("hash",hashedPassword);
    const user = {
        username,
        phone,
        programme, 
        password:hashedPassword, 
        email,
         state, 
         city
    }
  
    try {
        const newUser = await User.create(user);
        console.log("hash",newUser);
        if (!newUser) {
            return res.status(400).json({
                success: false,
                message: "user registration failed"
            })

        }
        res.status(201).json({

            success:true,
            message: "user registered",
            user:user,
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }

}
exports.userLogin = async (req, res) => {

    console.log("////");
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "enter full data"
            })
        }
        const user = await User.findOne({ email: email });
        // const user = users.find((u) => u.username === username);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user not found"
            });
        }
        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if (!isPasswordMatched) {
            return res.status(401).json({
                success: false,
                message: "user not found"
            })
        }
        const option = {
            id: user._id,
            
        }
        const token = jwt.sign(option, process.env.JWT_SECRET_KEY, { expiresIn: "10min" });
        const loggedUser = user.toObject();  //convert user document to object
        delete loggedUser.password;
        res.status(200).cookie('token', token).json({

            success: true,
            message: "user Loged in",
            user: loggedUser,
        })
    } catch (error) {
        res.status(500).json({

            success: false,
            message: error.message,

        })
    }

    //    if(user.password !== password){
    //     return res.status(401).json({
    //         success: false,
    //            message: "user not found"
    //    })
    //    }

    // res.status(200).send("user registered ")

}

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (!users) {
            return res.status(404).json({
                success: false,
                mssage: "users not found"
            })
        }
        res.status(200).json({

            success: true,
            users

        })
    } catch (error) {

        return res.status(500).json({
            success: false,
            mssage: error.message
        })



    }
}


