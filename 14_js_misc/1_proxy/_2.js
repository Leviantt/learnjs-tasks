// array[-N] – это то же, что и array[array.length - N].
// Создайте прокси, который реализовывал бы такое поведение.
// Вот как это должно работать:

let array = [1, 2, 3];

array = new Proxy(array, {
  /* ваш код */
  get(target, prop) {
    if(prop < 0) {
      return target[target.length + Number(prop)];
    }
    
    return Reflect.get(...arguments);
  }
});

console.log( array[-1] ); // 3
console.log( array[-2] ); // 2

// вся остальная функциональность массивов должна остаться без изменений