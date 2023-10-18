// const crypto = require('crypto');
// const fs = require('fs');

// // const algoritmosDeHash = crypto.getHashes();
// // console.log(algoritmosDeHash);

// const hash = crypto.createHash('sha256');

// const hashAnterior = '7722212eabc45d7f11f509f08455abd5b1f06c05f75902c1c5ca2ba3d4bf954c';
// const input = fs.createReadStream('urnaEletronica.js');

// input.on('data', (data) => {
//     hash.update(data);
//   });

// input.on('end', () => {
//     const hashCalculado = hash.digest('hex');
//     callback(hashCalculado);
// });

// console.log(input)

// if (input === hashAnterior) {
//     console.log('Hash compatível. Seu código pode ser executado.');
//     // Coloque aqui o código que você deseja executar.
// } else {
//     console.log('Hash incompatível. Não é seguro executar o código.');
// };