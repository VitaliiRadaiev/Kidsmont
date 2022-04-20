{
    let carousels = document.querySelectorAll('[data-carousel]');
    if(carousels.length) {
        carousels.forEach(carousel => {
            let options = {
                speed: 800,
                navigation: {
                    nextEl: carousel.querySelector('[data-action="btn-next"]'),
                    prevEl: carousel.querySelector('[data-action="btn-prev"]'),
                },
                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                        autoHeight: true,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 25,
                    },
                },
            }
            if(carousel.dataset.carousel === 'fixed-width') {
                options = {
                    ...options,
                    breakpoints: {
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                            autoHeight: true,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        992: {
                            slidesPerView: 'auto',
                            spaceBetween: 25,
                        },
                    },
                }
            }

            if(carousel.dataset.carousel === 'posts') {
                options = {
                    ...options,
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                            autoHeight: true,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 25,
                        },
                    },
                }
            }
            let carouselSwiper = new Swiper(carousel.querySelector('.swiper'), options);
        })
    }
}