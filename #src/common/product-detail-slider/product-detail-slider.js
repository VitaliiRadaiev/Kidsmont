let detailSlider = document.querySelector('[data-slider="product-detail-slider"]');
if(detailSlider) {
    let thumbSlider =  new Swiper(detailSlider.querySelector('.product-detail-slider__thumb'), {
        observer: true,
        observeParents: true,
        slidesPerView: 'auto',
        spaceBetween: 12,
        speed: 600,
    });

    let mainSliderlet = new Swiper(detailSlider.querySelector('.product-detail-slider__main'), {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 600,
        watchOverflow: true,
        pagination: {
        	el: detailSlider.querySelector('.swiper-pagination'),
        	clickable: true,
        },
        navigation: {
            nextEl: detailSlider.querySelector('.product-detail-slider__btn.btn-next'),
            prevEl: detailSlider.querySelector('.product-detail-slider__btn.btn-prev'),
        },
        watchSlidesVisibility: true,
        thumbs: {
            swiper: thumbSlider,
        },
    });
}