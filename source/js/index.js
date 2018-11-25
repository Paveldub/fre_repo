let accoItem = document.querySelectorAll('.acco__item');
let accoTrigger = document.querySelectorAll('.acco__trigger');

for (let i = 0; i < accoItem.length; i++) {
    for (let i = 0; i < accoItem.length; i++) {
        accoItem[i].classList.remove('acco__item--active');
    }
}

accoTrigger.forEach(function(item) {
    item.onclick = function(e) {
        e.preventDefault();

        for (let i = 0; i < accoItem.length; i++) {
            for (let i = 0; i < accoItem.length; i++) {
                accoItem[i].classList.remove('acco__item--active');
            }
        }
    
        this.parentNode.classList.toggle('acco__item--active');
    }
});

// swiper slider main, first screen
var swiper = new Swiper('.s1', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});


// swiper slider last
var swiper = new Swiper('.s2', {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        414: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30 
        }
      }
});

const burger = document.querySelector('.burger-menu');
const animSideBar = document.querySelector('.anim-side-bar');
const hero = document.querySelector('.hero');
const closeElem = document.querySelector('.close-elem');

burger.addEventListener('click', () => {
    animSideBar.classList.toggle('anim-side-bar--active');
    hero.classList.toggle('hero--active');
});

closeElem.addEventListener('click', () => {
    animSideBar.classList.remove('anim-side-bar--active');
    hero.classList.remove('hero--active');
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        animSideBar.classList.remove('anim-side-bar--active');
        hero.classList.remove('hero--active');
    }
});


