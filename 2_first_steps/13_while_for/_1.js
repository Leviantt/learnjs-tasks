// Какое последнее значение выведет этот код? Почему?

let i = 3;

while (i) {
  console.log( i-- );
}

// Ответ: 1, с каждой итерацией i уменьшается на единицу, когда она достигнет 0 (falsy value), 
// цикл больше идти не будет