import jwt from 'jsonwebtoken';

// Middleware to check for valid JWT token
const authenticateJWT = (req, res, next) => {
    // Extract token from Authorization header
    const token = req.headers['authorization'];
    //const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401); // Unauthorized if no token

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // Forbidden if token invalid
     
        req.user = user; // Attach user information to request
        next(); // Proceed to the next middleware or route handler
    });
};

export default authenticateJWT;
