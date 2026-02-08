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

// function filtrar(array, validacao){
//     return array.filter(validacao)
// }

//     const precos = [1212, 4353, 65, 545, 6567, 54,  65, 4545]
//     const precoAlto= filtrar(precos, (p)=> p >=200 )

// console.log(precoAlto);

// for(let i = 1; i<=10; i++){

// }

// const valores = [1,2,3,4,5,6,7,8,9,10];

// let soma = 0

// const resultado = valores.forEach((x)=> x =)
// console.log(resultado);

//  let soma = 0

// for(let i = 1; i <=10; i++){
//     soma += i;
// }

// console.log(soma);

// const valor = [1,2,3,4,5,6,7,8,9];

// let soma = 0;

// valor.forEach(x => {
//   soma += x;
// });

// console.log(soma); // 45

// const numeros = [1,2,3,4,5,6,7,8,9,10];

// numeros.forEach(x => {
//   console.log(x % 2 === 0 ? `${x} Par` : `${x} Impar`);
// });

// let soma = 0
// let soma_par = 0

// for(i =0; i <=50; i++){
//     if (i%2 ===1){
//         soma += i
//     }else{
//         soma_par += i
//     }}

//     console.log(soma)
//     console.log(soma_par);

// const valores = ['maca', ' banana', ' laranja']

// for(fruta of valores){
//     console.log(fruta);

// }

// let resultado = 0
// let media = 0
// const numero = [10,5, 8, 12]

// for (let i = 0; i < numero.length; i++){
//     resultado += numero[i]
//     media = resultado / numero.length
// }

// console.log(resultado);
// console.log(media);
// const numeros = [1, 2, 3, 4, 5];

// const resultado = numeros.filter((valor, index) =>
//   index % 2 === 0 && valor % 2 !== 0
// );

// console.log(resultado); // //

// // {
//     // [2,4]
//     // [3,4]
//     // [1,3,5]
//     // null

// const fruntas = ["banana", " maca   ", " coco", " uva"];
// fruntas.forEach((x, i) => {
//   console.log(`Sua fruta ${x} e seu indice ${i}`);
// });

// const  valores = [10,20,13,45,60,83,52]

// valores.forEach(x=> resultado += x)

// console.log(resultado);

// valores.forEach((x)=> )

// let resultado = []
// valores.forEach(x => x % 2=== 0 ? resultado.push(x):'')

// console.log(resultado);
// console.log(resultado.length);

// let contador = 0
// const  numeros = [10,20,13,45,60,83,52]
// numeros.forEach(function(numero){
//    if(numero % 2 ===0){
//       contador++
//    }
// })

// const cores = ["azul", " amarelo", " vermelho", "Verde"];

// for (let cor of cores) {
//     console.log(cor);

// }

// for (let cor of cores) {
//     if (cor.length > 4) {
//         console.log(cor);
//     }
// }



cores.forEach((cor) => cor.length > 4 ? console.log(cor.length) : '');



const cores = ["azul", " amarelo", " vermelho", "Verde"];
for (let cor of cores) {
    if (cor.length > 4) {
        console.log(cor)
    }

}