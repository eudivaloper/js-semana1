//métodos "proto" de array

//length
//devolve o tamanho (comprimento) da array
console.log(array.length);

//push
//recebe um valor e adiciona na posição final do array

const array = [1, 2, 3];
console.log(array.push(4));
console.log(array);

//pop
//deleta a última posição

const outraArray = [55, 66, "xuxu"];
console.log(outraArray.pop());
console.log(outraArray);

//shift
//deleta a primeira posição

let arrayShift = [1, 2, 3];
console.log(arrayShift.shift());
console.log(arrayShift);


//slice
//copia os índices selecionados e cria uma "cópia superficial".
//recebe dois argumentos que indicam o trecho da array que queremos copiar (sem incluir o índice final)
//se der 1 só parâmetro, começa do zero
//não modifica a array original 

const maisUmaArray = [3, 2, 1];
console.log(maisUmaArray.slice(0));
console.log(maisUmaArray.slice(1));
console.log(maisUmaArray.slice(2));
console.log(maisUmaArray.slice(-1));
console.log(maisUmaArray.slice(0, 2));
console.log(maisUmaArray);

//reverse
//reverte a ordem da array "in place" (substitui a original)

let arrayReverse = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arrayReverse);
let reversed = array1.reverse(); 
console.log(reversed);

//splice
//modifica o conteúdo da array deletando e/ou adicionando valores
//3 parâmetros: índice a partir de onde alterar, quantidade de índices a deletar (se for 0 só insere, sem deletar), e a partir daí os índices a serem inseridos

let months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);
months.splice(4, 1, 'May');
console.log(months);

let letras = ["a", "f", "g", "h", "p", "r", "k", "l"]
letras.splice(1, 0, "b", "c", "d", "e");
console.log(letras);
letras.splice(8, 2, "i", "j")
console.log(letras);

//concat
//junta arrays sem substituir as originais (retorna uma nova)

let array1 = ["a", "b", "c"];
let array2 = ["d", "e", "f"];

console.log(array1.concat(array2));

//join
//cria e retorna uma nova string concatenando os elementos da array, separados por vírgula ou outro separador especificado

let pokemon = ["Pikachu", "Bubassauro", "Charizard", "Squirtle", "Toguepi", "Meowth"];

console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join('-'));

//split (NÃO É UM MÉTODO DE ARRAY, E SIM DE STRING)
//divide uma string em uma array de strings, utilizando um separador para delimitar onde dividir

let frase = "Um pequeno jabuti xereta viu dez cegonhas felizes";

let palavras = frase.split(' ');
console.log(palavras[3]);

let chars = frase.split('');
console.log(chars[8]);

let fraseNaArray = frase.split();
console.log(fraseNaArray);

//lista geral de métodos
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype