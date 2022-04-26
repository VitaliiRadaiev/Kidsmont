{
    let tabsNavAll = document.querySelectorAll('[data-tabs-nav]');
    if (tabsNavAll.length) {
        tabsNavAll.forEach(tabsNav => {
            const slider = tabsNav;
            if (slider) {
                let mySwiper;

                function mobileSlider() {
                    if (document.documentElement.clientWidth <= 767 && slider.dataset.mobile == 'false') {
                        mySwiper = new Swiper(slider, {
                            slidesPerView: 'auto',
                            slideToClickedSlide: true,
                            speed: 800,
                            freeMode: true,
                            spaceBetween: 25,
                        });

                        slider.dataset.mobile = 'true';

                        //mySwiper.slideNext(0);
                    }

                    if (document.documentElement.clientWidth > 767) {
                        slider.dataset.mobile = 'false';

                        if (slider.classList.contains('swiper-initialized')) {
                            mySwiper.destroy();
                        }
                    }
                }

                mobileSlider();

                window.addEventListener('resize', () => {
                    mobileSlider();
                })
            }
        })
    }
}