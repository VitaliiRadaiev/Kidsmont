{
    let productCarousel = document.querySelector('[data-slider="product-carousel"]');
    if(productCarousel) {
        let swiperProductCarousel = new Swiper(productCarousel.querySelector('.swiper'), {
            speed: 1000,
            loop: true,
            navigation: {
                nextEl: productCarousel.querySelector('[data-action="btn-next"]'),
                prevEl: productCarousel.querySelector('[data-action="btn-prev"]'),
            },
            breakpoints: {
                320: {
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                    centeredSlides: false,
                },
                768: {
                    slidesPerView: 'auto',
                    spaceBetween: 50,
                    centeredSlides: true,
                },
                992: {
                    slidesPerView: 'auto',
                    spaceBetween: 102,
                    centeredSlides: true,
                }
            },
        });
        
    }
}