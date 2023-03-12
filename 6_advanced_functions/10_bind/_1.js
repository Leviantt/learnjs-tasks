// Что выведет функция?

'use strict';
function f() {
	console.log(this); // ?
}

let user = {
	g: f.bind(null),
};

user.g();

// Ответ: null при использовании 'use strict' будет null, без использования глобальный объект (window/global)
