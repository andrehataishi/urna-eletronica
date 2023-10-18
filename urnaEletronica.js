function urnaEletronica(){
    const contadorMenu = 0;
    let candidato1 = 0, candidato2 = 0, candidato3 = 0, votoBranco = 0, votoNulo = 0, votoTotal, votoVálido = 0, nome1, nome2, nome3;
    
    while (contadorMenu===0){
        console.log("Definindo os nomes dos candidatos antes da votação.")
        nome1 = prompt("Digite o nome do candidato 1: ").toUpperCase()
        nome2 = prompt("Digite o nome do candidato 2: ").toUpperCase()
        nome3 = prompt("Digite o nome do candidato 3: ").toUpperCase()
        let libera = confirm(`Nome do candidato 1: ${nome1}\nNome do candidato 2: ${nome2}\nNome do candidato 3: ${nome3}\n\nO nome dos candidatos está correto?\n\n(OK) para liberar a votação\n(CANCELAR) para reeditar os nomes dos candidatos`)
        if (libera===true){
            break;
        }  
    }

    while (contadorMenu===0) {
        console.log(`
        ***URNA ELETRONICA***
        
        Selecione uma opção:

        (1) Votar no candidato: ${nome1}
        (2) Votar no candidato: ${nome2}
        (3) Votar no candidato: ${nome3}
        (5) Votar em branco`);
        let opcao = parseInt(prompt("Digite sua opção de voto: "));
        console.log(opcao)
        console.clear()
            if (opcao===1){
                candidato1 ++
                console.log("Voto computado.")
            } else if (opcao===2) {
                candidato2 ++
                console.log("Voto computado.")
            } else if (opcao===3) {
                candidato3 ++
                console.log("Voto computado.")
            } else if (opcao===5) {
                votoBranco ++
                console.log("Voto computado.")
            } else if (opcao===123456){
                let seguranca = prompt("Você tem certeza que gostaria de encerrar a votação?\n\n(S) Para encerrar a votação\n(N) Para cancelar e voltar para o menu").toUpperCase()
                if(seguranca==="S"){
                    console.clear()
                    votoTotal = candidato1 + candidato2 + candidato3 + votoBranco + votoNulo
                    console.log("Total de votos válidos:" , votoVálido = candidato1 + candidato2 + candidato3)
                    console.log(`\nCandidato: ${nome1}\nTotal de votos: ${candidato1}\nPercentual: ${((candidato1*100)/votoTotal).toFixed(2)}%`)
                    console.log(`\nCandidato: ${nome2}\nTotal de votos: ${candidato2}\nPercentual: ${((candidato2*100)/votoTotal).toFixed(2)}%`)
                    console.log(`\nCandidato: ${nome3}\nTotal de votos: ${candidato3}\nPercentual: ${((candidato3*100)/votoTotal).toFixed(2)}%`)
                    console.log(`\nTotal de votos em branco: ${votoBranco}\nPercentual: ${((votoBranco*100)/votoTotal).toFixed(2)}%}`)
                    console.log(`\nTotal de votos nulo: ${votoNulo}\nPercentual ${((votoNulo*100)/votoTotal).toFixed(2)}%`)
                    if (candidato1 > candidato2 || candidato1 > candidato3){                  
                        console.log(`\nCom um total de ${candidato1} voto(s) e um percentual de ${((candidato1*100)/votoTotal).toFixed(2)}%\nO vencedor das eleições é o candidato: ${nome1}`)
                    } else if (candidato2 > candidato1 || candidato2 > candidato3){
                        console.log(`\nCom um total de ${candidato2} voto(s) e um percentual de ${((candidato2*100)/votoTotal).toFixed(2)}%, o vencedor das eleições é o candidato: ${nome2}`)
                    } else if (candidato3 > candidato2 || candidato3 > candidato2){
                        console.log(`\nCom um total de ${candidato3} voto(s) e um percentual de ${((candidato3*100)/votoTotal).toFixed(2)}% o vencedor das eleições é o candidato: ${nome3}`)
                    } else if (votoVálido===0) { 
                        console.log("Não houve votos válidos suficientes para determinar o ganhador.")
                    } else {
                        console.log("\nHouve empate nas eleições! Não há um vencedor.")
                    }
                    break;
                }
            } else {
                let confNulo = confirm("Você gostaria de anular seu voto?");
                if (confNulo == true){
                    votoNulo ++
                    console.log("Voto computado.")
                }
                }   
    }
    console.log("\nO programa encerrou")
}