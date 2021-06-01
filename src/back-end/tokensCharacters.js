/*
The file containing:
The object to get the character representation of each token
*/

import myTokenEnum from "./tokens";

var tokensCharactersDict = {}

tokensCharactersDict[myTokenEnum.ZERO] = "0"
tokensCharactersDict[myTokenEnum.ONE] = "1"
tokensCharactersDict[myTokenEnum.TWO] = "2"
tokensCharactersDict[myTokenEnum.THREE] = "3"
tokensCharactersDict[myTokenEnum.FOUR] = "4"
tokensCharactersDict[myTokenEnum.FIVE] = "5"
tokensCharactersDict[myTokenEnum.SIX] = "6"
tokensCharactersDict[myTokenEnum.SEVEN] = "7"
tokensCharactersDict[myTokenEnum.EIGHT] = "8"
tokensCharactersDict[myTokenEnum.NINE] = "9"
tokensCharactersDict[myTokenEnum.PLUS] = "+"
tokensCharactersDict[myTokenEnum.MINUS] = "-"
tokensCharactersDict[myTokenEnum.TIME] = "*"
tokensCharactersDict[myTokenEnum.DIVIDE] = "/"
tokensCharactersDict[myTokenEnum.CLOSING_BRACKET] = ")"
tokensCharactersDict[myTokenEnum.OPENNING_BRACKET] = "("
tokensCharactersDict[myTokenEnum.EXPONENT] = "^"
tokensCharactersDict[myTokenEnum.SQRT] = "√"
tokensCharactersDict[myTokenEnum.SIN] = "sin"
tokensCharactersDict[myTokenEnum.COS] = "cos"
tokensCharactersDict[myTokenEnum.TAN] = "tan"
tokensCharactersDict[myTokenEnum.PI] = "π"
tokensCharactersDict[myTokenEnum.EULER] = "e"
tokensCharactersDict[myTokenEnum.LN] = "ln"
tokensCharactersDict[myTokenEnum.LOG2] = "log2"
tokensCharactersDict[myTokenEnum.LOG10] = "log10"
tokensCharactersDict[myTokenEnum.PERIOD] = "."
tokensCharactersDict[myTokenEnum.UNARY_MINUS] = "-"

const tokensCharacters = Object.freeze(tokensCharactersDict)

export default tokensCharacters;