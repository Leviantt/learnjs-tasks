// Задачей является создать функцию-генератор pseudoRandom(seed),
// которая получает seed и создаёт генератор с указанной формулой.
// Пример использования:

let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073

function* pseudoRandom(seed) {
	let current = seed;
	while (true) {
		current = (current * 16807) % 2147483647;
		yield current;
	}
}
