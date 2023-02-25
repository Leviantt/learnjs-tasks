// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// Например:

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log(menu);
multiplyNumeric(menu);
console.log(menu);

// после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

function multiplyNumeric(menu) {
    for(let key in menu) {
        if(typeof menu[key] !== "number") continue;

        menu[key] *= 2;
    }
}