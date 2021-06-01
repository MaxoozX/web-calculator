import React from 'react';

/**
 * Clear button component to clear the screen
 * @returns A Clear Button
 */
function ClearKey(){

    /**
     * Function that clears the equation
     */
    function clear(){
        window.equation.clearEquation();
    }

    return <button className="keys" onClick={clear}>Clr</button>
}

export default ClearKey;