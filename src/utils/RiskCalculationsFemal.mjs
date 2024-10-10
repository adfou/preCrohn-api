
//No–Quit
//No–Never smoked
//Yes
//Do you smoke cigarettes?
const DoYouSmokeCigarettesFemal = {
    "No–Quit":1.3,
    "No–Never smoked":1,
    "Yes":1.76,
}
//medical-history #How often do you use non-steroidal anti-inflammatory drugs (NSAIDs), such as Advil, Motrin, Aleve, ibuprofen, or naproxen?
const NSAIDsValueFemal={
    "0":1,
    "1":1.68,
    "2":1.68,
}
const BirthControlPill={
    "0":1,
    "1":1.24,
    "2":1.24
}
const PhysicalactivityFemale = (activityCalculation) => activityCalculation < 7.5 ? 1 : 0.73;

const FruitFemale = (FruitCalculation) => FruitCalculation < 2 ? 1 : 0.76;

const SugarFemale = (SugarCalculation) => SugarCalculation < 45 ? 1 : 1.41;

const FiberFemale = (FiberCalculation) => FiberCalculation < 25 ? 1 : 0.63;

const AntibioticCalculation = (qstn , old)=>{
    if(qstn === "NO"){
        return 1
    }
    else{
        //Have you ever taken birth control pills?
        if(old === 0){
            return 2,75
        }
        else{
            return 1
        }
    }

//
//medical-history
//Have you ever taken antibiotics? (Antibiotics are medicines used to treat infections like urinary tract infections, pneumonia, diverticulitis, strep throat, ear or sinus infection, and some sexually transmitted infections. They include medicines like amoxicillin, Augmentin, azithromycin or 'Z-pack,' nitrofurantoin or Macrobid, or ciprofloxacin.)


}


//Were you breast-fed when you were a baby?
const BreastFeeed = (Response) => Response === "1" ? 1 : 0.71;


//When you were a child or young adult, did you have pets in your home? 
const PetsAtHome = (Response) => Response === "1" ? 1 : 0.77;
const Biomarkers = (biomarkers) => biomarkers === "yes" ? 3.55 : 1;

function getFDRValueSetp2(age, fdr) {
    // Define the table data
    age = parseInt(age, 10); // Base 10 conversion
    const table = [
        { ageGroup: [14, 19], fdr1: 1.98934610381535, fdr2: 5.18001626028983 },
        { ageGroup: [20, 29], fdr1: 1.83693877520087, fdr2: 4.78921854258134 },
        { ageGroup: [30, 39], fdr1: 1.27798354136848, fdr2: 3.34739231556498 },
        { ageGroup: [40, 49], fdr1: 1.01346943412904, fdr2: 2.66037168402227 },
        { ageGroup: [50, 59], fdr1: 0.697277659443207, fdr2: 1.83515219122872 },
        { ageGroup: [60, 69], fdr1: 0.405137096321873, fdr2: 1.06884680060144 },
        { ageGroup: [70, 79], fdr1: 0.265865948812716, fdr2: 0.702222811880449 }
    ];

    // Find the matching age group
    const matchedGroup = table.find(group => age >= group.ageGroup[0] && age <= group.ageGroup[1]);


    // Return the value based on fdr (1 or 2 or more)
    if (fdr === 1) {
        return matchedGroup.fdr1;
    } else if (fdr >= 2) {
        return matchedGroup.fdr2;
    } else {
        return "Invalid FDR value";
    }
}

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

