// Напишите функцию checkSpam(str), возвращающую true, 
// если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:

console.log(checkSpam('buy ViAgRA now')) // true
console.log(checkSpam('free xxxxx')) // true
console.log(checkSpam("innocent rabbit")) // false

function checkSpam(str) {
    const lowered = str.toLowerCase();
    return lowered.includes("viagra") || lowered.includes("xxx")
}