import React from 'react';

/**
 * Delete button component to delete the last token of the equation
 * @returns A delete button
 */
function DeleteKey(){

    /**
     * Function that delete the last token of the equation
     */
    function deleteKey(){
        window.equation.removeToken();
    }

    return <button className="keys" onClick={deleteKey}>Del</button>
}

export default DeleteKey;