{
    let articleSliders = document.querySelectorAll('[data-article-slider]');
    if(articleSliders.length) {
        articleSliders.forEach(articleSlider => {
            let sliderData = new Swiper(articleSlider.querySelector('.swiper'), {
                speed: 800,
                navigation: {
                    nextEl: articleSlider.querySelector('[data-action="btn-next"]'),
                    prevEl: articleSlider.querySelector('[data-action="btn-prev"]'),
                },
                breakpoints: {
                    320: {
                        slidesPerView: 'auto',
                        spaceBetween: 25,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 25,
                    }
                }
            });
        })
    }
}