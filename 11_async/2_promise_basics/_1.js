// Что выведет код ниже?

let promise = new Promise(function (resolve, reject) {
	resolve(1);

	setTimeout(() => resolve(2), 1000);
});

promise.then(console.log);

// Ответ: выведется только значение 1, т.к. после вызова первого resolve (reject),
// все остальные будут игнорироваться
