const jwt = require('jsonwebtoken')


const verifyToken = (req, res, next) => {
    const token = req.cookies.token || req.headers['authorization'];


    if (!token) {
        return res.status(403).json({ message: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(token,'\n')
        req.user = decoded;
        next();
    } catch {
        return res.status(401).json({ message: "Invalid token." });

    }

}

module.exports = verifyToken;
