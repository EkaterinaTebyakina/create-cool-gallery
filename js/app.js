const sliderMain = new Swiper('.slider_main', {
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 60
        }
    }
});

const sliderBg = new Swiper('.slider_bg', {
    centeredSlides: true,
    parallax: true,
    allowTouchMove: false,
    slidesPerView: 3.5,
    spaceBetween: 60
});

sliderMain.controller.control = sliderBg;

let desc = document.querySelector('.description')
sliderMain.on('slideChange', e => {
    sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})

document.addEventListener('keydown', event => {

    let sliderItem = document.querySelector('.opened');

    if (event.key === 'Escape' && sliderItem) {
        console.log('check')
        sliderItem.classList.remove('opened');
    }
  }); 


const slider = document.querySelector('.slider_main');

document.addEventListener( 'click', (e) => {

    const openedItem = document.querySelector('.opened');

    if (openedItem) {

        openedItem.classList.remove('opened'); 

    } else {

        const item = e.target.closest('.slider__item');

        if (item && e.composedPath().includes(slider)) {
                
            item.classList.add('opened');
        }
    }

	
})