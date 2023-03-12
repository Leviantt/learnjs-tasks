// Представьте, что у нас имеется некий объект obj,
// созданный функцией-конструктором – мы не знаем какой именно,
// но хотелось бы создать ещё один объект такого же типа.
// Можем ли мы сделать так?

// let obj2 = new obj.constructor();

// Ответ: Можем, в случае, когда prototype имеет свойство constructor

// Приведите пример функции-конструктора для объекта obj,
// с которой такой вызов корректно сработает.
function Func1() {} // сработает, т.к. по умолчанию Func1.prototype = { constructor: Func1 }
// И пример функции-конструктора,
// с которой такой код поведёт себя неправильно.
function Func2() {}
Func2.prototype = { someProp: true }; // не сработает, т.к. Func2.prototype переопределено
// объектом без свойства constructor 


let obj = new Func1();
let obj2 = new obj.constructor();

console.log(Func1.prototype.constructor === obj.constructor); // true

