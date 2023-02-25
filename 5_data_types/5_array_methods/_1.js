// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// Примеры:

console.log(camelize("background-color")); // 'backgroundColor';
console.log(camelize("list-style-image")); // 'listStyleImage';
console.log(camelize("-webkit-transition")); // 'WebkitTransition';

function camelize(str) {
	return str
		.split("-")
		.map((word, i) => i === 0 ? word : word[0].toUpperCase() + word.slice(1))
		.join("");
}
