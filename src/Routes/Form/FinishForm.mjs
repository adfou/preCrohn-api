import { Form,User } from '../../Models/index.mjs'; // Adjust the path as needed
import {calculateProgress} from "../../utils/index.mjs"

export const FinishForm = async (req, res) => {
    const { form_data } = req.body; // Destructure form_type from the request body

    
    console.log("finish")
    try {
        // Assuming the user_id is retrieved from the authenticated user (from token or session)
        const user_id = req.user.id;
        let prog = calculateProgress(form_data)
     

        const existingForm = await Form.findOne({
            where: {
                user_id,
                state:"0"
            }
            ,
            order: [['createdAt', 'DESC']],
        }); 
        const user = await User.findOne({
            where: {
                id:user_id,
            }
        }); 
        user.update({ 
            progression : prog,
        });
        if (existingForm) {
            // If the form exists, update the form_data
            
            console.log("pregression : ",prog)
            await existingForm.update({ 
                form_data,
             });
             
            if(Object.keys(existingForm.form_data).length === 12){
                //finish 
                
                user.update({ 
                    state: "1" 
                });
                // here change the submite date
                
                user.update({ 
                    submit_date : new Date(),
                });
                await existingForm.update({ 
                    state: "1" ,
                });
            }
          
            
            return res.status(200).json({
                message: 'Form data updated successfully.',
                success: true
            });

        } else {
            return res.status(500).json({
                message: 'An error occurred while Finishing the form data.',
                success: false,
                error: error.message
            });

            
        }
  
    } catch (error) {
        console.log("error:",error)
        return res.status(500).json({
            message: 'An error occurred while creating/updating the form data.',
            success: false,
            error: error.message
        });
    }
};
