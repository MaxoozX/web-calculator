/*
The file containing all the data about the operators
*/

import myTokenEnum from "./tokens";

/**
 * Functions that take an angle in degress and returns the same angle in radians
 * @param {Number} x 
 * @returns {Number} The angle in Radians
 */
function degToRad(x) {
    return x * Math.PI / 180;
}

/**
 * Functions that return the logarithm base x of y
 * @param {Number} x 
 * @param {Number} y 
 * @returns {Number} The log base x of y
 */
function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}

var operators = {}

operators.list = [
    myTokenEnum.PLUS,
    myTokenEnum.MINUS,
    myTokenEnum.TIME,
    myTokenEnum.DIVIDE,
    myTokenEnum.CLOSING_BRACKET,
    myTokenEnum.OPENNING_BRACKET,
    myTokenEnum.EXPONENT,
    myTokenEnum.SQRT,
    myTokenEnum.SIN,
    myTokenEnum.COS,
    myTokenEnum.TAN,
    myTokenEnum.LN,
    myTokenEnum.LOG2,
    myTokenEnum.LOG10,
    myTokenEnum.UNARY_MINUS
]

// The priority values of the operators
operators.value = {}
operators.value[myTokenEnum.PLUS] = 1
operators.value[myTokenEnum.MINUS] = 1
operators.value[myTokenEnum.UNARY_MINUS] = 1.5
operators.value[myTokenEnum.TIME] = 2
operators.value[myTokenEnum.DIVIDE] = 2
operators.value[myTokenEnum.EXPONENT] = 3
operators.value[myTokenEnum.SQRT] = 3.5
operators.value[myTokenEnum.SIN] = 4
operators.value[myTokenEnum.COS] = 4
operators.value[myTokenEnum.TAN] = 4
operators.value[myTokenEnum.LN] = 4
operators.value[myTokenEnum.LOG2] = 4
operators.value[myTokenEnum.LOG10] = 4
operators.value[myTokenEnum.CLOSING_BRACKET] = 0
operators.value[myTokenEnum.OPENNING_BRACKET] = 0

// The number of arguments need for each operator's function
operators.operandsNumber = {};
operators.operandsNumber[myTokenEnum.PLUS] = 2;
operators.operandsNumber[myTokenEnum.MINUS] = 2;
operators.operandsNumber[myTokenEnum.UNARY_MINUS] = 1;
operators.operandsNumber[myTokenEnum.TIME] = 2;
operators.operandsNumber[myTokenEnum.DIVIDE] = 2;
operators.operandsNumber[myTokenEnum.EXPONENT] = 2;
operators.operandsNumber[myTokenEnum.SQRT] = 1;
operators.operandsNumber[myTokenEnum.SIN] = 1;
operators.operandsNumber[myTokenEnum.COS] = 1;
operators.operandsNumber[myTokenEnum.TAN] = 1;
operators.operandsNumber[myTokenEnum.LN] = 1;
operators.operandsNumber[myTokenEnum.LOG2] = 1;
operators.operandsNumber[myTokenEnum.LOG10] = 1;
operators.operandsNumber[myTokenEnum.OPENNING_BRACKET] = 0;
operators.operandsNumber[myTokenEnum.CLOSING_BRACKET] = 0;

// The functions associated with the operators
operators.functions = {}
operators.functions[myTokenEnum.PLUS] = (a, b) => a + b;
operators.functions[myTokenEnum.MINUS] = (a, b) => a - b;
operators.functions[myTokenEnum.UNARY_MINUS] = (a) => -a;
operators.functions[myTokenEnum.TIME] = (a, b) => a * b;
operators.functions[myTokenEnum.DIVIDE] = (a, b) => a / b;
operators.functions[myTokenEnum.EXPONENT] = (a, b) => a ** b;
operators.functions[myTokenEnum.SQRT] = a => a ** 0.5;
operators.functions[myTokenEnum.SIN] = a => Math.sin(degToRad(a));
operators.functions[myTokenEnum.COS] = a => Math.cos(degToRad(a));
operators.functions[myTokenEnum.TAN] = a => Math.tan(degToRad(a));
operators.functions[myTokenEnum.LN] = Math.log;
operators.functions[myTokenEnum.LOG2] = a => getBaseLog(2, a);
operators.functions[myTokenEnum.LOG10] = a => getBaseLog(10, a);

export default Object.freeze(operators);