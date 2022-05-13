{
    let footerAccordion = document.querySelector('[data-footer-accordion]');
    if (footerAccordion) {
        let items = footerAccordion.querySelectorAll('.footer__body-col');
        if (items.length) {
            items.forEach(item => {
                let trigger = item.querySelector('.footer__title-link');
                let content = item.querySelector('.footer__list');

                if (trigger && content) {
                    trigger.addEventListener('click', (e) => {
                        if (document.documentElement.clientWidth < 768) {
                            e.preventDefault();
                            trigger.classList.toggle('active');
                            this.utils.slideToggle(content);

                            items.forEach(i => {
                                if(item === i) return;

                                let trigger = i.querySelector('.footer__title-link');
                                let content = i.querySelector('.footer__list');

                                trigger.classList.remove('active');
                                this.utils.slideUp(content);
                            })

                            // update locomotive scroll
                            let id = setInterval(() => {
                                window.locomotivePageScroll.update();
                            }, 200);
                            setTimeout(() => {
                                clearInterval(id);
                            }, 600)
                        }
                    })
                }
            })
        }
    }
}