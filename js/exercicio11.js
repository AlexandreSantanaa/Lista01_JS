function executarExercicio11(){
    alert("11) Escreva um algoritmo para ler as dimensões de um trapézio (base maior, base menor e altura), calcular e escrever a área do trapézio. a=(B+b).h/2")

    let baseMaior = parseFloat(prompt("Digite o tamanho da base maior de um trapezio"))
    let baseMenor = parseFloat(prompt("Digite o tamanho da base menor de um trapezio"))
    let altura = parseFloat(prompt("Digite o tamanho da altura de um trapezio"))

    let area = (baseMaior+baseMenor)*altura/2

    alert("a area de um trapezio é de:" + area)
}