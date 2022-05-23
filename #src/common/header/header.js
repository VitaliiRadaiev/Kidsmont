let header = document.querySelector('[data-header]');
let closeBtn = document.querySelector('[data-side-panel="menu-mobile"] [data-side-panel-close]')
let mobileMenu = document.querySelector('[data-side-panel="menu-mobile"]');
let deskMenuItemHasSubMenu = document.querySelector('[data-menu-item-has-sab-menu]');
let mainSearch = document.querySelector('[data-main-search]');
let btnShowMainSearchButtons = document.querySelectorAll('[data-action="show-main-search"]');
let btnHideMainSearch = document.querySelector('[data-action="hide-main-search"]');

if (header && mobileMenu) {

    let slider = document.querySelector('[data-mobile-menu-slider]');
    let triggerItem = document.querySelector('[data-action="show-next-list"]');
    let btnBack = document.querySelector('[data-action="hide-next-list"]');
    let sidePanelHead = mobileMenu.querySelector('.side-panel__head');
    let menuItems = header.querySelectorAll('.menu__list-item');
    let swiperSlider;

    const toggleShowBtnBack = (state) => {
        if(state === 'hide') {
            btnBack.classList.remove('show');
            sidePanelHead.classList.remove('hide');
        } else if (state == 'show') {
            btnBack.classList.add('show');
            sidePanelHead.classList.add('hide');
        }
    }

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
                    toggleShowBtnBack('hide');
                }
            }
        });
    }

    if (triggerItem) {
        triggerItem.addEventListener('click', (e) => {
            e.preventDefault();
            swiperSlider.slideNext();
            swiperSlider.allowTouchMove = true;
            toggleShowBtnBack('show');
        })
    }

    menuItems.forEach(menuItem => {
        let links = menuItem.querySelectorAll('.sub-menu__link');
        let img = menuItem.querySelector('.menu__img img');

        if(img && links.length) {
            links.forEach(link => {
                link.addEventListener('mouseenter', () => {
                    img.src = link.dataset.imgUrl;
                })
            })
        }
    })

    closeBtn.addEventListener('click', () => {
        swiperSlider.slideTo(0);
        toggleShowBtnBack('hide');
    })

    btnBack.addEventListener('click', () => {
        swiperSlider.slideTo(0);
        toggleShowBtnBack('hide');
    })

    window.addEventListener('scroll', () => {
        header.classList.toggle('header--is-scroll', window.pageYOffset > 50);
    })

    window.addEventListener('load', () => {
        header.classList.add('show')
    });
    
}

if(mainSearch) {
    if(btnShowMainSearchButtons.length) {
        btnShowMainSearchButtons.forEach(btnShowMainSearch => {
            btnShowMainSearch.addEventListener('click', (e) => {
                e.preventDefault();
                mainSearch.classList.add('main-search--show');
                document.body.classList.add('cover');
                document.body.classList.add('overflow-hidden');
            })
        })
    }

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
