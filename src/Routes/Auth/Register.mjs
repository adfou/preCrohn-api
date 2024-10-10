import bcrypt from 'bcrypt';
import { User } from '../../Models/index.mjs'; // Adjust to your User model path
import { Op } from 'sequelize'; // Import Op from Sequelize

const registerUser = async (req, res) => {
 
    const { firstName, secondName, username, email, password, role,biomarkers } = req.body;
    console.log(req.body)

    try {
        // Check if user already exists by email or username
        const existingUser = await User.findOne({
            where: {
                [Op.or]: [{ email }, { username }]
            }
        });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the new user
        const newUser = await User.create({
            firstName,
            secondName,
            username,
            email,
            password: hashedPassword,
            role: role || '3', // Default role
            biomarkers:biomarkers
        });

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
};

export default registerUser;
