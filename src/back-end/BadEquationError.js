/**
 * Class of BadEquationError raised when there is an error in an equation
 * @extends Error
*/
class BadEquationError extends Error {
    /**
     * Create an error
     * @param  {...any} params 
     */
    constructor(...params) {
        super(...params);

        if(Error.captureStackTrace) {
            Error.captureStackTrace(this, BadEquationError);
        }

        this.name = "BadEquationError";
        this.date = new Date();
    }
}

export default BadEquationError;