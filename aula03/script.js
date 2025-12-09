


// function calcularIMC(peso, altura){

//     const imc = peso / (altura**2)
    
//     let classificacao =''

//     if (imc < 18.5){
//         classificacao = 'abaixo do peso'
//     }else if (imc < 25){
//         classificacao = 'Peso normal'
//     }else if(imc< 30){
//         classificacao = 'Sobreopeso'
//     }else{
//         classificacao = 'obesidade'
//     }

//     return{
//         imc: imc.toFixed(2),
//         classificacao: classificacao
//     }
// }
//  resultado = calcularIMC()

// console.log(`Resultado: ${resultado.calcularIMC(72, 1.75)}`);


// function calcularIMC(peso, altura) {

//     const imc = peso / (altura ** 2)

//     let classificacao = ''

//     if (imc < 18.5) {
//         classificacao = 'Abaixo do peso'
//     } else if (imc < 25) {
//         classificacao = 'Peso normal'
//     } else if (imc < 30) {
//         classificacao = 'Sobrepeso'
//     } else {
//         classificacao = 'Obesidade'
//     }

//     return {
//         imc: imc.toFixed(2),
//         classificacao: classificacao
//     }
// }

// const resultado = calcularIMC(72, 1.75)

// console.log(`IMC: ${resultado.imc} - Classificação: ${resultado.classificacao}`)


// function listando(lista){
//     const lista = [12,24,223,42,533,655,744,855,103]
//     let resultados = lista.filter(x=> x>= 300)
//     return resultados    
// }



// function filtrar(array, validacao){
//     return array.filter(validacao)

// }
// const precos = [12312, 43534, 65, 545, 6567, 54,  65, 45454]



// const precoAltos = filtrar(precos, (preco)=> preco > 100)




function filtrar(array, validacao){
    return array.filter(validacao)
}

    const precos = [1212, 4353, 65, 545, 6567, 54,  65, 4545]
    const precoAlto= filtrar(precos, (p)=> p >=200 )


console.log(precoAlto);
