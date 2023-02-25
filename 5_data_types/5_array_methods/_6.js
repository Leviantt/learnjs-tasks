// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.
// Во-первых, реализуйте метод calculate(str),
// который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО»
// (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
// Пример использования:

let calc = new Calculator();

console.log(calc.calculate("3 + 7")); // 10
// Затем добавьте метод addMethod(name, func),
// который добавляет в калькулятор новые операции.
// Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
// Например, давайте добавим умножение *, деление / и возведение в степень **:

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result); // 8

function Calculator() {
	this.operatorsMap = {
		"+": (a, b) => a + b,
		"-": (a, b) => a - b,
	};
	this.calculate = function (operation) {
		const [a, op, b] = operation.split(" ");

		if (!this.operatorsMap[op] || isNaN(a) || isNaN(b)) {
			return NaN;
		}

		return this.operatorsMap[op](+a, +b);
	};
	this.addMethod = function (name, func) {
		this.operatorsMap[name] = func;
	};
}
