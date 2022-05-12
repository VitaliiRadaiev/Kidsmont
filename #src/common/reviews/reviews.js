{
    let reviewsSlider = document.querySelector('[data-slider="reviews"]');
    if (reviewsSlider) {

        let swiperReviewsSlider = new Swiper(reviewsSlider.querySelector('.swiper'), {
            speed: 1000,
            navigation: {
                nextEl: reviewsSlider.querySelector('[data-action="btn-next"]'),
                prevEl: reviewsSlider.querySelector('[data-action="btn-prev"]'),
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    autoHeight: true,
                },
                768: {
                    slidesPerView: 'auto',
                    spaceBetween: 60,
                    autoHeight: false,
                },
            }
        });
    }
}