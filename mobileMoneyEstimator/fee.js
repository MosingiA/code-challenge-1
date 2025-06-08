function estimateTransactionFee(amountToSend) {
    const percentageFee = amountToSend * 0.015;
    const minFee = 10;
    const maxFee = 70;

    // Apply minimum and maximum fee caps
    const transactionFee = Math.min(Math.max(percentageFee, minFee), maxFee);
    const totalDebited = amountToSend + transactionFee;

    // Print results
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${transactionFee}`);
    console.log(`Total amount to be debited: KES ${totalDebited}\n`);
    console.log("Send Money Securely!");
}

// Prompt user and call the function
const input = prompt("Unatuma Ngapi? (KES):");
const amountToSend = parseFloat(input);

if (!isNaN(amountToSend) && amountToSend > 0) {
    estimateTransactionFee(amountToSend);
} else {
    console.log("Tafadhali ingiza kiasi halali cha kutuma.");
}
estimateTransactionFee()