function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const sum = quantity * pricePerDroid;
    if (customerCredits >= sum){
        return `You ordered ${quantity} droids worth ${sum} credits!`;
    }else{
        return "Insufficient funds!";
    }
}

