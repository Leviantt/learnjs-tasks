// Этот цикл – бесконечный. Он никогда не завершится, почему?

// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }

// потому что 0.2 хранится как 0.20000000000000001110..
console.log((0.2).toFixed(20));
// таким образом при суммировании 0.20000000000000001110 нельзя получить ровно 10
