// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}


const oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};


function fromDollarToYen(dollar) {
    // Convert the given dollar amount to yen using the conversion rate
    return dollar * oneEuroIs.JPY;
}

function fromYenToPound(yen) {
    // Convert the given yen amount to pound using the conversion rate
    return yen * oneEuroIs.GBP;
}
// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };