import { User, Form } from '../../Models/index.mjs';

export const getParticipantProfile = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findByPk(userId, {
            attributes: ['role', 'state', 'firstName'],
            include: {
                model: Form,
                as: 'forms',
                attributes: ['form_data', 'submit_date', 'state'],
            },
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const userObject = user.toJSON();
        const forms = userObject.forms.map(form => {
            let completionPercentage = 0;
            const formData = form.form_data;

            if (typeof formData === 'string') {
                try {
                    const parsedData = JSON.parse(formData);
                    const length = Object.keys(parsedData).length;
                    completionPercentage = Math.floor((length / 12) * 100);
                } catch (error) {
                    completionPercentage = 0;
                }
            } else if (typeof formData === 'object') {
                const length = Object.keys(formData).length;
                completionPercentage = Math.floor((length / 12) * 100);
            }

            return {
                completionPercentage,
                state: form.state === '1' ? 'close' : 'open',
                submit_date: form.submit_date,
            };
        });

        res.status(200).json({
            role: userObject.role,
            state: userObject.state,
            firstName: userObject.firstName,
            forms,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
