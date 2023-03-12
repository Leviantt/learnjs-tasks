// В приведённом ниже коде запланирован вызов setTimeout, 
// а затем выполняется сложное вычисление, 
// для завершения которого требуется более 100 мс.
// Когда будет выполнена запланированная функция?
// После цикла.
// Перед циклом.
// В начале цикла.
// Что покажет console.log?

let i = 0;

setTimeout(() => console.log(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}

// Ответ: 100000000, т.к. таймаут сработает только после того, как выполнится текущий код.