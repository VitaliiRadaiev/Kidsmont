{
    let seeMoreBan = document.querySelector('[data-slider="see-more-ban"]');
    if(seeMoreBan) {
        let swiperSeeMoreBan = new Swiper(seeMoreBan, {
            autoplay: {
                delay: 1,
                disableOnInteraction: false,
            },
            slidesPerView: 'auto',
            spaceBetween: 0,
            speed: 7000,
            loop: true,
            freeMode: true
        });
    }
}