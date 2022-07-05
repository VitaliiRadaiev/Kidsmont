let models = document.querySelectorAll('[data-model]');
if(models.length) {
    models.forEach(model => {
        let modelNameEl = document.querySelector(`[data-model-name="${model.dataset.model}"]`);
        if(modelNameEl) {
            // init
            let activeEl = model.querySelector('.model__item--active[data-model-set-name]');
            if(activeEl) {
                if(activeEl.dataset.modelSetName) {
                    modelNameEl.innerHTML = activeEl.dataset.modelSetName;
                }
            }

            // handler
            let items = model.querySelectorAll('[data-model-set-name]');
            if(items.length) {
                items.forEach(item => {
                    item.addEventListener('mouseenter', () => {
                        if(item.dataset.modelSetName) {
                            modelNameEl.innerHTML = item.dataset.modelSetName;
                        }
                    })
                })
            }

            model.addEventListener('mouseleave', () => {
                if(activeEl) {
                    if(activeEl.dataset.modelSetName) {
                        modelNameEl.innerHTML = activeEl.dataset.modelSetName;
                    }
                }
            })
        }
    })
}