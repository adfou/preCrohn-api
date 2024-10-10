const question_activity = {
    0: 7.0,
    1: 12.0,
    2: 7.0,
    3: 7.0,
    4: 7.0,
    5: 6.0,
    6: 4.0,
    7: 6.0,
    8: 4.0,
    9: 8.0
}
const data_walking={
    0:0,
    1:  2.5,
    2:  3.0,
    3:  4.0,
    4:  4.5
}
const data_stairs ={
    0 : 0,
    1 : 0.031,
    2 : 0.054,
    3 : 0.109,
    4 : 0.187,
    5 : 0.264,
}

const Servings_per_Day ={
    "0": 0,
    "1": 0.07,
    "2": 0.14,
    "3": 0.43,
    "4": 0.79,
    "5": 1,
    "6": 2.5,
    "7": 4.5,
    "8": 6,
  }
//your-diet
  const SugarCalcuationFoods = {
    "Non-dairy coffee whitener; exclude fat-free (1 Tbs)":1.792,
    "Frozen yogurt, sherbet, sorbet, or low-fat ice cream (1 cup)":22.77165,
    "Regular ice cream (1 cup)":27.873,
    "Yogurt (4-6 oz.) - Sweetened (e.g., strawberry, vanilla)":19.04,

  }
  //your-diet-5
  const SugarCalcuationBreads = {
    "Cold breakfast cereal (1 serving)":9.15008943089431,
    "Muffins or biscuits (1)":12.4314,
  }
  //your-diet-6
  const SugarCalcuationBeverages = {
    "CARBONATED BEVERAGES Regular types (not sugar-free)_Carbonated beverage with caffeine and sugar (e.g., Coke, Pepsi, Mt. Dew, Dr. Pepper)":33.12,
    "_Other sugared beverages (e.g., punch, lemonade, sports drinks)":41.07,
    "OTHER BEVERAGES_Other sugared beverages (e.g., punch, lemonade, sports drinks, or sugared ice tea); (1 glass, bottle, can)":33.44668,

  }
  //your-diet-7
  const SugarCalcuationSweets = {
    "Milk chocolate (e.g., Hershey’s, M&M’s); (1 bar or package)":20.108,
    "Dark chocolate (e.g., Hershey’s Dark or Dove Dark); (1 bar)":19.311,
    "Candy bars (e.g., Snickers, Milky Way, Reeses); (1 bar)":27.93,
    "Candy without chocolate (1 oz.)":23.072,
    "Cookies (1) or brownie (1) Other ready-made, mix, or dough":6.51792,
    "Cookies (1) or brownie (1) Home-baked, from scratch":8.484,
    "Doughnut (1)":8.484,
    "Cake (home-baked or ready made); (slice)":27.258,
    "Pie (home-baked or ready made); (slice)":3.936,
    "Jams, jellies, preserves, syrup, or honey (1 Tbs)":10.6292,
    "Sweet roll, coffee cake, or other pastry (regular, fat-free, or reduced fat); (1)":10.547,
    "Breakfast bar (e.g., Nutrigrain, Kashi, granola); (1)":8.534,
    "Energy bar (e.g., Clif, Luna, Glucerna, Powerbar); (1)":12.264,
    "High-protein bar (e.g., Atkins, Zone, South Beach); (1)":10.752,

  }
