// const crypto = require('crypto');
// const fs = require('fs');

// const arquivo = 'urnaEletronica.js'; // Substitua pelo nome do seu arquivo
// const hashAnterior = '7722212eabc45d7f11f509f08455abd5b1f06c05f75902c1c5ca2ba3d4bf954c'; // Substitua pelo hash anterior

// // Função para calcular o hash SHA-256 de um arquivo
// function calcularHashDoArquivo(arquivo, callback) {
//   const hash = crypto.createHash('sha256');
//   const input = fs.createReadStream(arquivo);

//   input.on('data', (data) => {
//     hash.update(data);
//   });

//   input.on('end', () => {
//     const hashCalculado = hash.digest('hex');
//     callback(hashCalculado);
//   });
// }

// // Verifica se o hash do arquivo corresponde ao hash anterior
// calcularHashDoArquivo(arquivo, (novoHash) => {
//   if (novoHash === hashAnterior) {
//     console.log('Hash compatível. Seu código pode ser executado.');
//     // Coloque aqui o código que você deseja executar.
//   } else {
//     console.log('Hash incompatível. Não é seguro executar o código.');
//   }
// });


// crypto.getHashes()