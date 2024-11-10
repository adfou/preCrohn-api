
//No–Quit
//No–Never smoked
//Yes
//Do you smoke cigarettes?
const DoYouSmokeCigarettes = {
    "No–Quit":1.3,
    "No–Never smoked":1,
    "Yes":1.76,
}
//medical-history #How often do you use non-steroidal anti-inflammatory drugs (NSAIDs), such as Advil, Motrin, Aleve, ibuprofen, or naproxen?
const NSAIDsValue={
    "0":1,
    "1":1,
    "2":1.68,
}

const Physicalactivitye = (activityCalculation) => activityCalculation < 7.5 ? 1 : 0.73;

const Fruite = (FruitCalculation) => FruitCalculation < 2 ? 1 : 0.76;

const Sugare = (SugarCalculation) => SugarCalculation < 45 ? 1 : 1.5;

const Fibere = (FiberCalculation) => FiberCalculation < 25 ? 1 : 0.54;

const AntibioticCalculation = (qstn, old) => {
  
    if (qstn === "No") {
      return 1;
    } else {
      // Check if "0–10 years old" exists in the old array
      if (old.includes("0–10 years old")) {
        return 2.75;
      } else {
        return 1;
      }
    }
  };

function categorizeRisk(RR) {
    if (RR < 0.25) {
        return "VERY LOW";
    } else if (RR >= 0.25 && RR < 0.75) {
        return "LOW";
    } else if (RR >= 0.75 && RR < 1.50) {
        return "SIMILAR";
    } else if (RR >= 1.50 && RR < 3.00) {
        return "HIGH";
    } else if (RR >= 3.00) {
        return "VERY HIGH";
    } else {
        return "Invalid RR value";
    }
}


//Were you breast-fed when you were a baby?
const BreastFeeed = (Response) => Response === "1" ? 1 : 0.71;


//When you were a child or young adult, did you have pets in your home? 
const PetsAtHome = (Response) => Response === "1" ? 1 : 0.77;
const Biomarkers = (biomarkers) => biomarkers === "yes" ? 3.55 : 1;

function getFDRValueSetp2(age,FamilyHistory) {
    // Define the table data
    
    let FamilyCount = 0;
    try {
        FamilyCount += parseInt(FamilyHistory['parents'])|| 0;
        }
    catch{
        console.log(" no parents")
    }

    try {
        FamilyCount += parseInt(FamilyHistory['sibling'])|| 0;
        }
    catch{
       // console.log(" no sibling")
    }

    try {
        FamilyCount += parseInt(FamilyHistory['Child'])|| 0;
        //console.log("sibling:",FamilyHistory['Child'])
        }
    catch{
        //console.log(" no Child")
    }
    age = parseInt(age, 10); // Base 10 conversion
    const table = [
        { ageGroup: [14, 19], fdr1: 1.8776483692434, fdr2: 4.89370260837226 },
        { ageGroup: [20, 29], fdr1: 1.70468301496937, fdr2: 4.44928191021379 },
        { ageGroup: [30, 39], fdr1: 1.20915031030243, fdr2: 3.16890364922415 },
        { ageGroup: [40, 49], fdr1: 0.878082141552761, fdr2: 2.30755905558768 },
        { ageGroup: [50, 59], fdr1: 0.645269139383342, fdr2: 1.69900138145 },
        { ageGroup: [60, 69], fdr1: 0.325190107885664, fdr2: 0.858493715311159 },
        { ageGroup: [70, 79], fdr1: 0.0560842668922312, fdr2: 0.148389793309067 }
    ];

    // Find the matching age group
    const matchedGroup = table.find(group => age >= group.ageGroup[0] && age <= group.ageGroup[1]);


    // Return the value based on fdr (1 or 2 or more)
    if (FamilyCount < 2) {
        return matchedGroup.fdr1;
    } else  {
        return matchedGroup.fdr2;
    } 
}



export const RiskCalculationsMale =(data,activityCalculation,FruitCalculation,SugarCalculation,FiberCalculation,biomarkers) => {
    const MedicalHistory = data['medical-history']
    const SmokingHistory = data['your-smoking-history']
    const FamilyHistory = data['family-history']
    console.log("SmokingHistory:",SmokingHistory)
    const Age = data["general-information"]["How old are you?"]
    let result =0
    //antibiotic
    result *= AntibioticCalculation(MedicalHistory["Have you ever taken antibiotics? (Antibiotics are medicines used to treat infections like urinary tract infections, pneumonia, diverticulitis, strep throat, ear or sinus infection, and some sexually transmitted infections. They include medicines like amoxicillin, Augmentin, azithromycin or 'Z-pack,' nitrofurantoin or Macrobid, or ciprofloxacin.)"],MedicalHistory["What age(s) did you take antibiotics? (Select all that apply.)"])
    result *= Fibere(FiberCalculation)
    result *= Physicalactivitye(activityCalculation)
    result *= Fruite(FruitCalculation)
    result *= Sugare(SugarCalculation)
    result *= NSAIDsValue[MedicalHistory['How often do you use non-steroidal anti-inflammatory drugs (NSAIDs), such as Advil, Motrin, Aleve, ibuprofen, or naproxen?']]
    result *= PetsAtHome(MedicalHistory['When you were a child or young adult, did you have pets in your home? '])
    result *= BreastFeeed(MedicalHistory['Were you breast-fed when you were a baby?'])
    result *= DoYouSmokeCigarettes[SmokingHistory['Do you smoke cigarettes?']]
    result *= Biomarkers(biomarkers)
    //result += BirthControlPill[MedicalHistory["Have you ever taken birth control pills?"]]


    const setpOne = (result/1.998)

    const StepTwo = getFDRValueSetp2(Age,FamilyHistory)
    
    //const FinalResult = setpOne*StepTwo

    const FinalResult = {
        FinalResult:setpOne*StepTwo,
        FinalRsultRound:Math.round(setpOne*StepTwo),
        RR:setpOne,
        StepTwo:StepTwo,
        TestCase:result,

        SugarCalculation:Sugare(SugarCalculation),
        Fruit:Fruite(FruitCalculation),
        Physicalactivity:Physicalactivitye(activityCalculation),
        FiberFemale:Fibere(FiberCalculation),
        //BirthControlPill:BirthControlPill[MedicalHistory["Have you ever taken birth control pills?"]],
        Biomarkers:Biomarkers(biomarkers),
        DoYouSmokeCigarettesFemal:DoYouSmokeCigarettes[SmokingHistory['Do you smoke cigarettes?']],
        BreastFeeed:BreastFeeed(MedicalHistory['Were you breast-fed when you were a baby?']),
        PetsAtHome:PetsAtHome(MedicalHistory['When you were a child or young adult, did you have pets in your home? ']),
        NSAIDsValueFemal:NSAIDsValue[MedicalHistory['How often do you use non-steroidal anti-inflammatory drugs (NSAIDs), such as Advil, Motrin, Aleve, ibuprofen, or naproxen?']],
        AntibioticCalculation:AntibioticCalculation(MedicalHistory["Have you ever taken antibiotics? (Antibiotics are medicines used to treat infections like urinary tract infections, pneumonia, diverticulitis, strep throat, ear or sinus infection, and some sexually transmitted infections. They include medicines like amoxicillin, Augmentin, azithromycin or 'Z-pack,' nitrofurantoin or Macrobid, or ciprofloxacin.)"],MedicalHistory["What age(s) did you take antibiotics? (Select all that apply.)"]),
        CategorizeRisk:categorizeRisk(setpOne)
    }

    return FinalResult 
}