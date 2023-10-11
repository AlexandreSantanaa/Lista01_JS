function executarExercicio07(){
    alert("7) Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever *a área do retângulo. Dica a=b.h")

    let base = parseFloat(prompt("Digite a base do retangulo"))
    let altura = parseFloat(prompt("Digite a altura do retangulo"))

    let area = base*altura

    alert("A area do retangulo é:" + area)
}