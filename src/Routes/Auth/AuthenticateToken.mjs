import jwt from 'jsonwebtoken';
import { User } from '../../Models/index.mjs'; // Adjust to your User model path

const authenticateToken = async (req, res, next) => {
    
    console.log("athorization:",req.headers['authorization'])
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

        return res.status(200).json({ message: 'Token is valid', user: { id: user.id, email: user.email, role: user.role, biomarkers:user.biomarkers } });
    } catch (error) {
        console.error("Token verification failed:", error);
        return res.status(401).json({ message: 'Your session has expired. Please log in again.' });
    }
};

export default authenticateToken;
