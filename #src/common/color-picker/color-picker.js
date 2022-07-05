let colorPickers = document.querySelectorAll('[data-color-picker]');
if(colorPickers.length) {
    colorPickers.forEach(colorPicker => {
        let colorNameEl = document.querySelector(`[data-color-picker-color-name="${colorPicker.dataset.colorPicker}"]`);
        if(colorNameEl) {
            // init
            let activeEl = colorPicker.querySelector('.color-picker__item--active[data-color-picker-set-color-name]');
            if(activeEl) {
                if(activeEl.dataset.colorPickerSetColorName) {
                    colorNameEl.innerHTML = activeEl.dataset.colorPickerSetColorName;
                }
            }

            // handler
            let items = colorPicker.querySelectorAll('[data-color-picker-set-color-name]');
            if(items.length) {
                items.forEach(item => {
                    item.addEventListener('mouseenter', () => {
                        if(item.dataset.colorPickerSetColorName) {
                            colorNameEl.innerHTML = item.dataset.colorPickerSetColorName;
                        }
                    })
                })
            }

            colorPicker.addEventListener('mouseleave', () => {
                if(activeEl) {
                    if(activeEl.dataset.colorPickerSetColorName) {
                        colorNameEl.innerHTML = activeEl.dataset.colorPickerSetColorName;
                    }
                }
            })
        }
    })
}