import { Form } from '../../Models/index.mjs';

export const Restart = async (req, res) => {
    try {
        const user_id = req.query.id; // Get the user ID from the query string

        // Find all forms for the user
        const forms = await Form.findAll({
            where: {
                user_id,
            },
        });

        // If no forms found, return an error
        if (!forms || forms.length === 0) {
            return res.status(404).json({
                message: 'No forms found for this user.',
                success: false,
            });
        }

        // Delete each form in the `forms` array
        for (const form of forms) {
            await form.destroy();
        }

        return res.status(200).json({
            message: 'Restart successfully.',
            success: true,
        });
    } catch (error) {
        console.error('Error deleting forms:', error);
        return res.status(500).json({
            message: 'An error occurred while deleting the forms.',
            success: false,
            error: error.message,
        });
    }
};
