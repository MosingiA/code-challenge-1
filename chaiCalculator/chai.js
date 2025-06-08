function calculateChaiIngredients(numberOfCups) {
    // Ingredient amounts per 1 cup
    const waterPerCup = 200; // in ml
    const milkPerCup = 50;   // in ml
    const teaLeavesPerCup = 1; // in tablespoons
    const sugarPerCup = 2;     // in teaspoons

    // Calculate total ingredients
    const totalWater = numberOfCups * waterPerCup;
    const totalMilk = numberOfCups * milkPerCup;
    const totalTeaLeaves = numberOfCups * teaLeavesPerCup;
    const totalSugar = numberOfCups * sugarPerCup;

    // Output the result
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${totalWater} ml`);
    console.log(`Milk: ${totalMilk} ml`);
    console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoon${totalTeaLeaves > 1 ? 's' : ''}`);
    console.log(`Sugar (Sukari): ${totalSugar} teaspoon${totalSugar > 1 ? 's' : ''}`);
    console.log("\nEnjoy your Chai Bora!");
}

// Prompt user and run the function
const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = parseInt(input);

if (!isNaN(numberOfCups) && numberOfCups > 0) {
    calculateChaiIngredients(numberOfCups);
} else {
    console.log("Please enter a valid number of cups.");
}
calculateChaiIngredients()