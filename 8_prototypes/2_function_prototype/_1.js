// В коде ниже мы создаём нового кролика new Rabbit, 
// а потом пытаемся изменить его прототип.
// Сначала у нас есть такой код:

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();
// 4 случая:
// 1
Rabbit.prototype = {}; 

// 2
// Rabbit.prototype.eats = false;

// 3
// delete rabbit.eats;

// 4
// delete Rabbit.prototype.eats;

console.log( rabbit.eats );
// Ответ:
// 1) true
// 2) false
// 3) true
// 4) undefined