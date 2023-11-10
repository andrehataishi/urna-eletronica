/* Autor: André Hideki Hataishi da Silva
 * SENAI-SP - Conde José Vicente de Azevedo 
 * Criação de uma urna eletrônica */

let candidatos = [
    [11, "Cristiano Ronaldo"],
    [14, "Ronaldo Cascão"],
    [22, "Lionel Messi"],
    [38, "Neymar Jr."],
    [50, "Ronaldinho Gaúcho"],
    [99, "Para Voto em Branco"]];

document.getElementById("tabela").innerHTML =
    `<table>
    <th>Numero</th>
    <th>Nome</th>
    </table>`

for (let i = 0; i < candidatos.length; i++) {
    document.getElementById("tabela").innerHTML +=
        `<table>
        <tr>
        <td>${candidatos[i][0]}</td>
        <td>${candidatos[i][1]}</td>
        </tr>
        </table>`
}

var audio = new Audio('confirmacao.mp3');
async function som(){
    audio.currentTime=0
    return await audio.play();
}

async function urnaEletronica() {

    /* declaração das variáveis */
    const contadorMenu = 0;
    let maiorVoto = 0, votoBranco, votoNulo = 0, votoTotal = 0, votoVálido = 0, opcaoEscolhida = false, ganhador,

        //chamando a funcao para armazenar o horario do inicio da votação
        horaInicio = dataUrna();

    for (let i = 0; i < candidatos.length; i++) {
        candidatos[i].push(0)
    }

    /* menu da urna com estrutura de repetição */
    while (contadorMenu === 0) {

        /* entrada da opção de voto */
        let opcao = parseInt(prompt("Digite sua opção de voto: "));
        console.clear()

        if (opcao === 123456) {

            /* passo extra de segurança, mais uma opção de confirmação para encerrar a votação. 
            * Destaque para o método toUpperCase, para caso o mesário digitar a confirmação em minúsculo, 
            transformar em maiúsculo e entrar na estrutura de decisão */
            let seguranca = prompt("Você tem certeza que gostaria de encerrar a votação?\n\n(S) Para encerrar a votação\n(N) Para cancelar e voltar para o menu").charAt(0).toUpperCase()

            /* estrutura de decisão, caso o mesário tenha confirmado o encerramento da votação e passado pelos passos de segurança */
            if (seguranca.charAt(0) === "S") {
                console.clear()

                /* await soma de todos os votos */
                for (let i = 0; i < candidatos.length; i++) {
                    votoTotal += candidatos[i][2]
                    votoVálido += candidatos[i][2]
                    if (i == candidatos.length - 1) {
                        votoBranco = candidatos[i][2]
                    }
                }

                votoTotal += votoNulo

                /* mostrando os votos válidos, que é a await soma dos votos de todos os candidatos */
                console.log("Total de votos válidos:", votoVálido.toString())

                /* mostrando o total numerico e o percentual de votos de cada candidato, voto branco e nulo */
                for (let i = 0; i < candidatos.length - 1; i++) {
                    console.log(`\nCandidato: ${candidatos[i][1]} \nTotal de votos: ${candidatos[i][2]} \nPercentual: ${((candidatos[i][2] * 100) / votoTotal).toFixed(2)}% `)
                    if (i == candidatos.length - 2) {
                        console.log(`\nTotal de votos em Branco: ${candidatos[i + 1][2]} \nPercentual: ${((votoBranco * 100) / votoTotal).toFixed(2)}% `)
                        console.log(`\nTotal de votos Nulo: ${votoNulo} \nPercentual ${((votoNulo * 100) / votoTotal).toFixed(2)}% `)
                    }
                }

                for (let i = 0; i < candidatos.length - 1; i++) {
                    if (votoVálido !== 0) {
                        if (candidatos[i][2] > maiorVoto) {
                            maiorVoto = candidatos[i][2]
                            ganhador = `\nCom um total de ${candidatos[i][2]} voto(s) e um percentual de ${((candidatos[i][2] * 100) / votoTotal).toFixed(2)}%\nO vencedor das eleições é o candidato: ${candidatos[i][1]} \nNúmero eleitoral: ${candidatos[i][0]} `
                        } else if (maiorVoto === candidatos[i][2]) {
                            ganhador = "\nHouve empate nas eleições! Não há um vencedor."
                        }
                    } else {
                        ganhador = "\nNão houveram votos válidos suficientes para determinar um vencedor."
                        break;
                    }
                }

                console.log(ganhador)

                // declarando a funcao na variavel para armazenar o horario do fim da votação
                horaFim = dataUrna();
                break;
            }

        } else {
            for (let i = 0; i < candidatos.length; i++) {
                if (candidatos[i] && candidatos[i][0] === opcao) {
                    if (opcao === 5) {
                        let confOpc = confirm(`Sua opção de voto: ${opcao} \nVoto em Branco\n\nConfimar opção?\n\n(OK) para confimar voto\n(CANCELAR) para corrigir voto`)
                        if (confOpc === true) {
                            candidatos[i][2]++
                            console.log("Voto computado.")
                            opcaoEscolhida = true
                            await som()
                            //https://www.freecodecamp.org/portuguese/news/o-metodo-addeventlistener-exemplo-de-codigo-com-listener-de-eventos-em-javascript/
                            break;
                        }
                    } else {
                        let confOpc = confirm(`Sua opção de voto: ${opcao} \nCandidato: ${candidatos[i][1]} \n\nConfimar opção?\n\n(OK) para confimar voto\n(CANCELAR) para corrigir voto`)
                        if (confOpc === true) {
                            candidatos[i][2]++
                            console.log("Voto computado.")
                            opcaoEscolhida = true
                            await som()
                            break;
                        }
                    }
                } else {
                    opcaoEscolhida = false
                }
            }

            if (opcaoEscolhida === false) {
                let confNulo = confirm("Você gostaria de anular seu voto?");
                if (confNulo == true) {
                    votoNulo++
                    opcaoEscolhida = false
                    await som()
                    console.log("Voto computado.")
                }
            }
        }
    }

    //chamando a variavel para mostrar a hora em que houve inicio da votação (foi armazenado no começo do código)
    console.log("\nVotação iniciada em:")
    console.log(horaInicio)

    //chamando a variavel para mostrar a hora em que houve fim da votação (foi armazenado no começo do código)
    console.log("\nVotação finalizada em:")
    console.log(horaFim)

    // encerramento do programa
    console.log("\nO programa encerrou")
}