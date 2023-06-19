const months = [1,2,3,4,5,6,7,8,9,10,11,12]
let mes = 4

for (cont = 3; cont <= 11; cont = cont + 2) {
    if (cont == 7) {
        cont = cont + 1
    }
    if (mes == months[cont]) {
        console.log(`O mês é ${months[cont]}`)
    }

    console.log(`${months[cont]}`)
}