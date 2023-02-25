// Есть массив сообщений такой же, как и в предыдущем задании.

let messages = [
	{ text: "Hello", from: "John" },
	{ text: "How goes?", from: "John" },
	{ text: "See you soon", from: "Alice" },
];
// Теперь вопрос стоит так: какую структуру данных вы бы предложили
// использовать для хранения информации о том, когда сообщение было прочитано?

// Ответ: можно использовать WeakMap

const readTimeMap = new WeakMap();

// сообщение прочитано
readTimeMap.set(messages[0], new Date());
