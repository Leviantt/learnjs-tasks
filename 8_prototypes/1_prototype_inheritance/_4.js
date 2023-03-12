// У нас есть два хомяка: шустрый (speedy) и ленивый (lazy);
// оба наследуют от общего объекта hamster.
// Когда мы кормим одного хомяка, второй тоже наедается.
// Почему? Как это исправить?

let hamster = {
	stomach: [],

	eat(food) {
		this.stomach.push(food);
	},
};

let speedy = {
	__proto__: hamster,
	stomach: [],
};

let lazy = {
	__proto__: hamster,
	stomach: [],
};

// Этот хомяк нашёл еду
speedy.eat('apple');
console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log(lazy.stomach); // apple

// Т.к. оба хомяка не имеют собственного свойства stomach, они берут его из прототипа hamster,
// в него и добавляется значение. То есть хомяки делят общее состояние.
// Чтобы это предотвратить, следует добавить свойство в каждый объект
