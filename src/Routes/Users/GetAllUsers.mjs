import { User, Form } from '../../Models/index.mjs';
import { CalculateDueDate } from '../../utils/index.mjs';

export const GetAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            
        });

        const usersWithFormLength = await Promise.all(users.map(async user => {
            // Convert Sequelize model instance to plain object
            const userObject = user.toJSON();
            //change!
            userObject.stateStr = user?.state === "1" ? "Closed" : "Open";
            userObject.userObject = user
            userObject.forms = user.progression
            userObject.phase = user.phase
            userObject.date = user.submit_date,
            userObject.due_date = CalculateDueDate(user.submit_date,userObject.phase,user?.state)
            // userObject.phaseStr
            return userObject;
        }));

        res.json(usersWithFormLength);
    } catch (error) {
        console.error("Error in GetAllUsers:", error);
        res.status(500).json({ error: error.message });
    }
};
