{
    let blogDetail = document.querySelector('[data-blog-detail]');
    if(blogDetail) {
        let headImage = blogDetail.querySelector('.blog-detail__article-head-img');
        let sidePostWrap = blogDetail.querySelector('.blog-detail__col-2');

        if(headImage && sidePostWrap) {
            sidePostWrap.style.paddingTop = headImage.offsetTop + 'px';
        }
    }
}