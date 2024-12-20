import {ActivityQstnr_A_per_h, ActivityStairs, exercisePaces, ActivityWalkingPace} from "../data/data.mjs"



export const AcitvityCalculation = (data)=>{
    //console.log("data:",data)
    const walkingPace= ActivityWalkingPace[data?.["What is your usual walking pace outdoors?"]]
    const  walkingCalculation = ActivityQstnr_A_per_h[data?.["Walking for exercise or walking for transportation/errands"]] *walkingPace
   
    const Sumstairs = ActivityStairs[data?.["How many total flights of stairs (not individual steps) do you climb daily?"]] *8
    let result = 0
    for (const key in exercisePaces) {
        if (exercisePaces.hasOwnProperty(key) && data.hasOwnProperty(key)) {
        result +=(exercisePaces[key])*(ActivityQstnr_A_per_h[data[key]])
     
        }
    }
    result +=  walkingCalculation + Sumstairs
    return result
}

export const AcitvityCalculationIntermediate = (data) => {
    // console.log("data:", data)
    const walkingPace = ActivityWalkingPace[data?.["What is your usual walking pace outdoors?"]];
    const walkingCalculation =
      ActivityQstnr_A_per_h[data?.["Walking for exercise or walking for transportation/errands"]] * walkingPace;
    const Sumstairs = ActivityStairs[data?.["How many total flights of stairs (not individual steps) do you climb daily?"]] * 8;
  
    let result = {}; // Initialize result as an object, not as a number
  
    for (const key in exercisePaces) {
      if (exercisePaces.hasOwnProperty(key) && data.hasOwnProperty(key)) {
        result[key] = exercisePaces[key] * ActivityQstnr_A_per_h[data[key]];
      }
    }
  
    // Add walking and stairs calculations to the result object
    result['walking Calculation'] = walkingCalculation;
    result['stairs'] = Sumstairs;
  
    return result;
  };
  