// 
const SugarCalcuation = {
    //DAIRY FOODS 
    "Non-dairy coffee whitener; exclude fat-free (1 Tbs)":1.792,
    "Frozen yogurt, sherbet, sorbet, or low-fat ice cream (1 cup)":22.77165,
    "Regular ice cream (1 cup)":27.873,
    "Yogurt (4-6 oz.) - Sweetened (e.g., strawberry, vanilla)":19.04,
    //BREADS, CEREALS, STARCHES
    "Cold breakfast cereal (1 serving)":9.15008943089431,
    "Muffins or biscuits (1)":12.4314,
    //BEVERAGES
    "CARBONATED BEVERAGES Regular types (not sugar-free)_Carbonated beverage with caffeine and sugar (e.g., Coke, Pepsi, Mt. Dew, Dr. Pepper)":33.12,
    "_Other sugared beverages (e.g., punch, lemonade, sports drinks)":41.07,
    "OTHER BEVERAGES_Other sugared beverages (e.g., punch, lemonade, sports drinks, or sugared ice tea); (1 glass, bottle, can)":33.44668,
    //SWEETS, BAKED GOODS, MISCELLANEOUS
    "Milk chocolate (e.g., Hershey’s, M&M’s); (1 bar or package)":20.108,
    "Dark chocolate (e.g., Hershey’s Dark or Dove Dark); (1 bar)":19.311,
    "Candy bars (e.g., Snickers, Milky Way, Reeses); (1 bar)":27.93,
    "Candy without chocolate (1 oz.)":23.072,
    "Cookies (1) or brownie (1) Other ready-made, mix, or dough":6.51792,
    "Cookies (1) or brownie (1) Home-baked, from scratch":8.484,
    "Doughnut (1)":8.484,
    "Cake (home-baked or ready made); (slice)":27.258,
    "Pie (home-baked or ready made); (slice)":3.936,
    "Jams, jellies, preserves, syrup, or honey (1 Tbs)":10.6292,
    "Sweet roll, coffee cake, or other pastry (regular, fat-free, or reduced fat); (1)":10.547,
    "Breakfast bar (e.g., Nutrigrain, Kashi, granola); (1)":8.534,
    "Energy bar (e.g., Clif, Luna, Glucerna, Powerbar); (1)":12.264,
    "High-protein bar (e.g., Atkins, Zone, South Beach); (1)":10.752,


}
const FiberCalcuationFruit={
    "Raisins (1 oz. or small pack) or grapes (1/2 cup)":0.90288,
    "Prunes or dried plums (¼ cup or 6 dried)":3.35946,
    "Bananas (1)":3.068,
    "Cantaloupe (1/4 melon)":1.242,
    "Avocado (1/2 fruit or 1/2 cup)":6.7,
    "Fresh apples or pears (1)":4.667,
    "Oranges (1)":3.144,
    "Grapefruit (1/2) or grapefruit juice (small glass)":1.0411,
    "Strawberries, fresh, frozen, or canned (1/2 cup)":1.52,
    "Blueberries, fresh, frozen, or canned (1/2 cup)":1.776,
    "Peaches or plums (1 fresh or 1/2 cup canned)":1.921,
    "Apricots (1 fresh, 1/2 cup canned, or 5 dried)":1.08682,
}

const FiberCalcuationVegetables= {
    "Tomatoes (2 slices)":0.48,
    "Tomato or V-8 juice (small glass)":0.83902,
    "Tomato sauce (e.g., spaghetti sauce) (1/2 cup)":2.304,
    "String beans (1/2 cup)":2.04,
    "Beans or lentils (baked, dried, or soup) (1/2 cup)":6.60608,
    "Peas or lima beans (fresh, frozen, canned, or soup) (1/2 cup)":3.8475,
    "Broccoli (1/2 cup)":2.574,
    "Cauliflower (1/2 cup)":1.426,
    "Cabbage or coleslaw (1/2 cup)":1.8012,
    "Brussels sprouts (1/2 cup)":3.198,
    "Carrots (raw); (1/2 carrot or 2-4 sticks)":1.116,
    "Carrots (cooked); (1/2 cup) or carrot juice (2-3 oz.)":2.34,
    "Corn (fresh, frozen, or canned); (1 ear or 1/2 cup)":1.968,
    "Mixed vegetables (stir-fry or soup); (1/2 cup)":4.004,
    "Yams or sweet potatoes (1/2 cup":3.2592,
    "Dark orange (winter) squash (1/2 cup)":2.856,
    "Eggplant, zucchini, or other summer squash (1/2 cup)":0.9,
    "Kale, arugula, mustard greens, or chard (1/2 cup)":1.13626,
    "Spinach (cooked); (1/2 cup)":2.16,
    "Spinach (raw); (1 cup)":0.66,
    "Iceberg or head lettuce (1 serving)":1.068,
    "Romaine or leaf lettuce (1 serving)":1.785,
    "Green, yellow or red peppers (2 rings or 1/4 small)":0.2076,
    "Onions, cooked (e.g., rings or soup); (1/2 cup)":0.935,
}

const FiberCalcuationBreads = {
    "Cold breakfast cereal (1 serving)":4.4212908762421,
    "Cooked oatmeal/cooked oat bran (including instant) (1 cup)":3.82177,
    "Other cooked breakfast cereal (1 cup)":3.19794,
    "Bread (1 slice) - Whole wheat, oatmeal, other whole grain":2.1623,
    "Crackers (6) - Whole grain/whole wheat":1.42,
    "Brown rice (1 cup)":3.12,
}

