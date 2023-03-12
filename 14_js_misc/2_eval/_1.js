// Создайте калькулятор, который запрашивает ввод какого-нибудь
// арифметического выражения и возвращает результат его вычисления.
// В этой задаче нет необходимости проверять полученное выражение на корректность, 
// просто вычислить и вернуть результат.

function calculate(expression) {
  return eval(expression);
}

console.log(calculate("6 + 2"))
console.log(calculate("6 - 2"))
console.log(calculate("6 * 2"))
console.log(calculate("6 / 2"))