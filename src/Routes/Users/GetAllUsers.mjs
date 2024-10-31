import { User, Form } from '../../Models/index.mjs';

export const GetAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            include: {
                model: Form,
                as: 'forms',  // This alias must match the one defined in the association
                attributes: ['form_data',"submit_date","state"]  // Select the form fields you want to retrieve
            }
        });

        const usersWithFormLength = users.map(user => {
            // Convert Sequelize model instance to plain object
            const userObject = user.toJSON();
          
            userObject.date = user?.forms[0]?.submit_date;
            userObject.state = user?.forms[0]?.state ==="1"?"close":"open"
            if (userObject.forms.length === 0) {
                // If forms array is empty, set form to 0
                
                userObject.forms = 0;
            } else {
                // If form exists, check if the first form_data is a string
      
                const formData = userObject.forms[0].form_data;

                if (typeof formData === 'string') {
                    try {
                        // Parse the stringified JSON
                        const parsedData = JSON.parse(formData);
                        console.log(Object.keys(parsedData).length);
                        console.log("is string ");
                        // Calculate the length of the dictionary (number of keys), as percentage of 12
                        const length = Object.keys(parsedData).length;
                        userObject.forms = Math.floor((length / 12) * 100);  // Calculate and round down to int
                    } catch (error) {
                        // If JSON parsing fails, set form to 0
                        userObject.forms = 0;
                    }
                } else if (typeof formData === 'object') {
                    // If form_data is already an object, calculate its length
                    console.log("is object ");
                    const length = Object.keys(formData).length;
                    userObject.forms = Math.floor((length / 12) * 100);  // Calculate and round down to int
                } else {
                    // If form_data is neither a string nor object, set form to 0
                    userObject.forms = 0;
                }
            }

            return userObject;
        });

        res.json(usersWithFormLength);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