const FiberCalcuationSweets = {
    "Popcorn (2-3 cups) Fat-free or light":3.201,
    "Popcorn (2-3 cups) Regular":3.201,
    "Oat bran, other bran (e.g., wheat, etc.) added to food (1 Tbs)":1.33394,
}
const FiberCalcuation={
    //FRUIT your-diet-2
    "Raisins (1 oz. or small pack) or grapes (1/2 cup)":0.90288,
    "Prunes or dried plums (¼ cup or 6 dried)":3.35946,
    "Bananas (1)":3.068,
    "Cantaloupe (1/4 melon)":1.242,
    "Avocado (1/2 fruit or 1/2 cup)":0,
    "Fresh apples or pears (1)":4.667,
    "Oranges (1)":3.144,
    "Grapefruit (1/2) or grapefruit juice (small glass)":1.0411,
    "Strawberries, fresh, frozen, or canned (1/2 cup)":1.52,
    "Blueberries, fresh, frozen, or canned (1/2 cup)":1.776,
    "Peaches or plums (1 fresh or 1/2 cup canned)":1.921,
    "Apricots (1 fresh, 1/2 cup canned, or 5 dried)":1.08682,
    //VEGETABLES
    "Tomatoes (2 slices)":0.48,
    "Tomato or V-8 juice (small glass)":0.83902,
    "Tomato sauce (e.g., spaghetti sauce) (1/2 cup)":2.304,
    "String beans (1/2 cup)":2.04,
    "Beans or lentils (baked, dried, or soup) (1/2 cup)":6.60608,
    "Peas or lima beans (fresh, frozen, canned, or soup) (1/2 cup)":3.8475,
    "Broccoli (1/2 cup)":2.574,
    "Cauliflower (1/2 cup)":1.426,
    "Cabbage or coleslaw (1/2 cup)":1.8012,
    "Brussels sprouts (1/2 cup)":3.198,
    "Carrots (raw); (1/2 carrot or 2-4 sticks)":1.116,
    "Carrots (cooked); (1/2 cup) or carrot juice (2-3 oz.)":2.34,
    "Corn (fresh, frozen, or canned); (1 ear or 1/2 cup)":1.968,
    "Mixed vegetables (stir-fry or soup); (1/2 cup)":4.004,
    "Yams or sweet potatoes (1/2 cup":3.2592,
    "Dark orange (winter) squash (1/2 cup)":2.856,
    "Eggplant, zucchini, or other summer squash (1/2 cup)":0.9,
    "Kale, arugula, mustard greens, or chard (1/2 cup)":1.13626,
    "Spinach (cooked); (1/2 cup)":2.16,
    "Spinach (raw); (1 cup)":0.66,
    "Iceberg or head lettuce (1 serving)":1.068,
    "Romaine or leaf lettuce (1 serving)":1.785,
    "Green, yellow or red peppers (2 rings or 1/4 small)":0.2076,
    "Onions, cooked (e.g., rings or soup); (1/2 cup)":0.935,
    //breads
    "Cold breakfast cereal (1 serving)":4.4212908762421,
    "Cooked oatmeal/cooked oat bran (including instant) (1 cup)":3.82177,
    "Other cooked breakfast cereal (1 cup)":3.19794,
    "Bread (1 slice) - Whole wheat, oatmeal, other whole grain":2.1623,
    "Crackers (6) - Whole grain/whole wheat":1.42,
    "Brown rice (1 cup)":3.12,

    //sweets 
    "Popcorn (2-3 cups) Fat-free or light":3.201,
    "Popcorn (2-3 cups) Regular":3.201,
    "Oat bran, other bran (e.g., wheat, etc.) added to food (1 Tbs)":1.33394,
    
}



const ActivityWalkingPace={
    "0": 0,
    "1": 2.50,
    "2": 3.00,
    "3": 4.00,
    "4": 4.50,
   
  };

  const exercisePaces = {
    "Jogging (>10 min/mi)": 7.00,
    "Running (<10 min/mi)": 12.00,
    "Bicycling (include stationary machine)": 7.00,
    "Tennis, squash, racquetball": 7.00,
    "Lap swimming": 7.00,
    "Other aerobic exercise (e.g., aerobic dance, ski or stair machine, etc.))": 6.00,
    "Lower-intensity exercise (e.g., yoga, stretching, toning)": 4.00,
    "Other vigorous activities (e.g., lawn mowing)": 6.00,
    "Arm weights": 4.00,
    "Leg weights": 4.00,
    //"How many total flights of stairs (not individual steps) do you climb daily?": 8.00
  };

  const ActivityStairs  = {
    "0":0,
    "1": 0.031,
    "2": 0.054,
    "3": 0.109,
    "4": 0.187,
    "5": 0.264
  };

  const ActivityQstnr_A_per_h = {
    "0": 0,
    "1": 0.03,
    "2": 0.2,
    "3": 0.67,
    "4": 1,
    "5": 1.25,
    "6": 2.5,
    "7": 5,
    "8": 8.5,
    "9": 12.5
  };

  
export {question_activity,data_walking,data_stairs,Servings_per_Day ,SugarCalcuationBeverages 
    ,SugarCalcuationSweets ,SugarCalcuationBreads ,SugarCalcuationFoods,FiberCalcuationSweets,
    FiberCalcuationBreads,FiberCalcuationVegetables,FiberCalcuationFruit,
    ActivityQstnr_A_per_h, ActivityStairs, exercisePaces, ActivityWalkingPace};


//for yogurt there is three instance where in the form there is only one
