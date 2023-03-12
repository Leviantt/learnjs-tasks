// Задача состоит из двух частей.
// У нас есть объекты:
let head = {
	glasses: 1,
};

let table = {
	pen: 3,
};

let bed = {
	sheet: 1,
	pillow: 2,
};

let pockets = {
	money: 2000,
};

// 1. С помощью свойства __proto__ задайте прототипы так,
// чтобы поиск любого свойства выполнялся по следующему пути:
// pockets → bed → table → head. Например,
// pockets.pen должно возвращать значение 3 (найденное в table),
// а bed.glasses – значение 1 (найденное в head).
table.__proto__ = head;
bed.__proto__ = table;
pockets.__proto__ = bed;
console.log(pockets.pen); // 3
console.log(bed.glasses); // 1

// 2. Ответьте на вопрос: как быстрее получить значение glasses –
// через pockets.glasses или через head.glasses?
// При необходимости составьте цепочки поиска и сравните их.
// Ответ: При первом запросе к glasses через head.glasses будет быстрее, далее одинаково.
// pockets → bed → table → head
//                       (glasses)
// Если обращаться к glasses через head мы сразу получим значение,
// а если обращаться через pockets, придется пройти всю цепочку объектов.
