{
    let blogPreview = document.querySelector('[data-slider="blog-preview"]');
    if(blogPreview) {
        const slider = blogPreview.querySelector('.swiper');
        if(slider) {
            let mySwiper;
    
            function mobileSlider() {
                if(document.documentElement.clientWidth <= 767 && slider.dataset.mobile == 'false') {
                    mySwiper = new Swiper(slider, {
                        slidesPerView: 'auto',
                        speed: 800,
                        spaceBetween: 20,
                        navigation: {
                            nextEl: blogPreview.querySelector('[data-action="btn-next"]'),
                            prevEl: blogPreview.querySelector('[data-action="btn-prev"]'),
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