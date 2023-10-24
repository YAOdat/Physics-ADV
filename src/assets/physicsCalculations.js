function toScientificNotation(num) {
    // Convert number to string in scientific notation
    const sciNotation = num.toExponential();

    return sciNotation;
}

function fromScientificNotation(sciNotation) {
    // Convert scientific notation string to number
    const num = Number.parseFloat(sciNotation);

    return num;
}
