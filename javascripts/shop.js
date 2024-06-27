document.addEventListener("DOMContentLoaded", function() {
    // Получаем доступ к кнопке
    const button_cart = document.getElementsByClassName("to_cart");

    for(let i = 0; i < button_cart.length; i++){
        // Добавляем обработчик события клика
        button_cart[i].addEventListener("click", function() {
        // Изменяем текст кнопки
        button_cart[i].innerText = "В корзине!";
    });
    }

    paymentString = "Итого:"
    prices = {0 : "5999", 1 : "999", 2 : "1999", 3 : "599"};


    
    // КНОПКА КУПИТЬ -- ВЫЛЕЗАЕТ ФОРМА ДЛЯ ЗАПОЛНЕНИЯ
        const buy_modal = document.getElementById("buy_modal");
        const openModalBtn = document.getElementsByClassName("buy");
        const closeModalBtn = document.querySelector(".close");
        const paymentText = document.getElementById("sum");


        for(let i = 0; i < openModalBtn.length; i++){
            // Открыть модальное окно при клике на кнопку
            openModalBtn[i].addEventListener("click", function() {
                buy_modal.style.display = "block";
                paymentText.innerHTML = paymentString + "&nbsp".repeat(23 - prices[i].length) + prices[i] + "₽";
            });
        }
    
        // Закрыть модальное окно при клике на крестик
        closeModalBtn.addEventListener("click", function() {
            buy_modal.style.display = "none";
        });
    
        // Закрыть модальное окно при клике вне его области
        window.addEventListener("click", function(event) {
        if (event.target == buy_modal) {
            buy_modal.style.display = "none";
        }
        });
    
        // Отправка формы
        const form = document.getElementById("buy_myForm");
        form.addEventListener("submit", function(event) {
        event.preventDefault(); // Предотвращаем отправку формы
    
        // Здесь можно добавить код для отправки данных формы на сервер
        // alert("Форма отправлена!");
        buy_modal.style.display = "none"; // Закрываем модальное окно после отправки
        form.reset(); // Сбрасываем содержимое формы
        });
        

});

