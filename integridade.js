function verificaUrnaAtual(){

    fetch('urnaEletronica.js')
    .then(response => response.text())
    .then(response => CryptoJS.SHA256(response).toString())
    .then(hashUrnaAtual => {
        
        fetch('hashValido')
        .then(response => response.text())
        .then(hashValido =>{

            if (hashUrnaAtual === hashValido){
                console.log("Urna Verificada, código íntegro.")
            } else {
                console.log("Urna Verificada, código modificado.")
                console.log(`Hash esperado: ${hashUrnaAtual}\n`)
                console.log(`Hash atual: ${hashValido}`)

            }

        })

    })
}
