// Посмотрите на код. Какой будет результат у вызова на последней строке?
"use strict";
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi(); // Ошибка: функция sayHi не определена