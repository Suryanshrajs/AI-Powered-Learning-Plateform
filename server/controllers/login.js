var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser')
const User = require('../models/userModel')



const login = async (req, res) => {
    console.log("In login route");
    try {
        const { email, password } = req.body;

        if (!(email && password)) {
            return res.status(400).send("Fields are compulsory");
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).send("User not found"); // what we have to send
        }


        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                { id: user._id },
                process.env.JWT_SECRET,
                {
                    expiresIn: "2h"
                }

            );

            user.token = token
            user.password = undefined // i don't want to send

            const options = {
                expire: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true
            }

            return res.status(200).cookie("token", token, options).json({
                success: true,
                token,
                user
            })
        } else {
            return res.status(400).send("Invalid credentials");
        }


    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

module.exports = { login };
