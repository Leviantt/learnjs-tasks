// Создайте функцию makeObservable(target), 
// которая делает объект «наблюдаемым», возвращая прокси.
// Вот как это должно работать:

const observers = Symbol("observers");
function makeObservable(target) {
  /* ваш код */
  target[observers] = [];
  target.observe = function(cb) {
    if(typeof cb === "function") {
      this[observers].push(cb);
    }
  }
  return new Proxy(target, {
    set(target, prop, newValue) {
      for(let observer of target[observers]) {
        observer(prop, newValue);
      }
      return Reflect.set(...arguments);
    }
  })
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  console.log(`SET ${key}=${value}`);
});

user.name = "John"; // выводит: SET name=John