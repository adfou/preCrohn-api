import { User, Form } from '../../Models/index.mjs';
import { getUserFormCount } from '../../utils/index.mjs';

export const GetAllUsers = async (req, res) => {
    try {
        console.log("user get all s");
        const users = await User.findAll({
            include: {
                model: Form,
                as: 'forms', // This alias must match the one defined in the association
                attributes: ['form_data', "submit_date", "state"], // Select the form fields you want to retrieve
            }
        });

        const usersWithFormLength = await Promise.all(users.map(async user => {
            // Convert Sequelize model instance to plain object
            const userObject = user.toJSON();

            userObject.date = user?.forms[0]?.submit_date;
            userObject.state = user?.forms[0]?.state === "1" ? "closed" : "open";

            if (userObject.forms.length === 0) {
                // If forms array is empty, set forms to 0
                userObject.forms = 0;
            } else {
                // Calculate forms completion percentage
                const formData = userObject.forms[0].form_data;
                if (typeof formData === 'string') {
                    try {
                        const parsedData = JSON.parse(formData);
                        const length = Object.keys(parsedData).length;
                        userObject.forms = Math.floor((length / 12) * 100); // Calculate and round down to int
                    } catch (error) {
                        userObject.forms = 0;
                    }
                } else if (typeof formData === 'object') {
                    const length = Object.keys(formData).length;
                    userObject.forms = Math.floor((length / 12) * 100); // Calculate and round down to int
                } else {
                    userObject.forms = 0;
                }
            }

            // Calculate the phase using getUserFormCount
            userObject.phase = await getUserFormCount(userObject.id, userObject.state, userObject.role);

            
            return userObject;
        }));

        res.json(usersWithFormLength);
    } catch (error) {
        console.error("Error in GetAllUsers:", error);
        res.status(500).json({ error: error.message });
    }
};
