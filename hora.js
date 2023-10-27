let hora,minutos,segundos,mili,dia,mes,ano

function dataUrna(){
    var time = new Date();
    hora = time.getUTCHours();
    minutos = time.getMinutes();
    segundos = time.getSeconds();
    mili = time.getMilliseconds();
    dia = time.getDate();
    mes = time.getMonth();
    ano = time.getFullYear();
}

function mostrarHora(){
    let mostrar = console.log(`Data: ${dia}-${mes+1}-${ano}\nHora: ${hora-3}:${minutos}:${segundos}:${mili}`)
    return {mostrar}
}

// function mostrar(){
//     let calendario = new data();

//     let dia = calendario.dia,
//         ano = calendario.ano,
//         mes = calendario.mes;

//     console.log(`\nData: ${dia}-${mes+1}-${ano}\nHora: ${hora-3}:${minutos}:${segundos}:${mili}\n`)
// }