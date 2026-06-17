// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// One euro is:
const oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
}

// Euro -> Dollar
const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs.USD;
}

// Dollar -> Yen
const fromDollarToYen = function(valueInDollar) {
    const euros = valueInDollar / oneEuroIs.USD;
    return euros * oneEuroIs.JPY;
}

// Yen -> Pound
const fromYenToPound = function(valueInYen) {
    const euros = valueInYen / oneEuroIs.JPY;
    return euros * oneEuroIs.GBP;
}

// Export the functions
module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};