import { Form } from '../../Models/index.mjs'; // Adjust the path as needed

export const CreateUserFormData = async (req, res) => {
    const { user_id, form_data, form_type } = req.body;

    try {
        // Check if a form with the same user_id and form_type already exists
        const existingForm = await Form.findOne({
            where: {
                user_id,
                form_type
            }
        });

        if (existingForm) {
            return res.status(400).json({
                message: 'A form of this type already exists for this user.'
            });
        }

        // Create a new user form data entry
        const newForm = await Form.create({
            user_id,
            form_data,
            form_type
        });

        res.status(201).json(newForm);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
