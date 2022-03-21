let header = document.querySelector('[data-header]');
let burger = document.querySelector('[data-action="menu-mobile-open"]');
let closeBtn = document.querySelector('[data-action="menu-mobile-close"]')
let mobileMenu = document.querySelector('[data-menu-mobile]');

if (header) {

    burger.addEventListener('click', () => {
        header.classList.add('header--menu-is-open');
        mobileMenu.classList.add('menu-mobile--open');
        document.body.classList.add('overflow-hidden');
    })
    closeBtn.addEventListener('click', () => {
        header.classList.remove('header--menu-is-open');
        mobileMenu.classList.remove('menu-mobile--open');
        document.body.classList.remove('overflow-hidden');
    })

    window.addEventListener('scroll', () => {
        header.classList.toggle('header--is-scroll', window.pageYOffset > 50);
    })

    window.addEventListener('load', () => {
        header.classList.add('show')
    });

}

if(mobileMenu) {
    let mobileMenuNavSubItems = mobileMenu.querySelectorAll('[data-toggle-sab]');

    mobileMenuNavSubItems.forEach(item => {
        let link = item.querySelector('.menu-mobile__link');
        let subMenu = item.querySelector('.sub-menu');

        if (link && subMenu) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                item.classList.toggle('menu-mobile__list-item--sub-menu-is-open');
                link.classList.toggle('menu-mobile__link--sub-menu-is-open');
                this.utils.slideToggle(subMenu);

                mobileMenuNavSubItems.forEach(i => {
                    if (i === item) return;

                    let link = i.querySelector('.menu-mobile__link');
                    let subMenu = i.querySelector('.sub-menu');

                    i.classList.remove('menu-mobile__list-item--sub-menu-is-open');
                    link.classList.remove('menu-mobile__link--sub-menu-is-open');
                    this.utils.slideUp(subMenu);
                })
            })
        }
    })
}

