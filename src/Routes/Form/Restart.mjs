import { Form } from '../../Models/index.mjs'; // Adjust the path as needed

export const Restart = async (req, res) => {
    try {
        // Assuming the user_id is retrieved from the authenticated user (from token or session)
        const user_id = req.user.id;

        // Find all forms for the user, ordered by creation date (oldest first)
        const forms = await Form.findAll({
            where: {
                user_id,
            },
            order: [['createdAt', 'ASC']],
        });

        // If no forms found, return an error
        if (!forms || forms.length === 0) {
            return res.status(404).json({
                message: 'No forms found for this user.',
                success: false,
            });
        }

        // Keep the oldest form and delete the rest
        const oldestForm = forms[0];
        const formsToDelete = forms.slice(1);

        for (const form of formsToDelete) {
            await form.destroy();
        }

        return res.status(200).json({
            message: 'All forms except the oldest one have been deleted successfully.',
            success: true,
            remainingForm: oldestForm,
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
