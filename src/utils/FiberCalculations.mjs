import {FiberCalcuationSweets,
    FiberCalcuationBreads,FiberCalcuationVegetables,FiberCalcuationFruit,Servings_per_Day} from "../data/data.mjs"



export const FiberCalculation = (data)=>{
    let BervergesData= data?.["your-diet-6"]
    let FiberData = {}

    let SweetssData=data?.["your-diet-7"]
    let BreadsData=data?.["your-diet-5"]
    let FruitData=data?.["your-diet-2"]
    let Vegetables = data?.["your-diet-3"]
    FruitData = Object.fromEntries(Object.entries(FruitData).map(([key, value]) => [key, Servings_per_Day[value] || 0]));

    SweetssData = Object.fromEntries(Object.entries(SweetssData).map(([key, value]) => [key, Servings_per_Day[value] || 0]));

    BreadsData = Object.fromEntries(Object.entries(BreadsData).map(([key, value]) => [key, Servings_per_Day[value] || 0]));
    
    Vegetables = Object.fromEntries(Object.entries(Vegetables).map(([key, value]) => [key, Servings_per_Day[value] || 0]));
   
    let result = 0
    //Beverages
    let test = 0
    
    for (let key in FiberCalcuationVegetables) {
        if (Vegetables.hasOwnProperty(key)) {
          result += FiberCalcuationVegetables[key] * Vegetables[key];
          FiberData[key]=FiberCalcuationVegetables[key] * Vegetables[key];
        }
      }

      //Sweetss
    for (let key in FiberCalcuationSweets) {
        if (SweetssData.hasOwnProperty(key)) {
            
          result += FiberCalcuationSweets[key] * SweetssData[key];
          FiberData[key]=FiberCalcuationSweets[key] * SweetssData[key];
          
        }
      }
  
      //result=0
    for (let key in FiberCalcuationBreads) {
        if (BreadsData.hasOwnProperty(key)) {
          result += FiberCalcuationBreads[key] * BreadsData[key];
          FiberData[key]=FiberCalcuationBreads[key] * BreadsData[key];
          
        }
      }
      
      //Foods
      for (let key in FiberCalcuationFruit) {
        if (FruitData.hasOwnProperty(key)) {
          result += FiberCalcuationFruit[key] * FruitData[key];
          FiberData[key]=FiberCalcuationFruit[key] * FruitData[key];
          
        }
      }
    return {FiberCalcul:result,FiberData};
    
}