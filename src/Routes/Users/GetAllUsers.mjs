import {User} from '../../Models/index.mjs';

export const GetAllUsers = async (req, res) => {
  
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
