{
    let reviewsListCardSliders = document.querySelectorAll('[data-reviews-list-card-slider]');
    if(reviewsListCardSliders.length) {
        reviewsListCardSliders.forEach(reviewsListCardSlider => {
            let options = {
                speed: 800,
                navigation: {
                    nextEl: reviewsListCardSlider.querySelector('.reviews-list-card__btn--next'),
                },
                breakpoints: {
                    320: {
                        slidesPerView: 'auto',
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 25,
                    },
                    992: {
                        slidesPerView: 2,
                        spaceBetween: 25,
                    }
                }
            }
            if(reviewsListCardSlider.querySelector('.swiper-wrapper').children.length > 2 || document.documentElement.clientWidth < 768) {
                options = {
                    ...options,
                    loop: true
                }
            }
            let sliderData = new Swiper(reviewsListCardSlider, options);
            
        })
    }
}