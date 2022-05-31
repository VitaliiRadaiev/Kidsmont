{
    let productCards = document.querySelectorAll('.product-card');
    if(productCards.length) {
        productCards.forEach(productCard => {
            let imgWrap = productCard.querySelector('.product-card__img-wrap');
            let bottom = productCard.querySelector('.product-card__bottom');
            let colorPicker = productCard.querySelector('.color-picker');

            if(imgWrap && bottom && colorPicker) {
                const changePosition = () => {
                    if(document.documentElement.clientWidth < 768) {
                        imgWrap.after(colorPicker);
                    } else {
                        bottom.append(colorPicker);
                    }
                }

                changePosition();

                window.addEventListener('resize', changePosition);
            }
        })
    }
}