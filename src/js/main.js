const toggleIcon = document.getElementsByClassName('header__nav-icon')[0];
const menu = document.getElementsByClassName('preview__adaptive-menu')[0];
const rangeInput = document.getElementsByClassName('range__input')[0];
const rangeResult = document.getElementsByClassName('range__result')[0];
// const sliderButtons = document.getElementsByClassName('slider-nav')[0];

toggleIcon.addEventListener('click', function (e) {
    menu.classList.toggle('preview__adaptive-menu_open');
});

rangeInput.addEventListener('change', function(){
    rangeResult.innerHTML = this.value;
})

// console.log(sliderButtons)
// sliderButtons.classList.add("custom-nav-btm")
