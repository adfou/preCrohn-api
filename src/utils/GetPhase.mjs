import { Form } from "../Models/index.mjs"; //'../../Models/index.mjs'; // Adjust the path as needed

export const getUserFormCount = async (userId, state, role) => {
    try {
        // Count the number of forms associated with the user_id
        const formCount = await Form.count({
            where: {
                user_id: userId,
            },
        });

        if (role === "2") {
            console.log("formCount",formCount)
            if ( formCount === 1) return 1;
            if (formCount === 2) return 2;
            if (formCount === 3) return 3;
            return -1;
        }

        if (role === "3") {
            
            if (formCount === 1) return 1;
            if (formCount === 2) return 2;
            return -1;
        }
       
        return -2;
    } catch (error) {
        console.error("Error fetching form count:", error);
        return 0;
    }
};
