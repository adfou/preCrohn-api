import { Form, User} from '../../Models/index.mjs'; // Adjust the path as needed
import {SugareCalculation ,fruitCalculation ,AcitvityCalculation ,FiberCalculation ,RiskCalculationsFemal} from "../../utils/index.mjs"
import {Servings_per_Day} from "../../data/data.mjs"
// Controller function to get form data by user_id
export const RiskCalculation = async (req, res) => {
   
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    try {
        // Assuming the user_id is retrieved from the authenticated user (from token or session)
      
        const user_id = req.user.id;

        console.log("========================");
        console.log("user_id", user_id);
        console.log("========================");
        const user = req.user
        //here i wanna get the user biomarkers field and log it to chatgpt
        
        // Find the form by user_id
        const form = await Form.findOne({
            where: {
                user_id
            }
        });
        
        if (form) {
            // If the form exists, return the form data
            //console.log(form.form_data)
            console.log("form.form_data:",form.form_data)
            const dataObj = form.form_data //JSON.parse(form.form_data);
            //console.log(dataObj["general-information"])
            const AcitvityCalcul = AcitvityCalculation(dataObj?.["your-physical-activity"])
            const SugarCalcul = SugareCalculation(dataObj)
            const FruitCalcul = fruitCalculation(dataObj['your-diet-2'],Servings_per_Day)
            const FiberCalcul = FiberCalculation(dataObj)
            console.log("===============")
            console.log("AcitvityCalcul",AcitvityCalcul)
            console.log("SugarCalcul",SugarCalcul)
            console.log("FruitCalcul",FruitCalcul)
            console.log("FiberCalcul",FiberCalcul)
            console.log("bio :",user.biomarkers)
            console.log("===============")
            const Result = RiskCalculationsFemal(dataObj,AcitvityCalcul,FruitCalcul,SugarCalcul,FiberCalcul,user.biomarkers)
            
            console.log("RiskClacul:",Result)
            return res.status(200).json(Result);
        } else {
            // If no form exists for this user, return a 404 response
            return res.status(404).json({
                success: false,
                message: 'No form data found for this user.'
            });
        }
    } catch (error) {
        console.error('Error fetching form data:', error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while fetching form data.',
            error: error.message
        });
    }
};