{
    let seeMoreBanAll = document.querySelectorAll('[data-slider="see-more-ban"]');
    if(seeMoreBanAll.length) {
        seeMoreBanAll.forEach(seeMoreBan => {
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
        })
    }
}