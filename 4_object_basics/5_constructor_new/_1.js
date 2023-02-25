// Возможно ли создать функции A и B, чтобы new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// console.log(a == b); // true
// Если да – приведите пример вашего кода.

// Ответ: Да, возможно, пример:

const sharedObj = {};

function A() {
	return sharedObj;
}
function B() {
	return sharedObj;
}

let a = new A();
let b = new B();

console.log(a == b); // true