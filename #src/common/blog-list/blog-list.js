{
    let blogList = document.querySelector('[data-blog-list]');
    if(blogList) {
        if(document.documentElement.clientWidth >= 992) {
            let count = 1;
    
            // add columns
            const createColumn = (className) => {
                let div = document.createElement('div');
                div.className = className;
                return div;
            }
            let columns = {
                "1": createColumn('blog-list__column'),
                "2": createColumn('blog-list__column'),
                "3": createColumn('blog-list__column')
            }
            blogList.append(columns["1"], columns["2"], columns["3"]);
    
    
            // move items to columns
            Array.from(blogList.querySelectorAll('.blog-list__item')).forEach(item => {
                columns[count].append(item);
    
                if(count <= 2) {
                    count++;
                } else {
                    count = 1;
                }
            })
    
            // align columns
            for(let i = 0; i < 10; i++) {
                const getMaxHeightColumn = () => {
                    let num = 0;
                    let el;
                    Object.values(columns).forEach(item => {
                        if(item.clientHeight > num) {
                            num = item.clientHeight;
                            el = item;
                        }
                    })
                    return {el, height: num};
                }
    
                const getMinHeightColumn = () => {
                    let num = columns["1"].clientHeight;
                    let el =columns["1"];
    
                    Object.values(columns).forEach(item => {
                        if(item.clientHeight < num) {
                            num = item.clientHeight;
                            el = item;
                        }
                    })
                    return {el, height: num};
                }
    
                let maxHeightColumn = getMaxHeightColumn();
                let minHeightColumn = getMinHeightColumn();
    
                if(maxHeightColumn.height - minHeightColumn.height > 400) {
                    minHeightColumn.el.append(maxHeightColumn.el.lastElementChild);
                }
            }
        }
    }
}