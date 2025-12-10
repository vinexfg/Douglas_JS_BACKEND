

// let x = 16

// if (x <= 16){
//     console.log(' nao pode voltar ')
// }



//Notas do alubos full_stack


// const nota = 7


// if (nota >=8){
//     console.log('aprovado')
// }else if(nota >= 7){
//     console.log('Aprovado')
// }else{
//     console.log(' Reprovado')
// }

                                                                                                                                                                                                 
// SISTEMA DE MEDIA



// const nota = 7;

// let nota1 = 4
// let nota2 = 8


// media = (nota1 + nota2)/2

// if(media >=8){
//     console.log('Aprovado com louvor');
    
// }else if(media >=7){
//     console.log(' Aprovado')
// }else if(media >=3 && media >=6 ){
//     console.log('Recuperacao');
// }else{
//     console.log('reprovado')
// } 


// const prompt = require("prompt-sync")();


// let number1 = Number(prompt(' Digite seu primeiro numero'))
// let number2 = Number(prompt('digite seu  segundo nuemro'))


// if (number1 <= 10 && number2 >= 0){
//     console.log('Digito estao aprovado')}



// 1kwh == 0.50centavos





// let valor_consumido = 100;


// if (valor_consumido <= 100){
//    let resultado = valor_consumido * 0.50
//    console.log(`Seu consumo ${valor_consumido} e seu valor consumido R$${resultado}`);  
   
// } else if(valor_consumido >=101 && valor_consumido <=200){
//     let resultado2 = valor_consumido * 0.75
//     console.log(`Seu consumo ${valor_consumido} e seu valor consumido R$${resultado2}`)

// } else if(valor_consumido >200){
//     let resultado3 = valor_consumido * 1
//     console.log(`Seu consumo ${valor_consumido} e seu valor consumido R$${resultado3}`)
// }
// ///////////////////////////////////////////////////////////////aaaaaaaaaaaaaaaaaaaaaaaaaaaaa





// let salario = 4000;
// let imposto = 0;


// if (salario <= 2000){
//     imposto = 0
// }else if (salario <= 3500){
//     imposto = (salario - 2000) * 0.10
// }else if(salario <= 5000){
//     imposto = ((1500 * 0.10) + (salario - 3500) * 0.2)
// }else{
//     imposto = ((1500 * 0.10) + (1500 * 0.20) + (salario - 5000) * 0.30)
// }


// console.log(`O imposto de renda devido e R$ ${imposto.toFixed(2)}`)


const prompt = require("prompt-sync")();




// let resultado = idade >= 18 ? "E Adulto": "E muleque"

let numero = 10 

let resposta =  (numero % 2== 1) ? "impa" : 'par'

console.log(`Seu nuemro e ${resposta}`);
