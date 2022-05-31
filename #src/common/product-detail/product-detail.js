{
    let mobileBottomPrice = document.querySelector('[data-mobile-bottom-price]');
    let btnBuyNow = document.querySelector('[data-btn-buy-now]');

    if(mobileBottomPrice && btnBuyNow) {

        window.addEventListener('scroll', (e) => {
            if(btnBuyNow.getBoundingClientRect().top > 0 && btnBuyNow.getBoundingClientRect().top < document.documentElement.clientHeight) {
                mobileBottomPrice.classList.add('hide')
            } else {
                mobileBottomPrice.classList.remove('hide')
            }
        })
    }
}