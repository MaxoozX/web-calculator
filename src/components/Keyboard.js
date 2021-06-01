import React from 'react';
import Key from "./Key.js";
import DeleteKey from "./DeleteKey";
import SolveKey from "./SolveKey";
import "./../components-styles/style.css";
import myTokenEnum from "./../back-end/tokens.js";
import ClearKey from './ClearKey.js';

/**
 * The keyboard component, just a div witha lot of Keys
 * @param {Props} props 
 * @returns 
 */
function Keyboard(props) {

    return <div className="keyboard">
        <Key tokenValue={[myTokenEnum.ZERO]} displayValue="0"/>
        <Key tokenValue={[myTokenEnum.ONE]} displayValue="1"/>
        <Key tokenValue={[myTokenEnum.TWO]} displayValue="2"/>
        <Key tokenValue={[myTokenEnum.THREE]} displayValue="3"/>
        <Key tokenValue={[myTokenEnum.FOUR]} displayValue="4"/>
        <Key tokenValue={[myTokenEnum.FIVE]} displayValue="5"/>
        <Key tokenValue={[myTokenEnum.SIX]} displayValue="6"/>
        <Key tokenValue={[myTokenEnum.SEVEN]} displayValue="7"/>
        <Key tokenValue={[myTokenEnum.EIGHT]} displayValue="8"/>
        <Key tokenValue={[myTokenEnum.NINE]} displayValue="9"/>
        <Key tokenValue={[myTokenEnum.PERIOD]} displayValue="."/>
        <Key tokenValue={[myTokenEnum.PLUS]} displayValue="+"/>
        <Key tokenValue={[myTokenEnum.MINUS]} displayValue="-"/>
        <Key tokenValue={[myTokenEnum.TIME]} displayValue="*"/>
        <Key tokenValue={[myTokenEnum.DIVIDE]} displayValue="/"/>
        <Key tokenValue={[myTokenEnum.EXPONENT]} displayValue="^"/>
        <Key tokenValue={[myTokenEnum.SQRT,myTokenEnum.OPENNING_BRACKET]} displayValue="√"/>
        <Key tokenValue={[myTokenEnum.SIN,myTokenEnum.OPENNING_BRACKET]} displayValue="sin"/>
        <Key tokenValue={[myTokenEnum.COS,myTokenEnum.OPENNING_BRACKET]} displayValue="cos"/>
        <Key tokenValue={[myTokenEnum.TAN,myTokenEnum.OPENNING_BRACKET]} displayValue="tan"/>
        <Key tokenValue={[myTokenEnum.LN,myTokenEnum.OPENNING_BRACKET]} displayValue="ln"/>
        <Key tokenValue={[myTokenEnum.LOG2,myTokenEnum.OPENNING_BRACKET]} displayValue="log2"/>
        <Key tokenValue={[myTokenEnum.LOG10,myTokenEnum.OPENNING_BRACKET]} displayValue="log10"/>
        <Key tokenValue={[myTokenEnum.PI]} displayValue="π"/>
        <Key tokenValue={[myTokenEnum.EULER]} displayValue="e"/>
        <Key tokenValue={[myTokenEnum.OPENNING_BRACKET,]} displayValue="("/>
        <Key tokenValue={[myTokenEnum.CLOSING_BRACKET,]} displayValue=")"/>
        <DeleteKey />
        <ClearKey />
        <SolveKey />
    </div>
}

export default Keyboard;