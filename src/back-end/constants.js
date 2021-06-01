/*
The file containing the informations about the constants
*/

import myTokenEnum from "./tokens.js";

var constants = {}

// The list of the constants
constants.list = [
    myTokenEnum.PI,
    myTokenEnum.EULER
]

// The values of the constants
constants.value = {}
constants.value[myTokenEnum.PI] = Math.PI;
constants.value[myTokenEnum.EULER] = Math.E;

export default constants;