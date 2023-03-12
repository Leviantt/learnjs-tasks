// Являются ли фрагменты кода ниже эквивалентными?
// Другими словами, ведут ли они себя одинаково во всех обстоятельствах,
// для всех переданных им обработчиков?

promise.then(f1).catch(f2);

// Против:

promise.then(f1, f2);

// Ответ: Нет. Во втором случае, если произойдет ошибка в f1, то она не будет обработана функцией f2