// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.

function makeCounter() {
	let count = 0;

	function counter() {
		return count++;
	}

	counter.decrease = () => count--;

	counter.set = (value) => (count = value);

	return counter;
}
const counter = makeCounter();

console.log(counter()); // 0
console.log(counter.set(4)); // 4
console.log(counter()); // 4
console.log(counter.decrease()); // 5
console.log(counter()); // 4
