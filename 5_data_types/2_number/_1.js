// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

function getInput() {
	const a = +prompt("Введите первое число", "");
	const b = +prompt("Введите второе число", "");

	return [a, b];
}

const [a, b] = getInput();

const sum = a + b;

alert(`Их сумма: ${sum}`);
