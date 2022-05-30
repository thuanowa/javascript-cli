console.log("Count your BMI");

let KG = parseFloat(prompt("Enter your weight (kg): "));
let M = parseFloat(prompt("Enter your height (m): "));

let BMI = Math.round(KG / M ** 2);

console.log(BMI);

if (0 <= BMI < 15) console.log("Your heath is Very severely underweight");
else if (15 <= BMI < 16) console.log("Your heath is Severely underweight");
else if (16 <= BMI < 18.5) console.log("Your heath is Underweight");
else if (18.5 <= BMI < 25) console.log("Your heath is Normal (healthy weight)");
else if (25 <= BMI < 30) console.log("Your heath is Overweight");
else if (30 <= BMI < 35)
  console.log("Your heath is Obese Class I (Moderately obese)");
else if (35 <= BMI < 40)
  console.log("Your heath is Obese Class II (Severely obese)");
else if (BMI >= 40)
  console.log("Your heath is Obese Class III (Very severely obese)");