export const RiskCalculationsFemal =(data,activityCalculation,FruitCalculation,SugarCalculation,FiberCalculation,biomarkers) => {
    const MedicalHistory = data['medical-history']
    const SmokingHistory = data['your-smoking-history']
    const Age = data["general-information"]["How old are you?"]
    let result =0
    //antibiotic
    result += AntibioticCalculation(MedicalHistory["Have you ever taken antibiotics? (Antibiotics are medicines used to treat infections like urinary tract infections, pneumonia, diverticulitis, strep throat, ear or sinus infection, and some sexually transmitted infections. They include medicines like amoxicillin, Augmentin, azithromycin or 'Z-pack,' nitrofurantoin or Macrobid, or ciprofloxacin.)"])
    result += FiberFemale(FiberCalculation)
    result += PhysicalactivityFemale(activityCalculation)
    result += FruitFemale(FruitCalculation)
    result += SugarFemale(SugarCalculation)
    result += NSAIDsValueFemal[MedicalHistory['How often do you use non-steroidal anti-inflammatory drugs (NSAIDs), such as Advil, Motrin, Aleve, ibuprofen, or naproxen?']]
    result += PetsAtHome(MedicalHistory['When you were a child or young adult, did you have pets in your home? '])
    result += BreastFeeed(MedicalHistory['Were you breast-fed when you were a baby?'])
    result += DoYouSmokeCigarettesFemal[SmokingHistory['Do you smoke cigarettes?']]
    result += Biomarkers(biomarkers)
    result += BirthControlPill[MedicalHistory["Have you ever taken birth control pills?"]]
 /*
    console.log("=========================")
    console.log("antibiotic",AntibioticCalculation(MedicalHistory["Have you ever taken antibiotics? (Antibiotics are medicines used to treat infections like urinary tract infections, pneumonia, diverticulitis, strep throat, ear or sinus infection, and some sexually transmitted infections. They include medicines like amoxicillin, Augmentin, azithromycin or 'Z-pack,' nitrofurantoin or Macrobid, or ciprofloxacin.)"]))
    console.log("NSAIDs:",NSAIDsValueFemal[MedicalHistory['How often do you use non-steroidal anti-inflammatory drugs (NSAIDs), such as Advil, Motrin, Aleve, ibuprofen, or naproxen?']])
    console.log("pet at home:",PetsAtHome(MedicalHistory['When you were a child or young adult, did you have pets in your home? ']))
    console.log("BreastFeeed:",BreastFeeed(MedicalHistory['Were you breast-fed when you were a baby?']))
    console.log("doyousmokeCigarettes",DoYouSmokeCigarettesFemal[SmokingHistory['Do you smoke cigarettes?']])
    console.log("Biomarkers(biomarkers):",Biomarkers(biomarkers))
    console.log("controle pill birth :",BirthControlPill[MedicalHistory["Have you ever taken birth control pills?"]])
    console.log("FiberFemale(FiberCalculation):",FiberFemale(FiberCalculation))
    console.log("PhysicalactivityFemale(activityCalculation)",PhysicalactivityFemale(activityCalculation))
    console.log("FruitFemale(FruitCalculation)",FruitFemale(FruitCalculation))
    console.log("SugarFemale(SugarCalculation)",SugarFemale(SugarCalculation))
 
   
   console.log("=======================")
    console.log("fruit calculation1:",FruitFemale(FruitCalculation))
    console.log("========================")
    
    console.log("StepTwo",(result/2.375))
    console.log("========================")
    console.log("========================")
    console.log("StepTwo",StepTwo)
    console.log("========================")

   
    console.log("FinalResult",FinalResult)
    console.log("========================")*/
    const setpOne = (result/2.375)
    const StepTwo = getFDRValueSetp2(Age,1)
    const FinalResult = {
        FinalResult:setpOne*StepTwo,
        FinalRsultRound:Math.round(setpOne*StepTwo),
        RR:setpOne,
        StepTwo:StepTwo,
        TestCase:result,

        SugarCalculation:SugarFemale(SugarCalculation),
        Fruit:FruitFemale(FruitCalculation),
        Physicalactivity:PhysicalactivityFemale(activityCalculation),
        FiberFemale:FiberFemale(FiberCalculation),
        BirthControlPill:BirthControlPill[MedicalHistory["Have you ever taken birth control pills?"]],
        Biomarkers:Biomarkers(biomarkers),
        DoYouSmokeCigarettesFemal:DoYouSmokeCigarettesFemal[SmokingHistory['Do you smoke cigarettes?']],
        BreastFeeed:BreastFeeed(MedicalHistory['Were you breast-fed when you were a baby?']),
        PetsAtHome:PetsAtHome(MedicalHistory['When you were a child or young adult, did you have pets in your home? ']),
        NSAIDsValueFemal:NSAIDsValueFemal[MedicalHistory['How often do you use non-steroidal anti-inflammatory drugs (NSAIDs), such as Advil, Motrin, Aleve, ibuprofen, or naproxen?']],
        AntibioticCalculation:AntibioticCalculation(MedicalHistory["Have you ever taken antibiotics? (Antibiotics are medicines used to treat infections like urinary tract infections, pneumonia, diverticulitis, strep throat, ear or sinus infection, and some sexually transmitted infections. They include medicines like amoxicillin, Augmentin, azithromycin or 'Z-pack,' nitrofurantoin or Macrobid, or ciprofloxacin.)"]),
        CategorizeRisk:categorizeRisk(setpOne)
    }

    return FinalResult
}