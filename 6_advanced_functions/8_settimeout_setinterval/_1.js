// Напишите функцию printNumbers(from, to), 
// которая выводит число каждую секунду, начиная от from и заканчивая to.
// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbers1(from, to) {
  let current = from;
  const interval = setInterval(() => {
    console.log(current);
    if(current >= to) {
      clearInterval(interval);
    }
    current++;
  }, 1000);
}

function printNumbers2(from, to) {
  let current = from;

  setTimeout(function handler() {
    console.log(current);
    if (current < to) {
      setTimeout(handler, 1000);
    }
    current++;
  }, 1000);
}

printNumbers1(1, 5);
printNumbers2(1, 5);