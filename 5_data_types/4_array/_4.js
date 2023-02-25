// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение,
// пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput() {
	const numbers = getInput();
	return numbers.reduce((sum, num) => sum + num, 0);
}

function getInput() {
	const numbers = [];
	let input;

	while (true) {
		input = prompt("Введите число", "");
		if (!isValid(input)) break;

		numbers.push(+input);
	}
	return numbers;
}

function isValid(input) {
	return input != null && input !== "" && isFinite(input);
}

alert(`Сумма элементов: ${sumInput()}`);
