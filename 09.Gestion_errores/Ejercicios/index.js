const logger = require("./logger");

const resultado = division(5, 0);
console.log(resultado);


function division(num1, num2) {

    try {
        if (num2 === 0) {
            throw "Div_cero";
        }
        return num1/num2;

    } catch(e) {
        if (e === "Div_cero") {
            logger.error("División por Cero!");
        }
    }

}
