import { Form,User } from '../../Models/index.mjs'; // Adjust the path as needed

export const TestChangeState = async (req, res) => {
    

   

    try {
        // Assuming the user_id is retrieved from the authenticated user (from token or session)
        const user_id = req.user.id;

     
        const user = await User.findOne({
            where: {
                id:user_id,
              
            }
        }); 

        const existingForm = await Form.findOne({
            where: {
                user_id,
                state:"1"
            },
            order: [['createdAt', 'DESC']],
        }); 
     
       
        return res.status(200).json({
            message: 'Form data created successfully.',
            success: true,
            form:Form,
            user:user

        });
    } catch (error) {
        console.log("error:",error)
        return res.status(500).json({
            message: 'An error occurred while creating/updating the form data.',
            success: false,
            error: error.message
        });
    }
};
