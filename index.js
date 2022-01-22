
//Viajar solo con el dinero regaldo = 20 

let encontrado = 0;

function fancyRide(millas, tarifas) {

    const uber = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"]

    for (let index = 0; index < tarifas.length; index++) {
        const coste = millas * tarifas[index];
        if (coste <= 20) {
            console.log(coste + ' --> ' + uber[index])
            if (uber[index] == "UberX") {
                encontrado = index;
            }
            if (uber[index] == "UberXL") {
                encontrado = index
            }
            if (uber[index] == "UberPlus") {
                encontrado = index;
            }
            if (uber[index] == "UberBlack") {
                encontrado = index
            } if (uber[index] == "UberSUV") {
                encontrado = index
            }
        }
    }

    if (encontrado == 0) {
        return uber[0]
    } else if (encontrado == 1) {
        return uber[1]
    } else if (encontrado == 2) {
        return uber[2]
    } else if (encontrado == 3) {
        return uber[3]
    } else if (encontrado == 4) {
        return uber[4]
    }

}

const i = 20;
const tarifas = [0.3, 0.5, 0.7, 1, 1.3];


console.log('Uber recomendado: ' + fancyRide(i, tarifas))
