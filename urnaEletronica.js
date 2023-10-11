function urnaEletronica(){
    const contadorMenu = 0;
    let candidato1 = 0, candidato2 = 0, candidato3 = 0, votoBranco = 0, votoNulo = 0, votoTotal = 0, votoVálido = 0;

    while (contadorMenu===0) {
        console.log(`
        ***URNA ELETRONICA***
        
        Selecione uma opção:

        (1) Votar cadidato 1
        (2) Votar cadidato 2
        (3) Votar cadidato 3
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
                console.log("Total de votos candidado 1:", candidato1)
                console.log("Total de votos candidado 2:", candidato2)
                console.log("Total de votos candidado 3:", candidato3)
                console.log("Total de votos em branco:", votoBranco)
                console.log("Total de votos nulo:", votoNulo)
                if (candidato1 > candidato2 || candidato1 > candidato3){                    
                    console.log("\nCom" , candidato1 + votoBranco ,"voto(s). O vencedor das eleições é o CANDIDATO 1!")
                } else if (candidato2 > candidato1 || candidato2 > candidato3){
                    console.log("\nCom" , candidato2 + votoBranco ,"voto(s). O vencedor das eleições é o CANDIDATO 2!")
                } else if (candidato3 > candidato2 || candidato3 > candidato2){
                    console.log("\nCom" , candidato3 + votoBranco ,"voto(s). O vencedor das eleições é o CANDIDATO 3!")
                } else {
                    console.log("\nHouve empate nas eleições!")
                }
                break;
            } else {
                console.log("Opção Inválida.")
            }
    }
    console.log("O programa encerrou")
}