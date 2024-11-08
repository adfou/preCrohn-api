import { Form } from "../Models/index.mjs"; //'../../Models/index.mjs'; // Adjust the path as needed

export const GetPhaseStr = async (FormCount, state, role) => {
    try {
        if(role===1){
            return '_'
        }
        // Count the number of forms associated with the user_id
        let indicator = FormCount
        if(role ==="1"){ return "_"}
        if(FormCount === -1){
            if(role === "2"){
                return "Phase Three"}
            else{
            return "Phase Two "}
        }
        
  
            //Intervention
            switch (indicator){

                case 0:
                   
                    return "Baseline"
                case 1:
                    if(state === "1"){
                        return "Baseline"}
                    else{
                    return "Phase One "}
                case 2:
                        return "Phase One"
                  
                case 3:
                    if(role==='3'){
                        return "Phase Two"}
                    
                    else{  
                return "Phase Three "}
                 case 3:
                   
                    return "Phase Three"
            }
            
      
    } catch (error) {
        console.error("Error fetching form count:", error);
        return "Baseline";
    }
};
