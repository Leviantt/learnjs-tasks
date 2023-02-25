// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
// Например, если сейчас 23:00, то:

console.log(getSecondsToTomorrow()) // 3600

function getSecondsToTomorrow() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0);
    return Math.round((tomorrow.getTime() - Date.now()) / 1000)
}