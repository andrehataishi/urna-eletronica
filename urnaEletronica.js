/* Autor: André Hideki Hataishi da Silva
 * SENAI-SP - Conde José Vicente de Azevedo 
 * Criação de uma urna eletrônica */

function urnaEletronica(){

    /* declaração das variáveis */
    const contadorMenu = 0;
    let candidato1 = 0, candidato2 = 0, candidato3 = 0, votoBranco = 0, votoNulo = 0, votoTotal, votoVálido = 0, nome1, nome2, nome3;

    /* construindo uma estrutura de repetição para o mesário inserir os nomes dos candidatos, podendo inserir dentro do prompt */
    while (contadorMenu===0){
        console.log("Definindo os nomes dos candidatos antes da votação.")
        nome1 = prompt("Digite o nome do candidato 1: ").toUpperCase() /* deixando os nomes em caixa alta com toUpperCase */
        nome2 = prompt("Digite o nome do candidato 2: ").toUpperCase()
        nome3 = prompt("Digite o nome do candidato 3: ").toUpperCase()
        
        /* mostrando os nomes definidos pelo mesário, a fim de confirmar se estão corretos ou não e possibilitando a correção deles*/
        let libera = confirm(`Nome do candidato 1: ${nome1}\nNome do candidato 2: ${nome2}\nNome do candidato 3: ${nome3}\n\nO nome dos candidatos está correto?\n\n(OK) para liberar a votação\n(CANCELAR) para reeditar os nomes dos candidatos`) /* com o método confirm */

        /* caso os nomes estiverem corretos e o mesário apertar a confimação a repetição é encerrada */
        if (libera===true){
            console.clear();  
            //chamando a funcao para armazenar o horario do inicio da votação
            dataUrna()       
            break;
        }  
    }

    /* menu da urna com estrutura de repetição */
    while (contadorMenu===0) {

        /* é mostrado as opções de voto para o usuário */
        console.log(`
        ***URNA ELETRONICA***
        
        Selecione uma opção:

        (1) Votar no candidato: ${nome1}
        (2) Votar no candidato: ${nome2}
        (3) Votar no candidato: ${nome3}
        (5) Votar em branco`);

        /* entrada da opção de voto */
        let opcao = parseInt(prompt("Digite sua opção de voto: ")); 

        /* limpando o console para evitar poluição visual */
        console.clear() 
        if (opcao===1){
            /* confirmação da opção de voto, abrindo a possibilidade de correção caso o usuário tenha inserido uma opção errada */
            let confOpc = confirm(`Sua opção de voto: ${opcao}\nCandidato: ${nome1}\n\nConfimar opção?\n\n(OK) para confimar voto\n(CANCELAR) para corrigir voto`) 
            if (confOpc===true){  
                candidato1 ++
                console.log("Voto computado.")
            }
        } else if (opcao===2) {
            let confOpc = confirm(`Sua opção de voto: ${opcao}\nCandidato: ${nome2}\n\nConfimar opção?\n\n(OK) para confimar voto\n(CANCELAR) para corrigir voto`) 
            if (confOpc===true){  
                candidato2 ++
                console.log("Voto computado.")
            }
        } else if (opcao===3) {
            let confOpc = confirm(`Sua opção de voto: ${opcao}\nCandidato: ${nome3}\n\nConfimar opção?\n\n(OK) para confimar voto\n(CANCELAR) para corrigir voto`) 
            if (confOpc===true){  
                candidato3 ++
                console.log("Voto computado.")
            }
        } else if (opcao===5) {
            let confOpc = confirm(`Sua opção de voto: ${opcao}\nVoto em Branco\n\nConfimar opção?\n\n(OK) para confimar voto\n(CANCELAR) para corrigir voto`) 
            if (confOpc===true){  
                votoBranco ++
                console.log("Voto computado.")
            }

        /* senha/passo de segurança, onde o mesário insere o código "123456" para encerrar a votação daquela urna */
        } else if (opcao===123456){ 

            /* passo extra de segurança, mais uma opção de confirmação para encerrar a votação. 
            Destaque para o método toUpperCase, para caso o mesário digitar a confirmação em minúsculo, 
            transformar em maiúsculo e entrar na estrutura de decisão */
            let seguranca = prompt("Você tem certeza que gostaria de encerrar a votação?\n\n(S) Para encerrar a votação\n(N) Para cancelar e voltar para o menu").charAt(0).toUpperCase() 

            /* estrutura de decisão, caso o mesário tenha confirmado o encerramento da votação e passado pelos passos de segurança */
            if(seguranca==="S"){
                console.clear()

                /* soma de todos os votos */
                votoTotal = candidato1 + candidato2 + candidato3 + votoBranco + votoNulo

                /* mostrando os votos válidos, que é a soma dos votos de todos os candidatos */
                console.log("Total de votos válidos:" , votoVálido = candidato1 + candidato2 + candidato3)

                /* mostrando o total numerico e o percentual de votos de cada candidato, voto branco e nulo */
                console.log(`\nCandidato: ${nome1}\nTotal de votos: ${candidato1}\nPercentual: ${((candidato1*100)/votoTotal).toFixed(2)}%`)
                console.log(`\nCandidato: ${nome2}\nTotal de votos: ${candidato2}\nPercentual: ${((candidato2*100)/votoTotal).toFixed(2)}%`)
                console.log(`\nCandidato: ${nome3}\nTotal de votos: ${candidato3}\nPercentual: ${((candidato3*100)/votoTotal).toFixed(2)}%`)
                console.log(`\nTotal de votos em branco: ${votoBranco}\nPercentual: ${((votoBranco*100)/votoTotal).toFixed(2)}%`)
                console.log(`\nTotal de votos nulo: ${votoNulo}\nPercentual ${((votoNulo*100)/votoTotal).toFixed(2)}%`)

                /* estrutura de decisão para verificar o candidato ganhador */
                if (candidato1 > candidato2 || candidato1 > candidato3){                  
                    console.log(`\nCom um total de ${candidato1} voto(s) e um percentual de ${((candidato1*100)/votoTotal).toFixed(2)}%\nO vencedor das eleições é o candidato: ${nome1}`)
                } else if (candidato2 > candidato1 || candidato2 > candidato3){
                    console.log(`\nCom um total de ${candidato2} voto(s) e um percentual de ${((candidato2*100)/votoTotal).toFixed(2)}%, o vencedor das eleições é o candidato: ${nome2}`)
                } else if (candidato3 > candidato2 || candidato3 > candidato2){
                    console.log(`\nCom um total de ${candidato3} voto(s) e um percentual de ${((candidato3*100)/votoTotal).toFixed(2)}% o vencedor das eleições é o candidato: ${nome3}`)
                } else if (votoVálido===0) { 
                    console.log("\nNão houveram votos válidos suficientes para determinar o ganhador.")
                } else {
                    // caso tenha empate no numéro de votos de cada candidato
                    console.log("\nHouve empate nas eleições! Não há um vencedor.") 
                }
                break;                
            }

        // estrutura de decisão, caso o usuário não tenha inserido nenhuma opção de voto mostrada no console´, mostrando a opção de anular o voto
        } else { 
            // confirmação para anular o voto
            let confNulo = confirm("Você gostaria de anular seu voto?"); 
            if (confNulo == true){
                votoNulo ++
                console.log("Voto computado.")
            }
        }   
    } 

    console.log("\nVotação iniciada em:")
    //chamando a funcao para mostrar a hora em que houve inicio da votação (foi armazenado no começo do código)
    mostrarHora()
    console.log("\nVotação finalizada em:")
    //chamando a funcao para armazenar o horario do fim da votação
    dataUrna()
    //chamando a funcao para mostrar a hora em que houve fim da votação (foi armazenado no começo do código)
    mostrarHora()
    
    // encerramento do programa
    console.log("\nO programa encerrou")
}