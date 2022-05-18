{
    let paginations = document.querySelectorAll('.pagination');
    if(paginations.length) {
        paginations.forEach(pagination => {
            let prev = pagination.querySelector('.prev');
            let next = pagination.querySelector('.next');
            let current = pagination.querySelector('.current');
            
            if(prev) {
                prev.closest('li').classList.add('prev');
            }
            if(next) {
                next.closest('li').classList.add('next');
            }
            if(current) {
                current.closest('li').classList.add('current');
            }
        })
    }
}