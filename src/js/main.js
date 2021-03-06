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
const getEmployee3 = document.getElementsByClassName('footer__link')[1];
const sectionDiscussion = document.getElementsByClassName('discussion')[0]
const sectionCalculator = document.getElementsByClassName('calculator')[0];
const works = document.getElementsByClassName('works')[0];
const comments = document.getElementsByClassName('comments')[0];

const mainLink = document.getElementsByClassName('footer__link')[2];
const preparationLink = document.getElementsByClassName('footer__link')[3];
const servicesLink = document.getElementsByClassName('footer__link')[4];
const aboutLink = document.getElementsByClassName('footer__link')[5];
const contactsLink = document.getElementsByClassName('footer__link')[6];

const navigation = document.getElementsByClassName('navigation')[0].children[0].children;
const mainLink2 = navigation[0];
const servicesLink2 = navigation[1];
const aboutLink2 = navigation[2];
const linkPortfolio = navigation[3];
const contactsLink2 = navigation[4];
const linkComments = navigation[5];

const navigation2 = document.getElementsByClassName('navigation')[1].children[0].children;
const mainLink3 = navigation2[0];
const servicesLink3 = navigation2[1];
const aboutLink3 = navigation2[2];
const linkPortfolio2 = navigation2[3];
const contactsLink3 = navigation2[4];
const linkComments2 = navigation2[5];

const sectionPreview = document.getElementsByClassName('preview')[0];
const sectionPreparation = document.getElementsByClassName('preparation')[0];
const sectionServices = document.getElementsByClassName('services')[0];
const sectionAbout = document.getElementsByClassName('about')[0];


// code js
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

getEmployee3.addEventListener('click', function () {
    sectionDiscussion.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

mainLink.addEventListener('click', function () {
    sectionPreview.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

mainLink2.addEventListener('click', function () {
    sectionPreview.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

mainLink3.addEventListener('click', function () {
    sectionPreview.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

preparationLink.addEventListener('click', function () {
    sectionPreparation.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

servicesLink.addEventListener('click', function () {
    sectionServices.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

servicesLink2.addEventListener('click', function () {
    sectionServices.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

servicesLink3.addEventListener('click', function () {
    sectionServices.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

aboutLink.addEventListener('click', function () {
    sectionAbout.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

aboutLink2.addEventListener('click', function () {
    sectionAbout.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

aboutLink3.addEventListener('click', function () {
    sectionAbout.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

contactsLink.addEventListener('click', function () {
    sectionDiscussion.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

contactsLink2.addEventListener('click', function () {
    sectionDiscussion.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

contactsLink3.addEventListener('click', function () {
    sectionDiscussion.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

linkPortfolio.addEventListener('click', function () {
    works.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

linkPortfolio2.addEventListener('click', function () {
    works.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

linkComments.addEventListener('click', function () {
    comments.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

linkComments2.addEventListener('click', function () {
    comments.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

// ???????????? ????????????????????????
const types = document.querySelectorAll('.types');

types.forEach(item => item.addEventListener('click', function (e) {
    const list = item.children[1];
    if (e.target.classList.contains('types__chips')) {
        Array.prototype.forEach.call(list.children, chips => {
            if (chips.classList.contains('types__chips_active')) {
                chips.classList.remove('types__chips_active');
            }
        })
        e.target.classList.add('types__chips_active');
        item.children[2].value = e.target.id;
    }
}));


