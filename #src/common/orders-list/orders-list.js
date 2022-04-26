{
    let orderList = document.querySelector('[data-order-list]');
    if (orderList) {
        let items = orderList.querySelectorAll('.orders-list__item');
        if (items.length) {
            items.forEach(item => {
                let btn = item.querySelector('.orders-list__icon');
                let collapsedRow = item.querySelector('.orders-list__detail-info-row');

                if (btn && collapsedRow) {
                    btn.addEventListener('click', () => {
                        btn.classList.toggle('active');
                        this.utils.slideToggle(collapsedRow);

                        // update locomotive scroll
                        let id = setInterval(() => {
                            window.locomotivePageScroll.update();
                        }, 200);
                        setTimeout(() => {
                            clearInterval(id);
                        }, 600)
                    })
                }
            })
        }
    }
}