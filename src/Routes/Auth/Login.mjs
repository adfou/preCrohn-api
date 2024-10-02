import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User, Form } from '../../Models/index.mjs'; // Adjust to your User and Form model paths

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Check if the password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Find the form data for this user (assuming form is related to the user)
        const form = await Form.findOne({ where: { user_id: user.id } });

        // Generate JWT token
        const token = jwt.sign(
            { id: user.id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '5h' }
        );

        // Return the token, user information, and form data (if exists)
        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                email: user.email,
                role: user.role,
            },
            form: form ? form.form_data : {}, // Return form data if it exists, else null
        });
    } catch (error) {
        console.error('Login error:', error); // Log the error for debugging
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
};

export default loginUser;
