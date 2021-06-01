// My Equation class
import myTokenEnum from "./tokens";
import operators from "./operators.js";
import constants from "./constants";
import BadEquationError from "./BadEquationError";

/**
 * The equation class, essentially a list of tokens that can be computed
 */
class Equation {
    /**
     * The constructor of the class
     * @returns {Equation} The equation object
     */
    constructor() {
        this.tokensList = [];
    }

    /**
     * Function to update the display on the screen, to keep the equation well displayed
     */
    updateDisplay() {
        window.updateScreen();
    }

    /**
     * Function to display some content on the screen
     * @param {String} content The content to display
     */
    static printToDisplay(content) {
        window.showResultOnScreen(content);
    }

    /**
     * Function to add a token to the equation
     * @param {Number} tokenID 
     */
    addToken(tokenID) {
        this.tokensList.push(tokenID);
        this.updateDisplay();
    }

    /**
     * Function to remove the last token from the equation
     */
    removeToken() {
        this.tokensList.pop();
        this.updateDisplay();
    }

    /**
     * Functions to get the internal list of tokens in the equation
     * @returns {Array} The list of tokens in the equation
     */
    getContent() {
        return this.tokensList;
    }

    /**
     * Function to clear the equation, it removes every token from the equation
     */
    clearEquation() {
        this.tokensList = [];
        this.updateDisplay();
    }
    
    /**
     * Functions that test if an equation is balanced (if brackets are balanced)
     * @param {Array} tokensList The list of tokens to test
     * @returns {Boolean} Whether the equation is bracket balanced or not
     */
    static areBracketsBalanced(tokensList) {
        var bracketBalance = 0;
        for(const element of tokensList){
            if(element===myTokenEnum.OPENNING_BRACKET){
                bracketBalance++;
            } else if(element===myTokenEnum.CLOSING_BRACKET){
                bracketBalance--;
                if(bracketBalance<0){
                    return false;
                }
            }
        }
        return (bracketBalance===0);
    }

    /**
     * Function that checks that there is not operator synthax error
     * @param {Array} tokensList The list of tokens
     * @returns {Boolean} Whether the operator are well placed or not
     */
    static areOperatorsOk(tokensList) {
        if(tokensList.length <= 0) {
            return false;
        }
        // Just iterate trought and keep the last operator in memory
        // Check if 2 operators with 2 operands are aligned
        let lastElement = null;
        for(const element of tokensList){
            if(operators.list.includes(lastElement) && operators.list.includes(element)){
                if(operators.operandsNumber[lastElement] === 2 && operators.operandsNumber[element] === 2 && element !== myTokenEnum.MINUS) {
                    return false;
                }
            }
            lastElement = element;
        }

        let firstElement = tokensList[0];
        if(operators.list.includes(firstElement)) {
            if(operators.operandsNumber[firstElement] === 2 && firstElement !== myTokenEnum.MINUS) {
                return false;
            }
            
        }

        lastElement = tokensList[tokensList.length - 1];
        if(operators.list.includes(lastElement) && lastElement !== myTokenEnum.CLOSING_BRACKET) {
            return false;
        }

        return true;
    }

    /**
     * Function that takes a list of tokens and transform the numbers's tokens into real number (as strings)
     * @param {Array} tokensList A list of int (the tokens)
     * @returns {Array} A list of int and string (tokens as int and numbers as strings)
     */
    static replaceNumberTokensWithNumbers(tokensList) {

        // Not refactored because the whole function work with multiple internal stack

        let newTokensList = [];

        let lastEl = "";
        let lastToken = null;
        for(const el of tokensList) {
            if(operators.list.includes(el)) {
                if(lastEl !== ""){
                    newTokensList.push(lastEl);
                    lastEl = "";
                }
                if(el === myTokenEnum.MINUS && operators.list.includes(lastToken) && lastToken !== myTokenEnum.CLOSING_BRACKET) {
                    newTokensList.push(myTokenEnum.UNARY_MINUS);
                } else {
                    newTokensList.push(el);
                }
            } else if(constants.list.includes(el)) {
                if(lastEl !== ""){
                    newTokensList.push(lastEl);
                    lastEl = "";
                }
                newTokensList.push(constants.value[el].toString());
            } else if(el===myTokenEnum.PERIOD){
                if(!lastEl.includes('.')) {
                    lastEl += '.';
                } else { // Something went wrong
                    throw new BadEquationError("Too much periods");
                }
            } else {
                lastEl += el.toString();
            }
            lastToken = el;
        }
        if(lastEl !== ""){
            newTokensList.push(lastEl);
        }

        return newTokensList;

    }

