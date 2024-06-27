
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.querySelector(".close");

    // Открыть модальное окно при клике на кнопку
    openModalBtn.addEventListener("click", function() {
    modal.style.display = "block";
    });

    // Закрыть модальное окно при клике на крестик
    closeModalBtn.addEventListener("click", function() {
    modal.style.display = "none";
    });

    // Закрыть модальное окно при клике вне его области
    window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    });

    // Отправка формы
    const form = document.getElementById("myForm");
    form.addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Здесь можно добавить код для отправки данных формы на сервер
    // alert("Форма отправлена!");
    modal.style.display = "none"; // Закрываем модальное окно после отправки
    form.reset(); // Сбрасываем содержимое формы
    });


});
