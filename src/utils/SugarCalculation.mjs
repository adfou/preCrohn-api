import {SugarCalcuationBeverages ,SugarCalcuationSweets ,SugarCalcuationBreads ,SugarCalcuationFoods,Servings_per_Day} from "../data/data.mjs"



export const SugareCalculation = (data)=>{
    let BervergesData= data?.["your-diet-6"]
    let SweetssData=data?.["your-diet-7"]
    let BreadsData=data?.["your-diet-5"]
    let FoodsData=data?.["your-diet"]
    FoodsData = Object.fromEntries(Object.entries(FoodsData).map(([key, value]) => [key, Servings_per_Day[value] || 0]));
    BervergesData = Object.fromEntries(Object.entries(BervergesData).map(([key, value]) => [key, Servings_per_Day[value] || 0]));
    SweetssData = Object.fromEntries(Object.entries(SweetssData).map(([key, value]) => [key, Servings_per_Day[value] || 0]));
    BreadsData = Object.fromEntries(Object.entries(BreadsData).map(([key, value]) => [key, Servings_per_Day[value] || 0]));
   
    let result = 0
    //Beverages

    for (let key in SugarCalcuationBeverages) {
        if (BervergesData.hasOwnProperty(key)) {
          result += SugarCalcuationBeverages[key] * BervergesData[key];
        }
      }
  

      //Sweetss

    for (let key in SugarCalcuationSweets) {
        if (SweetssData.hasOwnProperty(key)) {
          result += SugarCalcuationSweets[key] * SweetssData[key];
        }
      }
      //result=0

    for (let key in SugarCalcuationBreads) {
        if (BreadsData.hasOwnProperty(key)) {
          result += SugarCalcuationBreads[key] * BreadsData[key];
        }
      }
      //Foods

      for (let key in SugarCalcuationFoods) {
        if (FoodsData.hasOwnProperty(key)) {
          result += SugarCalcuationFoods[key] * FoodsData[key];
          
        }
      }
 

    
    return result
    
}