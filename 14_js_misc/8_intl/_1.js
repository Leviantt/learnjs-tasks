// Используя Intl.Collator, отсортируйте массив:

let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

// ... ваш код ...

animals.sort((a, b) => a.localeCompare(b));

// or

// const collator = new Intl.Collator();
// animals.sort((a, b) => collator.compare(a, b))

console.log( animals ); // АИСТ,ёж,енот,ехидна,тигр,ЯК
// В этом примере порядок сортировки не должен зависеть от регистра.