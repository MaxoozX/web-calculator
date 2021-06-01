import React from 'react'
import "./../components-styles/style.css";

/**
 * A token button component to add the corresponding token to the equation
 * @param {Props} props The props
 * @returns A token button
 */
function Key(props) {

    const tokenValue = props.tokenValue;
    const displayValue = props.displayValue;

    /**
     * Function that add the tokens of the key to the equation
     */
    function addTokenValue() {
        for(const token of tokenValue){
            window.equation.addToken(token);
        }
    }

    return <button className="keys" onClick={addTokenValue}>{displayValue}</button>
}

export default Key;