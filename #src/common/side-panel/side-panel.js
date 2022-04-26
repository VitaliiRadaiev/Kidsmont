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
}
