function executarExercicio06(){
    alert("6) Escreva um algoritmo para ler dois valores do teclado e exibir como resposta a divisão dos valores.")
    
    let valor01 = parseInt(prompt("Digite um valor"))
    let valor02 = parseInt(prompt("Digite outro valor"))

    while(valor02==0){
        valor02 = parseInt(prompt("Digite outro valor"))
    }

    let divisao = valor01/valor02

    alert("divisão = " + divisao)
}