const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        let data = '';

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        console.log(`=======`.green);
        console.log(`=Tabla del ${base}=`.green);
        console.log(`=======`.green);

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        // console.log(data.red);
        resolve(data.yellow);
    });
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        let data = '';

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
            console.log('successfully Created');
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};