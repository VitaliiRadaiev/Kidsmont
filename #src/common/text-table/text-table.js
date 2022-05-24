{
    let textTableAll = document.querySelectorAll('[data-text-table]');
    if (textTableAll.length) {
        textTableAll.forEach(textTable => {
            let collapseBox = textTable.querySelector('.text-tabel__collapse');
            let btn = textTable.querySelector('.link-see-more');

            if (collapseBox && btn) {
                let textOpen = btn.innerText;
                let textClose = btn.dataset.text;

                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (btn.classList.contains('text-is-show')) {
                        btn.classList.remove('text-is-show');
                        btn.innerText = textOpen;

                        window.locomotivePageScroll.scrollTo(textTable, {
                            offset: -50,
                            duration: 0
                        })

                    } else {
                        btn.classList.add('text-is-show');
                        btn.innerText = textClose;
                    }

                    this.utils.slideToggle(collapseBox);

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