console.log("Count your BMI");

const KG = parseFloat(prompt("Enter your weight (kg): "));
const M = parseFloat(prompt("Enter your height (m): "));

const BMI = Math.round(KG / M ** 2);

console.log("Your BMI is: " + BMI);

switch (true) {
  case BMI >= 0 && BMI < 15:
    console.log("Your heath is Very severely underweight");
    break;
  case BMI >= 15 && BMI < 16:
    console.log("Your heath is Severely underweight");
    break;
  case BMI >= 16 && BMI < 18.5:
    console.log("Your heath is Underweight");
    break;
  case BMI >= 18.5 && BMI < 25:
    console.log("Your heath is Normal (healthy weight)");
    break;
  case BMI >= 25 && BMI < 30:
    console.log("Your heath is Overweight");
    break;
  case BMI >= 30 && BMI < 35:
    console.log("Your heath is Obese Class I (Moderately obese)");
    break;
  case BMI >= 35 && BMI < 40:
    console.log("Your heath is Obese Class II (Severely obese)");
    break;
  case BMI >= 40:
    console.log("Your heath is Obese Class III (Very severely obese)");
    break;
  default:
    console.log("Data is wrong");
}
