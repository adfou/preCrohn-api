import { Form,User } from '../../Models/index.mjs'; // Adjust the path as needed

export const CreateUserFormData = async (req, res) => {
    const { form_data } = req.body; // Destructure form_type from the request body

   

    try {
        // Assuming the user_id is retrieved from the authenticated user (from token or session)
        const user_id = req.user.id;

     

        const existingForm = await Form.findOne({
            where: {
                user_id,
                state:"0"
            }
            ,
            order: [['createdAt', 'DESC']],
        }); 
     
        if (existingForm) {
            // If the form exists, update the form_data
            await existingForm.update({ form_data });
            console.log("=== befor test final")
            if(Object.keys(existingForm.form_data).length === 12){
                //finish 
                const user = await User.findOne({
                    where: {
                        id:user_id,
                    }
                }); 
                user.update({ 
                    state: "1" ,
                });

                await existingForm.update({ 
                    submit_date: new Date()
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
            console.log("form dont exits")
            // If the form does not exist, create a new form entry
            const existingFormTest = await Form.findOne({
                where: {
                    user_id,
              
                }
            }); 
          
            if(!existingFormTest){
                console.log("create new form ")
            const newForm = await Form.create({
                user_id,
                form_data,
                state:"0"
            });
        }

            
        }
        return res.status(200).json({
            message: 'Form data created successfully.',
            success: true
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
