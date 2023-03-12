// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// Например:

console.log(sumToWithLoop(1)); // 1
console.log(sumToWithLoop(2)); // 2 + 1 = 3
console.log(sumToWithLoop(3)); // 3 + 2 + 1 = 6
console.log(sumToWithLoop(4)); // 4 + 3 + 2 + 1 = 10
console.log(sumToWithLoop(100)); // 100 + 99 + ... + 2 + 1 = 5050

console.log(sumToWithRecursion(1)); // 1
console.log(sumToWithRecursion(2)); // 2 + 1 = 3
console.log(sumToWithRecursion(3)); // 3 + 2 + 1 = 6
console.log(sumToWithRecursion(4)); // 4 + 3 + 2 + 1 = 10
console.log(sumToWithRecursion(100)); // 100 + 99 + ... + 2 + 1 = 5050

console.log(sumToWithFormula(1)); // 1
console.log(sumToWithFormula(2)); // 2 + 1 = 3
console.log(sumToWithFormula(3)); // 3 + 2 + 1 = 6
console.log(sumToWithFormula(4)); // 4 + 3 + 2 + 1 = 10
console.log(sumToWithFormula(100)); // 100 + 99 + ... + 2 + 1 = 5050

// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.
// Пример работы вашей функции:

function sumToWithLoop(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
}

function sumToWithRecursion(n) {
	if (n < 2) return n;

	return n + sumToWithRecursion(n - 1);
}

function sumToWithFormula(n) {
	return ((n + 1) * n) / 2;
}
