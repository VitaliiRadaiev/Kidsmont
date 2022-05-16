{
    let mobShareBox = document.querySelector('[data-mob-share]');
    let mobShareBtn = document.querySelector('[data-action="mob-share-open"]');

    if(mobShareBox && mobShareBtn) {
        mobShareBtn.addEventListener('click', (e) => {
            e.preventDefault();
            mobShareBtn.classList.add('hide');
            mobShareBox.classList.add('mob-share--open');
            document.body.classList.add('overflow-hidden');
        })

        mobShareBox.addEventListener('click', (e) => {
            if(e.target.closest('.mob-share__social')) return;

            mobShareBtn.classList.remove('hide');
            mobShareBox.classList.remove('mob-share--open');
            document.body.classList.remove('overflow-hidden');
        })
    }
}