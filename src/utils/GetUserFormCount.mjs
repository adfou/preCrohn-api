import { Form } from "../Models/index.mjs"; //'../../Models/index.mjs'; // Adjust the path as needed

export const getUserFormCount = async (userId, role) => {
    try {
        // Count the number of forms associated with the user_id
        const formCount = await Form.count({
            where: {
                user_id: userId,
            },
        });

        if (role === "2") {
            if (formCount === 0) return 0;
            if (formCount === 1) return 1;
            if (formCount === 2) return 2;
            return -1;
        }

        if (role === "3") {
            console.log("======================")
            console.log("nami role ",role)
            console.log("formCount nami",formCount)
            console.log("======================")
            if (formCount === 0) return 0;
            if (formCount === 1) return 1;
            if (formCount === 2) return 2;
            if (formCount === 3) return 3;
            return -1;
        }
       
        return -2;
    } catch (error) {
        console.error("Error fetching form count:", error);
        return 0;
    }
};
