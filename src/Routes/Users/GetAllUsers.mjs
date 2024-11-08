import { User, Form } from '../../Models/index.mjs';
import { getUserFormCount,GetPhaseStr } from '../../utils/index.mjs';

export const GetAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            include: {
                model: Form,
                as: 'forms', // This alias must match the one defined in the association
                attributes: ['form_data', 'submit_date', 'state'], // Select the form fields you want to retrieve
                where: { state: "0" }, // Filter to include only forms where state = "1"
                limit: 1, // Only include one form per user
                order: [['createdAt', 'DESC']] // Order by createdAt in descending order to get the latest form
            }
        });

        const usersWithFormLength = await Promise.all(users.map(async user => {
            // Convert Sequelize model instance to plain object
            const userObject = user.toJSON();
            userObject.date = user?.forms[0]?.submit_date;
            userObject.stateStr = user?.state === "1" ? "Closed" : "Open";
            userObject.userObject = user
            userObject.forms = user.progression
           

            // Calculate the phase using getUserFormCount
            const FormCount = await getUserFormCount(userObject.id, userObject.role);
            //userObject.phase = FormCount
            
            userObject.phase = user.phase
            // userObject.phaseStr
            return userObject;
        }));

        res.json(usersWithFormLength);
    } catch (error) {
        console.error("Error in GetAllUsers:", error);
        res.status(500).json({ error: error.message });
    }
};
