const toggleIcon = document.getElementsByClassName('navigation-icon')[0];
const callbackLink = document.getElementsByClassName('header__callback')[0];
const menu = document.getElementsByClassName('preview__adaptive-menu')[0];
const previewOrderBtn = document.getElementsByClassName('preview__order')[0];
const rangeInput = document.getElementsByClassName('range__input')[0];
const rangeResult = document.getElementsByClassName('range__result')[0];
const questions = document.querySelectorAll('.question__heading');
const popup = document.getElementsByClassName('popup')[0];
const popupCloseBtn = document.getElementsByClassName('popup__close')[0];
const calcLink = document.getElementsByClassName('preview__calc')[0];
const calcLink2 = document.getElementsByClassName('footer__link')[0];
const getEmployee = document.getElementsByClassName('preparation__btn')[0];
const getEmployee2 = document.getElementsByClassName('preparation__btn')[1];
const sectionDiscussion = document.getElementsByClassName('discussion')[0]
const sectionCalculator = document.getElementsByClassName('calculator')[0];

toggleIcon.addEventListener('click', function (e) {
    menu.classList.toggle('preview__adaptive-menu_open');
    toggleIcon.classList.toggle('navigation-icon_open');
});

callbackLink.addEventListener('click', function () {
    sectionDiscussion.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

calcLink.addEventListener('click', function () {
    sectionCalculator.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

calcLink2.addEventListener('click', function () {
    sectionCalculator.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

previewOrderBtn.addEventListener('click', function () {
    popup.classList.toggle('popup_open');
})

getEmployee.addEventListener('click', function () {
    popup.classList.toggle('popup_open');
})

getEmployee2.addEventListener('click', function () {
    popup.classList.toggle('popup_open');
})

popup.addEventListener('click', function (event) {
    if (event.currentTarget === event.target) {
        popup.classList.toggle('popup_open');
    }
})

popupCloseBtn.addEventListener('click', function () {
    popup.classList.toggle('popup_open');
})

rangeInput.addEventListener('change', function () {
    rangeResult.innerHTML = this.value;
})

questions.forEach((question, item) => question.addEventListener('click', function () {
    console.log('click question ', item);
    question.children[2].classList.toggle('question__arrow_active');
    if (question.parentElement.children[1].style.maxHeight) {
        question.parentElement.children[1].style.maxHeight = null;
    } else {
        question.parentElement.children[1].style.maxHeight = question.parentElement.children[1].scrollHeight + "px";
    }
}))

