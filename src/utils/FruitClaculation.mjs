
const fruitCalculation = (data,dataCalculation)=>{
 
    let totalSum = 0;
    
    for (let key in data) {
        if (typeof data[key] === 'string' && !isNaN(data[key])) {
            
            let currentValue = dataCalculation[data[key]]
         
            totalSum += currentValue;  // Convert to integer and add to totalSum
        }
    }
   return totalSum

}


export{fruitCalculation}