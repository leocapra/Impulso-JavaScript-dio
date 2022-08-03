function parimp(n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}
var res = parimp(12)
console.log(`O valor é um número ${res}`)