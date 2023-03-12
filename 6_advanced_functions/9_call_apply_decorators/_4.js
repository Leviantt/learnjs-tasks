// Создайте «тормозящий» декоратор throttle(f, ms), 
// который возвращает обёртку, передавая вызов в f 
// не более одного раза в ms миллисекунд. Те вызовы, 
// которые попадают в период «торможения», игнорируются.
// Отличие от debounce – если проигнорированный вызов является 
// последним во время «задержки», то он выполняется в конце.
// Пример кода:

function f(a) {
  console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано

function throttle(f, ms) {
  let lastArgs;
  let lastThis;
  let isThrottled = false;

  return function wrapper() {
    if(isThrottled) {
      lastArgs = arguments;
      lastThis = this;
      return;
    }

    isThrottled = true;
    f.apply(this, arguments);

    setTimeout(() => {
      isThrottled = false;
      if(lastArgs) {
        wrapper.apply(lastThis, lastArgs);
        lastThis = lastArgs = null;
      }
    }, ms)

  }
}