function sayHi() {
  console.log( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

console.log( bound.test ); // что выведет? почему?

// Ответ: undefined, bind возвращает новый объект, поэтому старые свойства не сохраняются