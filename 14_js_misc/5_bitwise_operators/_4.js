// Почему результат второго console.log'а такой странный?

console.log( 123456789 ^ 0 ); // 123456789
console.log( 12345678912345 ^ 0 ); // 1942903641

// Ответ: Побитовые операторы могут работать только с 32-битными числами
// Поэтому лишние знаки слева у второго числа были отброшены