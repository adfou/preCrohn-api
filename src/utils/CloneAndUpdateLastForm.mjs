import { Form, User } from "../Models/index.mjs"; // Adjust the path as needed

export const CloneAndUpdateLastForm = async (userId) => {
    try {
        // Find the latest form for the user
        const lastForm = await Form.findOne({
            where: {
                user_id: userId,
                state: "1"
            },
            order: [['createdAt', 'DESC']],
        });

        if (!lastForm) {
            console.error("No previous form found for this user.");
            return {
                message: 'You haven\'t completed the last form',
                success: false,
            };
        }

        // Parse form_data if it's a string
        let formData = lastForm.form_data;
        if (typeof formData === "string") {
            try {
                formData = JSON.parse(formData);
            } catch (error) {
                console.error("Error parsing form_data string to JSON:", error);
                return {
                    message: 'Invalid form data format.',
                    success: false,
                    error: error.message,
                };
            }
        }

        // Remove specified keys from formData
        const keysToRemove = [
            'your-diet',
            'your-diet-2',
            'your-diet-3',
            'your-diet-4',
            'your-diet-5',
            'your-diet-6',
            'your-diet-7',
            'your-smoking-history',
            'your-physical-activity',
            'family-history'
        ];
        keysToRemove.forEach(key => delete formData[key]);

        // Remove specific fields within sections
        if (formData['general-information'] && typeof formData['general-information'] === 'object') {
            delete formData['general-information']['How old are you?'];
        }
        if (formData['medical-history'] && typeof formData['medical-history'] === 'object') {
            delete formData['medical-history']['Have you ever taken birth control pills?'];
            delete formData['medical-history']['Have you ever been diagnosed with Crohn’s disease, ulcerative colitis, or inflammatory bowel disease (IBD)-unclassified?'];
            delete formData['medical-history']['How often do you use non-steroidal anti-inflammatory drugs (NSAIDs), such as Advil, Motrin, Aleve, ibuprofen, or naproxen?'];
        }

        // Create a new form by copying the content from the last form
        const newForm = await Form.create({
            user_id: userId,
            form_data: formData,
            form_type: lastForm.form_type,
            state: "0"
        });

   
        const updatedUser = await User.update(
            { state: "0", progression: 16 },
            { where: { id: userId }, returning: true, plain: true }
        );

        console.log("User details after update:", updatedUser[1].dataValues);

        return {
            message: 'Next phase completed successfully',
            success: true,
            form: newForm,
            user: user, // Return user details if needed
        };
    } catch (error) {
        console.error("Error cloning and updating form:", error);
        return {
            message: 'An error occurred while cloning and updating the form.',
            success: false,
            error: error.message,
        };
    }
};
