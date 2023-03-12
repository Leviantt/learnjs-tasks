// Обычно при чтении несуществующего свойства из объекта возвращается undefined.
// Создайте прокси, который генерирует ошибку при попытке прочитать несуществующее свойство.
// Это может помочь обнаружить программные ошибки пораньше.
// Напишите функцию wrap(target), которая берёт объект target и возвращает прокси, 
// добавляющий в него этот аспект функциональности.
// Вот как это должно работать:

let user = {
  name: "John"
};

function wrap(target) {
  return new Proxy(target, {
      /* ваш код */
      get(target, prop) {
        if(!(prop in target)) {
          throw new Error("такого свойства не существует");
        }
        
        return Reflect.get(...arguments);
      }
  });
}

user = wrap(user);

console.log(user.name); // John
console.log(user.age); // Ошибка: такого свойства не существует