// Выведите односвязный список из предыдущего задания
// Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.

let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null,
			},
		},
	},
};

printListInReverseWithLoop(list);
printListInReverseWithRecursion(list);

function printListInReverseWithLoop(list) {
	let result = '';
	for (let pointer = list; pointer != null; pointer = pointer.next) {
		result = pointer.value + '\n' + result;
	}
	console.log(result.slice(0, -1));
}

function printListInReverseWithRecursion(list) {
	if (list == null) return;

	printListInReverseWithRecursion(list.next);

	console.log(list.value);
}
