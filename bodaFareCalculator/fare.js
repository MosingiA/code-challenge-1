function calculateBodaFare(distanceInKm) {
    // Fare constants
    const baseFare = 50; // KES
    const chargePerKm = 15; // KES per km

    // Calculate distance-based fare and total fare
    const distanceFare = distanceInKm * chargePerKm;
    const totalFare = baseFare + distanceFare;

    // fare breakdown
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceFare}`);
    console.log(`Total: KES ${totalFare}\n`);
    console.log("Panda Pikipiki!");
}

// Prompts the user
const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distanceInKm = parseFloat(input);

if (!isNaN(distanceInKm) && distanceInKm > 0) {
    calculateBodaFare(distanceInKm);
} else {
    console.log("Tafadhali ingiza umbali halisi kwa kilomita.");
}
calculateBodaFare()

