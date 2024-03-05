// Import the function sum from the app.js file
const { sum } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One dollar should convert to yen", function() {
    // 1 dollar should be equivalent to 156.5 yen based on the given conversion rate
    expect(fromDollarToYen(1)).toBe(156.5);
});

test("One yen should convert to pound", function(){
    // 1 yen should be equivalent to 0.87 pounds based on the given conversion rate
    expect(fromYenToPound(1)).toBe(0.87);
});