{
    let mobileBottomPrice = document.querySelector('[data-mobile-bottom-price]');
    let btnBuyNow = document.querySelector('[data-btn-buy-now]');
    let footer = document.querySelector('.footer__inner');

    if(mobileBottomPrice && btnBuyNow) {

        const setFooterPadding = () => {
            if(document.documentElement.clientWidth < 768) {
                footer.style.paddingBottom = mobileBottomPrice.clientHeight + 'px';
            } else {
                footer.style.paddingBottom = '0px';
            }
        }

        setFooterPadding();

        window.addEventListener('resize', setFooterPadding);

        window.addEventListener('scroll', (e) => {
            if(btnBuyNow.getBoundingClientRect().top > 0 && btnBuyNow.getBoundingClientRect().top < document.documentElement.clientHeight) {
                mobileBottomPrice.classList.add('hide')
            } else {
                mobileBottomPrice.classList.remove('hide')
            }
        })
    }
}