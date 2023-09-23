document.addEventListener("DOMContentLoaded", function () {

    let burgerIcon = document.getElementById("burger-menu-icon");
    let burgerMenu = document.getElementById("burger-menu");
    let closeIcon = document.getElementById("burger-menu-close");
    let bodyOverlay = document.getElementById("body-overlay");
    let burgerDropdown = document.getElementById("burger-dropdown");
    let listItem = document.querySelectorAll("#burger-list-item");
    let plus = document.querySelectorAll(".plus");
    let minus = document.querySelectorAll(".minus");
    let slider = document.getElementById("slider");
    let sliderItem = slider.querySelectorAll(".slider-item");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let sliderCount = document.querySelector("#count");
    let isOpen = false;

    burgerIcon.addEventListener("click", openBurger);
    closeIcon.addEventListener("click", closeBurger);

    function openBurger() {
        burgerMenu.classList.add("burgerActive");
        bodyOverlay.classList.add("overlayActive");
    }
    function closeBurger() {
        burgerMenu.classList.remove("burgerActive");
        bodyOverlay.classList.remove("overlayActive");
    }

    up.addEventListener('click', nextSlider);
    down.addEventListener('click', prevSlider);

    var index = 0;
    sliderCount.textContent = index + 1;
    function nextSlider() {
        sliderItem[index].classList.remove('sliderActive')
        let sliderItemInner = sliderItem[index].querySelectorAll("#slider-sale");
        sliderItemInner.forEach(x => {
            x.classList.remove('sliderItemActive');
        })
        let sliderImage = sliderItem[index].querySelector("#slider-image");
        sliderImage.classList.remove("sliderPicActive");
        index++;
        sliderCount.textContent = index + 1;
        if (index > sliderItem.length - 1) {
            index = 0;
            sliderCount.textContent = index + 1;
            sliderItem[index].classList.add('sliderActive')
            let sliderItemInnerNew = sliderItem[index].querySelectorAll("#slider-sale");
            let sliderImage = sliderItem[index].querySelector("#slider-image");
            sliderImage.classList.add("sliderPicActive");
            sliderItemInnerNew.forEach(x => {
                x.classList.add('sliderItemActive');
            })
        }
        else {
            sliderItem[index].classList.add('sliderActive');
            let sliderItemInnerNew = sliderItem[index].querySelectorAll("#slider-sale");
            let sliderImage = sliderItem[index].querySelector("#slider-image");
            sliderImage.classList.add("sliderPicActive");
            sliderItemInnerNew.forEach(x => {
                x.classList.add('sliderItemActive');
            })
        }
    }
    function prevSlider() {
        sliderItem[index].classList.remove('sliderActive');
        let sliderItemInner = sliderItem[index].querySelectorAll("#slider-sale");
        sliderItemInner.forEach(x => {
            x.classList.remove('sliderItemActive');
        });
        let sliderImage = sliderItem[index].querySelector("#slider-image");
        sliderImage.classList.remove("sliderPicActive");
        index--;
        if (index < 0) {
            index = sliderItem.length - 1;
        }
        sliderCount.textContent = index + 1;
        sliderItem[index].classList.add('sliderActive');
        let sliderItemInnerNew = sliderItem[index].querySelectorAll("#slider-sale");
        sliderImage = sliderItem[index].querySelector("#slider-image");
        sliderImage.classList.add("sliderPicActive");
        sliderItemInnerNew.forEach(x => {
            x.classList.add('sliderItemActive');
        });
    }
});