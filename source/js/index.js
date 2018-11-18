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
    },
  });

// swiper slider last
var swiper = new Swiper('.s2', {
    slidesPerView: 4.9,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

