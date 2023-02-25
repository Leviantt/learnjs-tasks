function readNumber() {
	let input;

	do {
		input = prompt("Введите число", "0");
	} while (!isFinite(input));

	if (input === null || input === "") return null;

	return +input;
}

alert(`Введеное число: ${readNumber()}`);
