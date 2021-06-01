import React, { useState } from 'react';
import tokensCharacters from '../back-end/tokensCharacters';
import "./../components-styles/style.css";

/**
 * Component corresponding to the screen
 * @param {Props} props 
 * @returns 
 */
function Screen(props) {

    const [content, setContent] = useState('');
    const [result_p, setResult_p] = useState("");

    /**
     * Function to display the content of an equation on the screen expression paragraph
     */
    window.updateScreen = () => {
        let tokensIDs = window.equation.getContent();
        // We turn the IDs into characters
        let tokensChar = tokensIDs.map(x => tokensCharacters[x]);
        // We know want to include space where needed
        let toDisplay = "";
        let lastChar = "0";
        for(const char of tokensChar) {
            if(isNaN(lastChar)||isNaN(char)){
                toDisplay += " ";
            }
            toDisplay += char;
            lastChar = char;
        }
        setContent(toDisplay);
        setResult_p("");
    };

    /**
     * Function to display a result on the result paragraph
     * @param {result} result The result to display 
     */
    window.showResultOnScreen = (result) => {
        setResult_p(result);
    }

    return <div className="screen">
        <p className="screen-p">{content}</p>
        <p className="result-p">{result_p}</p>
    </div>
}

export default Screen;