    /**
     * Function that takes a list of tokens and change the order to a more convenient order (for machines)
     * @param {Array} originalTokensList A list of int (the tokens)
     * @returns {Array} A list of int and string ordered in machine order
     */
    static toMachineOrder(originalTokensList) {
        

        let tokensList = Equation.replaceNumberTokensWithNumbers(originalTokensList);

        let operandsStack = [];
        let operatorsStack = [];

        while(tokensList.length>0){

            let element = tokensList.shift();
            if(operators.list.includes(element)) { // It is an operator
                if(element === myTokenEnum.CLOSING_BRACKET){ // It is a closing bracket so reach the last openning bracket

                    while(operatorsStack[operatorsStack.length-1] !== myTokenEnum.OPENNING_BRACKET){
                        operandsStack.push(operatorsStack.pop());
                    }
                    operatorsStack.pop();

                } else if(element === myTokenEnum.OPENNING_BRACKET) { // It is an openning bracket, just add it to operatorsStack

                    operatorsStack.push(element);

                } else if(element === myTokenEnum.UNARY_MINUS) {

                    operatorsStack.push(element);

                } else { // Pop all the operators that are more or equal in priority as the current one then add it

                    let elementValue = operators.value[element];
                    while(elementValue <= operators.value[operatorsStack[operatorsStack.length-1]] && operatorsStack[operatorsStack.length-1] !== myTokenEnum.OPENNING_BRACKET) {
                        operandsStack.push(operatorsStack.pop());
                    }
                    operatorsStack.push(element);

                }
                
            } else { // This is a number
                operandsStack.push(element);
            }

        }

        while(operatorsStack.length>0){ // Adding the operators left to the operands stack
            operandsStack.push(operatorsStack.pop());
        }
        
        return operandsStack;

    }

    /**
     * Function that takes an list of tokens and number (already ordered to be computed) as returns a result (as a number)
     * @param {Array} machineOrder The ordered list of tokens
     * @returns {Number} result of the equation
     */
    static evalMachineOrder(machineOrder) {
        

        let workingMachineOrder = [...machineOrder]; // Copying the list

        while(workingMachineOrder.length>1){

            // Find the first operator
            let operatorIndex = 0;
            while(!operators.list.includes(workingMachineOrder[operatorIndex])){
                operatorIndex++;
            }

            let operator = workingMachineOrder.splice(operatorIndex, 1);
            // Get the 2 operands
            let operandsIndex = [];
            for(let i = 1; i<operators.operandsNumber[operator]+1; i++){
                operandsIndex.push(operatorIndex - i)
            }
            let operands = [];
            for(const operandIndex of operandsIndex) {
                operands.push(workingMachineOrder.splice(operandIndex, 1));
            }

            let func = operators.functions[operator];
            let operandsFinal = [...operands.map(x=>Number(x)).reverse()];
            let result = func(...operandsFinal);
            // Get the result
    
            // Put the result in the working list
            workingMachineOrder.splice(operandsIndex[operandsIndex.length - 1], 0, result.toString());
        }
        
        return Number(workingMachineOrder[0]).toString(); // Should be of length 1
    }

    /**
     * Function that solve the equation and then returns the result, can raise BadEquationError if there is an error in the synthax
     * @returns {Number} The result of the current equation
     */
    static solve(tokensList) {

        if(!Equation.areBracketsBalanced(tokensList)){
            throw new BadEquationError("Brackets are not balanced");
        }

        if(!Equation.areOperatorsOk(tokensList)){
            throw new BadEquationError("Synthax error (operators)");
        }

        let machineOrder = Equation.toMachineOrder(tokensList);

        return Equation.evalMachineOrder(machineOrder);
    }

    /**
     * Functions that compute the equation and display the result to the screen
     */
    computeResultAndDisplayIt() {
        try {
            Equation.printToDisplay(Equation.solve(this.tokensList));
        } catch(error) {
            if(error instanceof BadEquationError){
                Equation.printToDisplay(error.message);
            }
        }
    }
    
}

export default Equation;