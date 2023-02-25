// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
// Например:

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

function Calculator() {
	this.operand1 = 0;
	this.operand2 = 0;
	this.read = function () {
		this.operand1 = +prompt("Введите значение операнда 1", "");
		this.operand2 = +prompt("Введите значение операнда 2", "");
	};
	this.sum = function () {
		return this.operand1 + this.operand2;
	};
	this.mul = function () {
		return this.operand1 * this.operand2;
	};
}
