{
    let sidePanelAll = Array.from(document.querySelectorAll('[data-side-panel]'));
    if(sidePanelAll.length) {
        sidePanelAll.forEach(sidePanel => {
            let closeButtons = sidePanel.querySelectorAll('[data-side-panel-close]');
            if(closeButtons.length) {
                closeButtons.forEach(closeBtn => {
                    closeBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        sidePanel.classList.remove('side-panel--open');
                        document.body.classList.remove('overflow-hidden');
                        window.locomotivePageScroll.start();
                    })
                })
            }

            if(sidePanel.dataset.sidePanel === "basket" || sidePanel.dataset.sidePanel === "favorites") {
                let head = sidePanel.querySelector('.side-panel__head');
                let scrollWrap = sidePanel.querySelector('.side-panel__scroll-wrap');
                let bottom = sidePanel.querySelector('.side-panel__bottom');

                const setHeight = () => {
                    scrollWrap.style.height = `calc(100vh - ${head.clientHeight + bottom.clientHeight}px)`;
                }
                setHeight();

                window.addEventListener('resize',setHeight);
            }

            sidePanel.addEventListener('click', (e) => {
                if(e.target.closest('.side-panel__body')) return;

                e.preventDefault();
                sidePanel.classList.remove('side-panel--open');
                document.body.classList.remove('overflow-hidden');
                window.locomotivePageScroll.start();
            })
    })

        let openButtons = document.querySelectorAll('[data-side-panel-open]');
        if(openButtons.length) {
            openButtons.forEach(openButton => {
                let [sidePanel] = sidePanelAll.filter(sidePanel => sidePanel.dataset.sidePanel === openButton.dataset.sidePanelOpen);
                openButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    sidePanel.classList.add('side-panel--open');
                    document.body.classList.add('overflow-hidden');
                    window.locomotivePageScroll.stop();
                })
            })
        }
    }

    window.sidePanel = {
        open(id) {
            let sidePanel = document.querySelector(`[data-side-panel="${id}"]`);
            if(sidePanel) {
                sidePanel.classList.add('side-panel--open');
                document.body.classList.add('overflow-hidden');
                window.locomotivePageScroll.stop();
            }
        },
        close (id) {
            let sidePanel = document.querySelector(`[data-side-panel="${id}"]`);
            if(sidePanel) {
                sidePanel.classList.remove('side-panel--open');
                document.body.classList.remove('overflow-hidden');
                window.locomotivePageScroll.start();
            }
        }
    }
}
