import { Form } from '../../Models/index.mjs'; // Adjust the path as needed
//import {question_activity,data_walking,data_stairs} from "../../data/data"
export const CreateUserFormData = async (req, res) => {
    const { form_data } = req.body;


        // Assuming the user_id is retrieved from the authenticated user (from token or session)
        const user_id = req.user.id;

        
        
        // Check if a form with the same user_id and form_type already exists
        const existingForm = await Form.findOne({
            where: {
                user_id
            }
        });
     
        if (existingForm) {
            // If the form exists, update the form_data
            await existingForm.update({ form_data });
            return res.status(200).json({
                message: 'Form data updated successfully.',
                success:true
            });
        } else {
            // If the form does not exist, create a new form entry
            const newForm = await Form.create({
                user_id,
                form_data,
            });

            return res.status(200).json({
                message: 'Form data updated successfully.',
                success:true
            });
        }
  
};
