console.log(alunas.sp.turma1.estudantes[0].nome);
console.log(alunas.sp.turma1.estudantes[1].nome);
console.log(alunas.sp.turma1.estudantes[2].nome);

for (var i in alunas.sp.turma1.estudantes) {
  console.log(alunas.sp.turma1.estudantes[i].nome)  
}

for (var estudante of alunas.sp.turma1.estudantes) {
  console.log(estudante.nome)
}

console.log(alunas.sp.turma1.estudantes[0].idade)
console.log(alunas.sp.turma1.estudantes[1].idade)
console.log(alunas.sp.turma1.estudantes[2].idade)
console.log(alunas.sp.turma2.estudantes[0].idade)
console.log(alunas.sp.turma2.estudantes[1].idade)
console.log(alunas.sp.turma2.estudantes[2].idade)

for (var turma in alunas.sp) {
  // console.log(alunas.sp[turma].estudantes);
  for (var estudante of alunas.sp[turma].estudantes) {
    console.log(estudante.nome);
    console.log(estudante.idade);
    // console.log(estudante.notas);
    if (Array.isArray(estudante.notas)) {
      for (var nota of estudante.notas) {
        console.log(nota);
      }
    }
    
  }
}


var outroArray = ["xuxu", "gatinho", "socorro"];
outroArray.forEach(function(valor) {
  console.log(valor);
});

// console.log(valor);


var novoArray = [543, 345, 234];
var retornoMap = novoArray.map(function(valor) {
  if (valor > 300) {
    return valor;
  }
  
});

console.log(retornoMap);


var novoArray = [543, 345, 234];
var retornoFilter = novoArray.filter(valor => {
  if (valor > 300) {
    return valor;
  }
  
});

console.log(retornoFilter);

var estudantes = [
  123,
  123,
  0,
  1
];

var estudanteAtivas = estudantes.filter((estudante, i) => {
  return i;
});

console.log(estudanteAtivas);

var estudantes = [
  123,
  123,
  0
];

var estudanteAtivas = estudantes.map(estudante => {
  return estudante + 100  
});

console.log(estudanteAtivas);

const soma = rockets.reduce(function(valorPrevio, elem) {
    console.log("iteracao", valorPrevio);
    return valorPrevio + elem.launches;
}, 0 );
console.log(soma);

// ES6
const soma2 = rockets.reduce((prevVal, elem) => prevVal + elem.launches, 0); 
console.log(soma2);



//exercicios
//https://repl.it/student/classrooms/26252