let header = document.querySelector('[data-header]');
let burger = document.querySelector('[data-action="menu-mobile-open"]');
let closeBtn = document.querySelector('[data-action="menu-mobile-close"]')
let mobileMenu = document.querySelector('[data-menu-mobile]');
let deskMenuItemHasSubMenu = document.querySelector('[data-menu-item-has-sab-menu]');
let mainSearch = document.querySelector('[data-main-search]');
let btnShowMainSearch = document.querySelector('[data-action="show-main-search"]');
let btnHideMainSearch = document.querySelector('[data-action="hide-main-search"]');

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

if(mainSearch) {

    btnShowMainSearch.addEventListener('click', (e) => {
        e.preventDefault();
        mainSearch.classList.add('main-search--show');
        document.body.classList.add('cover');
        document.body.classList.add('overflow-hidden');
    })

    btnHideMainSearch.addEventListener('click', (e) => {
        e.preventDefault();
        mainSearch.classList.remove('main-search--show');
        document.body.classList.remove('cover');
        document.body.classList.remove('overflow-hidden');
    })
}

if(deskMenuItemHasSubMenu) {

    deskMenuItemHasSubMenu.addEventListener('mouseenter', () => {
        document.body.classList.add('cover');
    })
    deskMenuItemHasSubMenu.addEventListener('mouseleave', () => {
        document.body.classList.remove('cover');
    })
}

if (mobileMenu) {
    let slider = document.querySelector('[data-mobile-menu-slider]');
    let triggerItem = document.querySelector('[data-action="show-next-list"] a');
    let swiperSlider;

    if (slider) {
        swiperSlider = new Swiper(slider, {
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 800,
            allowTouchMove: false,
            autoHeight: true,

            on: {
                slideChange: () => {
                    swiperSlider.allowTouchMove = false;
                }
            }
        });
    }

    if (triggerItem) {
        triggerItem.addEventListener('click', (e) => {
            e.preventDefault();
            swiperSlider.slideNext();
            swiperSlider.allowTouchMove = true;
        })
    }
}

