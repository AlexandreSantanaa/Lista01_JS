function executarExercicio12(){
    alert("12) Escreva um algoritmo para ler as dimensões de um círculo (raio), calcular e escrever a área do círculo. a=pi*r² ")

    const pi = 3.14159265359

    let raio = parseFloat(prompt("Digite o raio do circulo"))

    let area = pi*raio**2

    alert("A area do circulo é de:" + area)
}