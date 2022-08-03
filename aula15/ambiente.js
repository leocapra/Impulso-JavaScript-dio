let num = [5, 8, 2, 9, 3]
/*
num.sort() //ordena
num.push(1) //add

console.log(`Nosso vetor é o ${num}`) //mostra a posição atual do vetor na linha

console.log(`O vetor tem ${num.length} posições`) //quantidade de vetor

console.log(`O primeiro valor do ventor é ${num[0]}`) //mostra o primeiro vetorbn

for (let c = 0 ; c < num.length ; c++) {
    console.log(num[c])
}  //do alone

*/

for (let c in num) {
    console.log(`Na posição ${c} está o valor ${num[c]}`) //mesma coisa q o for de cima
}

let pos = num.indexOf(1)
if (pos == -1) {
    console.log('O valor não existe!')
} else {
    console.log(`O valor está na posição ${pos}`)
} //-1 é igual a valor não encontrado
