function executarExercicio08(){
    alert("8) Escreva um algoritmo para ler as dimensões de um triângulo (base e altura), calcular e escrever a área do triângulo. Dica a=b.h/2")

    let base = parseFloat(prompt("Digite o tamanho da base do triangulo:"))
    let altura = parseFloat(prompt("Digite o tamanho da altura do triangulo:"))

    let area = base*altura/2

    alert("A area do triangulo é de:" + area)
}