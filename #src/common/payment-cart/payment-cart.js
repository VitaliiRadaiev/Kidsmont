{
    let cart = document.querySelector('[data-cart]');
    if (cart) {
        let couponCheckbox = cart.querySelector('.payment-cart__coupon-checkbox input');
        let inputWrap = cart.querySelector('.payment-cart__coupon-input');
        let mobHead = cart.querySelector('.payment-cart__mob-head');
        let cartBody = cart.querySelector('.payment-cart__body');

        if (couponCheckbox && inputWrap) {
            couponCheckbox.addEventListener('change', (e) => {
                if (couponCheckbox.checked) {
                    this.utils.slideDown(inputWrap, 300);
                } else {
                    this.utils.slideUp(inputWrap, 300);
                }

                // update locomotive scroll
                let id = setInterval(() => {
                    window.locomotivePageScroll.update();
                }, 20);
                setTimeout(() => {
                    clearInterval(id);
                }, 200)
            })
        }

        if (mobHead && cartBody) {
            mobHead.addEventListener('click', () => {
                mobHead.classList.toggle('active');
                this.utils.slideToggle(cartBody, 300);

                // update locomotive scroll
                let id = setInterval(() => {
                    window.locomotivePageScroll.update();
                }, 20);
                setTimeout(() => {
                    clearInterval(id);
                }, 200)
            })
        }
    }
}