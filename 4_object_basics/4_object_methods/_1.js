// Здесь функция makeUser возвращает объект.
// Каким будет результат при обращении к свойству объекта ref? Почему?

// "use strict";

function makeUser() {
	return {
		name: "John",
		ref: this,
	};
}

let user = makeUser();

console.log(user.ref.name); // Каким будет результат?

// Ответ: в strict mode ошибка, не в strict mode undefined
