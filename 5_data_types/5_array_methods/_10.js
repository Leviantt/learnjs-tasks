// Напишите функцию shuffle(array), которая перемешивает
// (переупорядочивает случайным образом) элементы массива.
// Многократные прогоны через shuffle могут привести к
// разным последовательностям элементов. Например:

let arr = [1, 2, 3];

console.log(shuffle(arr));
// arr = [3, 2, 1]

console.log(shuffle(arr));
// arr = [2, 1, 3]

console.log(shuffle(arr));
// arr = [3, 1, 2]

function shuffle(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); 
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
}
