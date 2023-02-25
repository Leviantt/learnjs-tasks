// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
	operand1: 0,
	operand2: 0,
	read() {
		this.operand1 = +prompt("Введите значение операнда 1", "");
		this.operand2 = +prompt("Введите значение операнда 2", "");
	},
	sum() {
		return this.operand1 + this.operand2;
	},
	mul() {
		return this.operand1 * this.operand2;
	},
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
