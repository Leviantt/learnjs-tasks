// У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
console.log(topSalary(salaries));
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.

function topSalary(salaries) {
    let topSalary = 0;
    let topSalaryOwner;

    for(let [name, salary] of Object.entries(salaries)) {
        if(salary >= topSalary) {
            topSalary = salary;
            topSalaryOwner = name;
        }
    }
    return topSalaryOwner;
}