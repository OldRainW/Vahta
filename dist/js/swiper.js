const swiper = new Swiper('.swiper-qualities', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 300,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        deplay: 7000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },
})

const swiperMobile = new Swiper('.swiper-mobile', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
    },
    observer: true,
    observeParents: true,
    observeSlideChidren: true,
    autoplay: {
        deplay: 7000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },
})