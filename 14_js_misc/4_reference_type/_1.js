// Каким будет результат выполнения этого кода?

let user = {
	name: 'John',
	go: function () {
		console.log(this.name);
	},
}


(user.go)();

// Ответ: Ошибка, на строке 8 должны быть ";"
