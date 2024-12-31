var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser');
const User = require('../models/userModel');

const register = async (req, res) => {
    try {
        console.log("In register route");
        const { fullName, email, password } = req.body;
        console.log(fullName, email, password);

         
        if (!(fullName && email && password)) {
            return res.status(400).send("All fields are compulsory");  
        }
 
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(401).send("User already exists");  
        }

        // Hash the password
        const myHashedPassword = await bcrypt.hash(password, 10);

        // Create the user
        const user = await User.create({
            fullName,
            email,
            password: myHashedPassword
        });

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,  
            {
                expiresIn: "2h"
            }
        );

        user.token = token;
        user.password = undefined;  

        return res.status(201).json(user);  

    } catch (error) {
        console.error(error);  
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

module.exports = { register };
