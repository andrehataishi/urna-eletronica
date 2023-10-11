function urnaEletronica(){
    const contadorMenu = 0;
    let candidato1 = 0, candidato2 = 0, candidato3 = 0, votoBranco = 0, votoNulo = 0, votoTotal = 0, votoVálido = 0;
    
    console.log("Definindo os nomes dos candidatos antes da votação.")
    let nome1 = prompt("Digite o nome do candidato 1: ").toUpperCase()
    let nome2 = prompt("Digite o nome do candidato 2: ").toUpperCase()
    let nome3 = prompt("Digite o nome do candidato 3: ").toUpperCase()
    console.clear()
    while (contadorMenu===0) {
        console.log(`
        ***URNA ELETRONICA***
        
        Selecione uma opção:

        (1) Votar no candidato: ${nome1}
        (2) Votar no candidato: ${nome2}
        (3) Votar no candidato: ${nome3}
        (5) Votar em branco
        (8) Votar nulo
        (0) Encerrar votação`);
        let opcao = parseInt(prompt("Digite uma opção"));
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
            } else if (opcao===8) {
                votoNulo ++
                console.log("Voto computado.")
            } else if (opcao===0){
                console.clear()
                console.log("Total de votos válidos:" , votoVálido = candidato1 + candidato2 + candidato3)
                console.log(`Total de votos no candidato: ${nome1}:`, candidato1 )
                console.log(`Total de votos no candidato: ${nome2}:`, candidato2)
                console.log(`Total de votos no candidato: ${nome3}:`, candidato3)
                console.log("Total de votos em branco:", votoBranco)
                console.log("Total de votos nulo:", votoNulo)
                if (candidato1 > candidato2 || candidato1 > candidato3){                    
                    console.log("\nCom" , candidato1 + votoBranco ,"voto(s) o vencedor das eleições é o candidato:" , nome1)
                } else if (candidato2 > candidato1 || candidato2 > candidato3){
                    console.log("\nCom" , candidato2 + votoBranco ,"voto(s) o vencedor das eleições é o candidato:" , nome2)
                } else if (candidato3 > candidato2 || candidato3 > candidato2){
                    console.log("\nCom" , candidato3 + votoBranco ,"voto(s) o vencedor das eleições é o candidato:" , nome3)
                } else {
                    console.log("\nHouve empate nas eleições! Não há um vencedor.")
                }
                break;
            } else {
                console.log("Opção Inválida.")
            }
    }
    console.log("O programa encerrou")
}