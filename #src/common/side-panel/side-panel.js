{
    let sidePanelAll = Array.from(document.querySelectorAll('[data-side-panel]'));
    if(sidePanelAll.length) {
        sidePanelAll.forEach(sidePanel => {
            let closeBtn = sidePanel.querySelector('[data-side-panel-close]');
            
            closeBtn.addEventListener('click', () => {
                sidePanel.classList.remove('side-panel--open');
                document.body.classList.remove('overflow-hidden');
            })
    })

        let openButtons = document.querySelectorAll('[data-side-panel-open]');
        if(openButtons.length) {
            openButtons.forEach(openButton => {
                let [sidePanel] = sidePanelAll.filter(sidePanel => sidePanel.dataset.sidePanel === openButton.dataset.sidePanelOpen);
                openButton.addEventListener('click', () => {
                    sidePanel.classList.add('side-panel--open');
                    document.body.classList.add('overflow-hidden');
                })
            })
        }
    }
}