{
    let cart = document.querySelector('[data-cart]');
    if (cart) {
        let couponCheckbox = cart.querySelector('.payment-cart__coupon-checkbox input');
        let inputWrap = cart.querySelector('.payment-cart__coupon-input');
        let mobHead = cart.querySelector('.payment-cart__mob-head');
        let cartBody = cart.querySelector('.payment-cart__body');
        let btnSubmit = cart.querySelector('.payment-cart__submit');
        let setPostionF = null;
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
                    if(setPostionF) setPostionF();
                    window.locomotivePageScroll.update();
                }, 20);
                setTimeout(() => {
                    clearInterval(id);
                }, 300)
            })
        }

        if (btnSubmit) {
            let mainWrap = btnSubmit.closest('main._page');
            let parent = btnSubmit.parentElement;
            let footer = document.querySelector('.footer__inner');

            if (footer) {
                const setPosition = () => {
                    if (document.documentElement.clientWidth < 992) {
                        let footerTop = footer.getBoundingClientRect().top - document.documentElement.clientHeight;
                        if (footerTop > 0) {
                            btnSubmit.classList.add('payment-cart__submit--fixed');
                            mainWrap.style.paddingBottom = btnSubmit.clientHeight + 'px';
                        } else {
                            btnSubmit.classList.remove('payment-cart__submit--fixed');
                            mainWrap.style.paddingBottom = '0px';
                        }
                    }
                }

                setPosition();
                setPostionF = setPosition

                window.addEventListener('scroll', setPosition);
            }

            if (mainWrap) {
                mainWrap.classList.add('overflow-visible')
            }

            const changePosition = () => {
                if (document.documentElement.clientWidth < 992) {
                    mainWrap.append(btnSubmit);
                } else {
                    parent.append(btnSubmit);
                }
            }

            changePosition();

            window.addEventListener('resize', changePosition);
        }
    }
}