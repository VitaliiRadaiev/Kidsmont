{
    let faqSearch = document.querySelector('[data-faq-search]');
    if(faqSearch) {
        let btnShowFaqSearch = document.querySelector('[data-action="show-faq-search"]');
        let btnHideFaqSearch = document.querySelector('[data-action="hide-faq-search"]');

        if(btnShowFaqSearch) {
            btnShowFaqSearch.addEventListener('click', (e) => {
                e.preventDefault();
                faqSearch.classList.add('faq__search--show');
                document.body.classList.add('cover');
                document.body.classList.add('overflow-hidden');
            })
        }

        if(btnHideFaqSearch) {
            btnHideFaqSearch.addEventListener('click', (e) => {
                e.preventDefault();
                faqSearch.classList.remove('faq__search--show');
                document.body.classList.remove('cover');
                document.body.classList.remove('overflow-hidden');
            })
        }
    }
}