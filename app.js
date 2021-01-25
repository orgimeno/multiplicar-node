const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let argv = require('./config/yargs').argv;
const colors = require('colors/safe');
let commando = argv._[0];

switch (commando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(`Lista: \n${archivo}`.gray))
            .catch(error => console.log(error));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado:`.red, ` ${archivo}`.rainbow))
            .catch(error => console.log(error));
        break;
    default:
        console.log("comando desconocido");
        break;
}