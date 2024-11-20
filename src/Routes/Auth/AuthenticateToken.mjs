import jwt from 'jsonwebtoken';
import { User } from '../../Models/index.mjs'; // Adjust to your User model path

const authenticateToken = async (req, res, next) => {
    
    const token = req.headers['authorization'];
   

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
        const user = await User.findByPk(decoded.id); // Find the user by ID from the token

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        // Token is valid, and user is found
        req.user = user;
        //console.log("User authenticated:", user);

        return res.status(200).json({ message: 'Token is valid', user: { id: user.id, email: user.email, role: user.role, biomarkers:user.biomarkers ,state:user.state,phase:user.phase} });
    } catch (error) {
        console.error("Token verification failed:", error);
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                message: 'Token expired',
                expiredAt: error.expiredAt, // Include when the token expired
            });
        }
        return res.status(401).json({ message: 'Invalid token' });
    }
};

export default authenticateToken;
