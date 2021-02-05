let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const container = document.querySelector('.slider__container');
let windowCalcWidth = window.getComputedStyle(container)
const track = document.querySelector('.slider__track');
const btnPrev = document.querySelector('.btn__prev');
const btnNext = document.querySelector('.btn__next');
const items = document.querySelectorAll('.slider__item');
const itemsCount = items.length;
const itemWidth = windowCalcWidth.width.replace(/\D/g,'');
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`
});

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`
};

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();

const catalogItem = [...document.querySelectorAll('.catalog__item')];
const submenu = [...document.querySelectorAll('.submenu')];
const navPath = document.querySelector('.catalog__nav-link');
const submenuLink = [...document.querySelectorAll('.submenu__link')];
const submenuItem = [...document.querySelectorAll('.submenu__item')];
navPath.textContent = 'Главная / Каталог /'

catalogItem.forEach(item => {
    item.onclick = () => {

        for (let i of submenu) {
            if (i.classList.contains('submenu_active')) {
                i.classList.remove('submenu_active');
                i.style.borderTop = 'none';
            } else if (catalogItem.indexOf(item) == submenu.indexOf(i)) {
                i.classList.add('submenu_active');
                i.style.borderTop = '1px solid grey';
            }

        }
    }
});

submenuItem.forEach(el => {
    el.onclick = () => {
        for (let i of submenuLink) {
            if (submenuItem.indexOf(el) == submenuLink.indexOf(i)) {
                navPath.textContent = `Главная / Каталог / ${i.textContent}`
            }
        }
    }

})

