import React from 'react';

/**
 * Solve button component to solve the equation
 * @returns A solve button
 */
function SolveKey(){

    /**
     * Function to call the solve method of the window's equation
     */
    function solveEquation(){
        window.equation.computeResultAndDisplayIt();
    }

    return <button className="keys" onClick={solveEquation}>Eval</button>
}

export default SolveKey;