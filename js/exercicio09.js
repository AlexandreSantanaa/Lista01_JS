function executarExercicio09(){
    alert("9) Escreva um algoritmo para ler as dimensões de um quadrado (lado), calcular e escrever a área do quadrado. Dica a=l² ")

    let lado = parseFloat(prompt("Digite o tamanho do lado de um quadrado"))

    let area = lado**2

    alert("A area do quadrado é de:" + area)
}