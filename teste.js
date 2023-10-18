// const crypto = require('crypto');
// const fs = require('fs');

// const arquivo = 'urnaEletronica.js'; // Substitua pelo nome do seu arquivo

// // Crie um objeto de leitura de fluxo para o arquivo
// const readStream = fs.createReadStream(arquivo);

// // Crie um objeto de hash (neste exemplo, usaremos SHA-256)
// const hash = crypto.createHash('sha256');

// readStream.on('data', (data) => {
//   // Alimente os dados no objeto de hash
//   hash.update(data);
// });

// readStream.on('end', () => {
//   // Calcule o hash final e obtenha o valor em hexadecimal
//   const hashValue = hash.digest('hex');
//   console.log('Hash SHA-256 do arquivo:', hashValue);
// });

