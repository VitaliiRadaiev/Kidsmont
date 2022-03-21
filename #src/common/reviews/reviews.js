{
    let reviewsSlider = document.querySelector('[data-slider="reviews"]');
    if (reviewsSlider) {

        let swiperReviewsSlider = new Swiper(reviewsSlider.querySelector('.swiper'), {
            slidesPerView: 'auto',
            speed: 1000,
            navigation: {
                nextEl: reviewsSlider.querySelector('[data-action="btn-next"]'),
                prevEl: reviewsSlider.querySelector('[data-action="btn-prev"]'),
            },
            breakpoints: {
                320: {
                    spaceBetween: 20,
                },
                768: {
                    spaceBetween: 60,
                },
            }
        });
    }
}