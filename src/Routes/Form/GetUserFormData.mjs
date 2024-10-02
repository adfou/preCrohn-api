import { Form } from '../../Models/index.mjs'; // Adjust the path as needed

// Controller function to get form data by user_id
export const GetUserFormData = async (req, res) => {
    try {
        // Assuming the user_id is retrieved from the authenticated user (from token or session)
        const user_id = req.user.id;

        console.log("========================");
        console.log("user_id", user_id);
        console.log("========================");
        
        
        // Find the form by user_id
        const form = await Form.findOne({
            where: {
                user_id
            }
        });

        if (form) {
            // If the form exists, return the form data
            return res.status(200).json({
                success: true,
                form_data: form.form_data
            });
        } else {
            // If no form exists for this user, return a 404 response
            return res.status(404).json({
                success: false,
                message: 'No form data found for this user.'
            });
        }
    } catch (error) {
        console.error('Error fetching form data:', error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while fetching form data.',
            error: error.message
        });
    }
};
