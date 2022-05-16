{
    let galleryCarousel = document.querySelector('[data-gallery-carousel]');
    if(galleryCarousel) {
        let sliderData = new Swiper(galleryCarousel.querySelector('.swiper'), {
            speed: 800,
            navigation: {
                nextEl: galleryCarousel.querySelector('[data-action="btn-next"]'),
                prevEl: galleryCarousel.querySelector('[data-action="btn-prev"]'),
            },
            breakpoints: {
                320: {
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                }
            }
        });
    }
}