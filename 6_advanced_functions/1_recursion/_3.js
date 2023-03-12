// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2.
// То есть, следующее число получается как сумма двух предыдущих.
// Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
// Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.
// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
// Пример работы:

function fib(n) {
	let preprevious = 1;
	let previous = 1;
	for (let i = 3; i <= n; i++) {
		let temp = preprevious + previous;
		preprevious = previous;
		previous = temp;
	}

	return previous;
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757
