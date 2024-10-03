import { Form } from '../../Models/index.mjs'; // Adjust the path as needed

export const CreateUserFormData = async (req, res) => {
    const { form_data, form_type } = req.body; // Destructure form_type from the request body

   

    try {
        // Assuming the user_id is retrieved from the authenticated user (from token or session)
        const user_id = req.user.id;

        console.log("========================");
        console.log(user_id);
        console.log("========================");
        console.log(req.body);
        console.log("========================");

        const existingForm = await Form.findOne({
            where: {
                user_id,
            }
        });

        if (existingForm) {
            // If the form exists, update the form_data
            await existingForm.update({ form_data });
            return res.status(200).json({
                message: 'Form data updated successfully.',
                success: true
            });
        } else {
            // If the form does not exist, create a new form entry
            const newForm = await Form.create({
                user_id,
                form_data,
            });

            return res.status(200).json({
                message: 'Form data created successfully.',
                success: true
            });
        }
    } catch (error) {
        console.error('Error creating/updating form data:', error);
        return res.status(500).json({
            message: 'An error occurred while creating/updating the form data.',
            success: false,
            error: error.message
        });
    }
};
