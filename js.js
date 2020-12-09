/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    if (!slides || slides.length === 0) return 0;
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

let questions = document.querySelectorAll(".question");
questions.forEach(questionBlock => {
    questionBlock.addEventListener("click", e => {
        let answer = questionBlock.nextElementSibling;
        if (answer.style.height == "0px" || !answer.style.height) answer.style.height = answer.getAttribute("data-height")
        else answer.style.height = "0px"

    })
})

window.onload = e => {
    let items = document.querySelectorAll('.slider .item');
    items.forEach((el, i) => {
        if (i === 0) return 0;
        el.style.display = 'none';
    })
}





let header = document.querySelector(".header");
let burger = document.querySelector(".burger_menu")
let closeBurger = document.querySelector(".close_burger");
let mainBlock = document.querySelector(".main")

burger.addEventListener("click", openMenu)
closeBurger.addEventListener("click", closeMenu)
    // mainBlock.addEventListener("click", closeMenu)

function showModal() {
    modalWindow.style.display = "block"
}

function openMenu() {
    header.classList.toggle("active_menu")
}

function closeMenu() {
    modalWindow.style.display = "none";

}



function sendModal() {
    let name = nameModal.value
    let tel = telModal.value
    let mail = mailModal.value
    open(`mailto:sporkcatering@mail.com?body=${name}%0D%0A%0D%0A${tel}%0D%0A%0D%0A${mail}`);

}