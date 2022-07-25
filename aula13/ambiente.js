/*
console.log('Passo 1')
console.log('Passo 2')
console.log('Passo 3')
console.log('Passo 4')
console.log('Passo 5')
console.log('Passo 6')
console.log('Passo 7')*/ // < ---- bruto

//melhor forma

/*var c = 1
while (c <= 7) {
    console.log(`Passo ${c}`)
    c++ //c = c + 1
}*/

var c = 1
do { 
    console.log(`passo ${c}`)
    c++
} while (c <= 7)