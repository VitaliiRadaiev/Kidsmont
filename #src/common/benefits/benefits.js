{
    let benefitsList = document.querySelector('[data-slider="benefits-list"]');
    if(benefitsList) {
        const slider = benefitsList;
        if(slider) {
            let mySwiper;
    
            function mobileSlider() {
                if(document.documentElement.clientWidth <= 767 && slider.dataset.mobile == 'false') {
                    mySwiper = new Swiper(slider, {
                        slidesPerView: 1,
                        speed: 800,
                        pagination: {
                            el: slider.querySelector('.swiper-pagination'),
                            clickable: true,  
                        },
                    });
    
                    slider.dataset.mobile = 'true';
    
                    //mySwiper.slideNext(0);
                }
    
                if(document.documentElement.clientWidth > 767) {
                    slider.dataset.mobile = 'false';
    
                    if(slider.classList.contains('swiper-initialized')) {
                        mySwiper.destroy();
                    }
                }
            }
    
            mobileSlider();
    
            window.addEventListener('resize', () => {
                mobileSlider();
            })
        }
    }
}