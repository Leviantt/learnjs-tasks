// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

function pow(x, n) {
    let result = 1;
    for(let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

const x = +prompt("Введите x", "");
const n = +prompt("Введите n", "");

alert(`pow(${x}, ${n}) => ${pow(x, n)}`);