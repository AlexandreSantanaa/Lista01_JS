function executarExercicio10(){
    alert("10) Escreva um algoritmo para ler as dimensões de um losango (diagonal maior, diagonal menor), calcular e escrever a área do losango. Dica a=D.d/2")

    let diagonalMenor = parseFloat(prompt("Digite o tamanho da diagonal menor de um losango"))
    let diagonalMaior = parseFloat(prompt("Digite o tamanho da diagonal maior de um losango"))

    let area = diagonalMaior*diagonalMenor/2

    alert("A area do losango é de:" + area)
}