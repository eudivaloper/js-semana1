// console.log(alunas.sp.turma1.estudantes[0].nome);
// console.log(alunas.sp.turma1.estudantes[1].nome);
// console.log(alunas.sp.turma1.estudantes[2].nome);

//RELEMBRANDO ALGUNS MÉTODOS FOR

// for (let i in alunas.sp.turma1.estudantes) {
//   console.log(alunas.sp.turma1.estudantes[i].nome)  
// }

// for (let estudante of alunas.sp.turma1.estudantes) {
//   console.log(estudante.nome)
// }

// console.log(alunas.sp.turma1.estudantes[0].idade)
// console.log(alunas.sp.turma1.estudantes[1].idade)
// console.log(alunas.sp.turma1.estudantes[2].idade)
// console.log(alunas.sp.turma2.estudantes[0].idade)
// console.log(alunas.sp.turma2.estudantes[1].idade)
// console.log(alunas.sp.turma2.estudantes[2].idade)

// for (let turma in alunas.sp) {
//   for (let estudante of alunas.sp[turma].estudantes) {
//     console.log("estudante, nome", estudante.nome);
//     console.log("estudante, idade", estudante.idade);
//     if (Array.isArray(estudante.notas)) {
//       for (let nota of estudante.notas) {
//         console.log(nota);
//       }
//     }
    
//   }
// }

//*************************

//MÉTODOS ES6: FOREACH
//executa a callback function para cada item do array, e só. Não retorna nada

// let outroArray = ["xuxu", "gatinho", "socorro"];
// outroArray.forEach(function(valor) {
//   console.log(valor);
// });


//MÉTODOS ES6: FILTER
//Diferente do forEach, o método filter retorna uma array com os elementos "filtrados"

// let novoArray = [543, 345, 234];
// let retornoFilter = novoArray.filter(valor => {
//   if (valor > 300) {
//     return valor;
//   }  
// });
// console.log(retornoFilter);

// let infos = [123, "bola", 0, true];
// let filterNumeros = infos.filter((i) => {
//   if (typeof i == "number") {
//     return i;
//   };
// });
// console.log(filterNumeros);


//MÉTODOS ES6: MAP
//ao invés de filtrar os elementos, modifica todos os elementos de acordo com o que está passado na função callback

// let novoArray = [543, 345, 234];
// let retornoMap = novoArray.map(function(valor) {
//   if (valor > 300) {
//     return valor;
//   }
// });
// console.log(retornoMap);

// let estudantes = [123, 123, 0];
// let estudanteAtivas = estudantes.map(estudante => {
//   return estudante + 100;
// });
// console.log(estudanteAtivas);


//MÉTODOS ES6: REDUCE
//reduz todos os elementos da array a um único valor, que é retornado (não retorna array)
//atenção com os argumentos!

// const soma = rockets.reduce(function(valorPrevio, elem) {
//     console.log("iteracao", valorPrevio);
//     return valorPrevio + elem.launches;
// }, 100 );
// console.log(soma);

// // ES6
// const soma2 = rockets.reduce((valorPrevio, elem) => valorPrevio + elem.launches, 0); 
// console.log(soma2);

// //exercicios
// //https://repl.it/student/classrooms/26252