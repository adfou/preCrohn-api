import {SugarCalcuationBeverages ,SugarCalcuationSweets ,SugarCalcuationBreads ,SugarCalcuationFoods,Servings_per_Day} from "../data/data.mjs"



export const SugareCalculation = (data) => {
  let SugareCalculationData = {}; 
  let BervergesData = data?.["your-diet-6"];
  let SweetssData = data?.["your-diet-7"];
  let BreadsData = data?.["your-diet-5"];
  let FoodsData = data?.["your-diet"];

  FoodsData = Object.fromEntries(Object.entries(FoodsData).map(([key, value]) => [key, Servings_per_Day[value] || 0]));
  BervergesData = Object.fromEntries(Object.entries(BervergesData).map(([key, value]) => [key, Servings_per_Day[value] || 0]));
  SweetssData = Object.fromEntries(Object.entries(SweetssData).map(([key, value]) => [key, Servings_per_Day[value] || 0]));
  BreadsData = Object.fromEntries(Object.entries(BreadsData).map(([key, value]) => [key, Servings_per_Day[value] || 0]));
  
  let SugarCalcul = 0;

  // Beverages
  for (let key in SugarCalcuationBeverages) {
      if (BervergesData.hasOwnProperty(key)) {
        SugarCalcul += SugarCalcuationBeverages[key] * BervergesData[key];
        SugareCalculationData[key] = SugarCalcuationBeverages[key] * BervergesData[key];
      }
  }

  // Sweets
  for (let key in SugarCalcuationSweets) {
      if (SweetssData.hasOwnProperty(key)) {
        SugarCalcul += SugarCalcuationSweets[key] * SweetssData[key];
        SugareCalculationData[key] = SugarCalcuationSweets[key] * SweetssData[key];
      }
  }

  // Breads
  for (let key in SugarCalcuationBreads) {
      if (BreadsData.hasOwnProperty(key)) {
        SugarCalcul += SugarCalcuationBreads[key] * BreadsData[key];
        SugareCalculationData[key] = SugarCalcuationBreads[key] * BreadsData[key];
      }
  }

  // Foods
  for (let key in SugarCalcuationFoods) {
      if (FoodsData.hasOwnProperty(key)) {
        SugarCalcul += SugarCalcuationFoods[key] * FoodsData[key];
        SugareCalculationData[key] = SugarCalcuationFoods[key] * FoodsData[key];
      }
  }

  return { SugarCalcul, SugareCalculationData };
};
