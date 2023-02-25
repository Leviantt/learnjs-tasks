// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив,
// содержащий только уникальные элементы arr.
// Например:

function unique(arr) {
	/* ваш код */
	const result = [];
	for (let str of arr) {
		if (result.includes(str)) continue;

		result.push(str);
	}
	return result;
}

let strings = [
	"кришна",
	"кришна",
	"харе",
	"харе",
	"харе",
	"харе",
	"кришна",
	"кришна",
	":-O",
];

console.log(unique(strings)); // кришна, харе, :-O
