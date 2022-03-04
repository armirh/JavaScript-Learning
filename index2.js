/* 
    arithmetic expression
    is some combination of operands(values,variables,etc.)
    operators
    than can be evaluated to a value

    - operator precedence same as math
*/

var someValue = 20;

someValue += 1;
someValue -= 1;
someValue *= 2;
someValue /= 2;
someValue **=2; // works if only is assigned to that value
var remainingValue = someValue % 3;

console.log(someValue)
console.log(remainingValue)
