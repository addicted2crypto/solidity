// Description: Find the Integral Refactored part 2


// Create a function that finds the integral of the expression passed.

// In order to find the integral all you need to do is add one to the exp

// For example for 3x^2, the integral would be 1x^3: we added 1 to the ex

// Notes:

// The output should be a string.
// The coefficient and exponent is always a positive integer.
// Examples
//  3, 2  -->  "1x^3"
// 12, 5  -->  "2x^6"
// 20, 1  -->  "10x^2"
// 40, 3  -->  "10x^4"
// 90, 2  -->  "30x^3"


// My Solution =>

const integrate= (coefficient, exponent) => coefficient/(exponent+1)+"x^"+(exponent+1)