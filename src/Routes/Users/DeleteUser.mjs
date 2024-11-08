import { User } from '../../Models/index.mjs'; // Adjust to your User model path

export const deleteUser = async (req, res) => {
    const { id } = req.query; // Get the user ID from the URL parameters
    const userId = req.user.id;
    //const { nami } = req.params; // Get the user ID from the URL parameters
    console.log("id:",id)
    console.log("userId,",userId)
    if(userId === id){return res.status(404).json({ message: 'User not found' });}
    
    try {
        // Check if the user exists
       
        const user = await User.findOne({ where: { id } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        console.log("user",user)
        // Delete the user
        await user.destroy();
        
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.log("erro happend",error)
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
};


