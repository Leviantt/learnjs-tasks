// Напишите функцию sum, которая бы работала следующим образом:

function sum(a) {
	let sum = a;

	function add(b) {
		sum += b;
		return add;
	}

	add.toString = function () {
		return sum;
	};

	return add;
}

console.log(sum(1)(2)); // 3
console.log(sum(5)(-1)(2)); // 6
console.log(sum(6)(-1)(-2)(-3)); // 0
console.log(sum(0)(1)(2)(3)(4)(5)); // 15
