import { User, Form } from '../../Models/index.mjs';

export const getParticipantProfile = async (req, res) => {
    console.log("dkhal!")
    try {
        const userId = req.user.id;
        const user = await User.findByPk(userId, {
            attributes: ['role', 'state', 'firstName','progression','phase','submit_date'],
            include: {
                model: Form,
                as: 'forms',
                //change
                attributes: ['form_data', 'state'],
            },
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const userObject = user.toJSON();
        const forms = userObject.forms.map(form => {
           
      

            return {
                completionPercentage:user.progression,
                state: form.state === '1' ? 'close' : 'open',
                //change
                submit_date: user.submit_date,
                phase:user.phase,
            };
        });
        res.status(200).json({
            role: userObject.role,
            state: userObject.state,
            firstName: userObject.firstName,
            phase:user.phase,
            forms,
            completionPercentage:user.progression,
        });
    } catch (error) {
        console.log("error",error)
        res.status(500).json({ error: error.message });
    }
};
