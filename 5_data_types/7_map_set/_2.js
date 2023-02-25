// Анаграммы – это слова, у которых те же буквы в том же количестве,
// но они располагаются в другом порядке.
// Например:
// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
// Например:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"

function aclean(arr) {
	const map = new Map();
	for (let word of arr) {
		const key = word.toLowerCase().split("").sort().join("");
		map.set(key, word);
	}
	return Array.from(map.values());
}
