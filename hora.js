function dataUrna(){
    var time = new Date();
    let hora = time.getUTCHours();
    let minutos = time.getMinutes();
    let segundos = time.getSeconds();
    let mili = time.getMilliseconds();
    let dia = time.getDate();
    let mes = time.getMonth();
    let ano = time.getFullYear();
    return `Data: ${dia}-${mes+1}-${ano}\nHora: ${hora-3}:${minutos}:${segundos}:${mili}`
}


// function mostrar(){
//     let calendario = new data();

//     let dia = calendario.dia,
//         ano = calendario.ano,
//         mes = calendario.mes;

//     console.log(`\nData: ${dia}-${mes+1}-${ano}\nHora: ${hora-3}:${minutos}:${segundos}:${mili}\n`)
// }