
const fruitCalculation = (data, dataCalculation) => {
    let totalSum = 0;
    let FruitData = {};
    for (let key in data) {
        if (typeof data[key] === 'string' && !isNaN(data[key])) {
            let currentValue = dataCalculation[data[key]];
            FruitData[key] = currentValue;  // Fixing to use key as a dynamic property
            totalSum += currentValue;  // Add to totalSum
        }
    }
    return { FruitCalcul: totalSum, FruitData };
};



const fruitCalculationServing = (data,dataCalculation)=>{
 
    let totalSum = {};
    let FruitDataServingData = {};
    for (let key in data) {
        if (typeof data[key] === 'string' && !isNaN(data[key])) {
            
            let currentValue = dataCalculation[data[key]]
            FruitDataServingData[key] = currentValue
            totalSum[key] = currentValue;  // Convert to integer and add to totalSum
        }
    }
   return {FruitCalculationServing:totalSum,FruitDataServingData};

}




export{fruitCalculation,fruitCalculationServing}