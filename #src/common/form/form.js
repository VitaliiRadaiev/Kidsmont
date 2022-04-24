{
    let textareaAll = document.querySelectorAll('[data-textarea]');
    if (textareaAll.length) {
        textareaAll.forEach(textarea => {

            // add wrapper
            let wrapper = document.createElement('div');
            wrapper.className = 'textarea-wrapper';
            textarea.before(wrapper);
            wrapper.append(textarea);

            // add mask
            let textMask = document.createElement('div');
            textMask.className = 'textarea-text-mask';
            wrapper.append(textMask);

            // add size box
            let sizeBox = document.createElement('div');
            sizeBox.className = 'textarea-size-box';
            wrapper.append(sizeBox);

            textarea.addEventListener('input', (e) => {
                wrapper.classList.toggle('textarea-has-text', e.target.value.length > 0);
                sizeBox.innerText = e.target.value;
                textarea.style.height = sizeBox.clientHeight + 'px';
                textMask.innerText = e.target.value;
            })

            textarea.addEventListener('focus', () => {
                wrapper.classList.add('textarea-is-focus');
                textarea.style.height = sizeBox.clientHeight  + 'px';
            })
            textarea.addEventListener('blur', () => {
                wrapper.classList.remove('textarea-is-focus');
                textarea.removeAttribute('style');
            })
        })
    }
}