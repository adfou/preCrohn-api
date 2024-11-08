import { Form, User } from '../../Models/index.mjs';

export const Restart = async (req, res) => {
    try {
        const user_id = req.query.id; // Get the user ID from the query string

        // Find all forms for the user
        const forms = await Form.findAll({
            where: {
                user_id,
            },
        });

        // Find the user by user_id
        const user = await User.findOne({ where: { id: user_id } });
        if (user) {
            user.state = '0';
            user.progression = 0
            user.phase = 0
            await user.save();
        } else {
            return res.status(404).json({
                message: 'User not found.',
                success: false,
            });
        }

        // If no forms found, return an error
        if (!forms || forms.length === 0) {
            return res.status(404).json({
                message: 'User already in Baseline.',
                success: false,
            });
        }

        // Delete each form in the `forms` array
        for (const form of forms) {
            await form.destroy({ force: true }); // Permanently delete each form
        }

      
        return res.status(200).json({
            message: 'Restart completed successfully.',
            success: true,
        });
    } catch (error) {
        console.error('Error during restart process:', error);
        return res.status(500).json({
            message: 'An error occurred while restarting.',
            success: false,
            error: error.message,
        });
    }
};
