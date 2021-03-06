{
    let galleryProductDetail = document.querySelector('[data-gallery-product-detail]');
    if(galleryProductDetail) {
        const slider = galleryProductDetail;
        if(slider) {
            let mySwiper;
    
            function mobileSlider() {
                if(document.documentElement.clientWidth <= 991.98 && slider.dataset.mobile == 'false') {
                    mySwiper = new Swiper(slider, {
                        slidesPerView: 1,
                        speed: 800,
                        spaceBetween: 20,
                        pagination: {
                            el: slider.querySelector('.swiper-pagination'),
                            clickable: true,
                        },
                        on: {
                            activeIndexChange: (e) => {
                                if(e.activeIndex === 0) {
                                    galleryProductDetail.classList.remove('hide-cover-elements')
                                } else {
                                    galleryProductDetail.classList.add('hide-cover-elements')
                                }
                            }
                        }    
                    });
    
                    slider.dataset.mobile = 'true';
    
                    //mySwiper.slideNext(0);
                }
    
                if(document.documentElement.clientWidth > 992) {
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