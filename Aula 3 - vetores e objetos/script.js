// o que são vetores ou Arrays

// Como declarar um array element
let array = ['String', 1, true, ['array1'], ['array2'], ['array3']['array4']];
/*console.log(array[3]); */

/* //forEach() – itera um array;
array.forEach(function(item, index) {console.log(item, index)}); */

// push() – add item no final do array;
array.push([]);
console.log(array);

// pop() – remove item no final do array;
array.pop();
console.log(array);

// shift() – remove item no início do array;
array.shift();
console.log(array);

// unshift() – add item no início do array;
array.unshift('novo item no inicio');
console.log(array);

// indexOf() – retorna o índice de um valor;
console.log(array.indexOf(true));

//splice() – remove ou substitui um item pelo índice;
array.splice(0, 3);

// slice() – retorna uma parte de um array existente;
let novoArray = array.slice(0, 3);
console.log(novoArray);

let object = { string: 'string', number: 1, Boolean: true, array: ["array"], objectInterno: {
  objectInterno: 'objeto interno'}};

console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var { string, Boolean, objectInterno} = object;
console.log(string, Boolean, objectInterno);