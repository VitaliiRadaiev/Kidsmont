{
    let textareaAll = document.querySelectorAll('[data-textarea]');
    if (textareaAll.length) {
        textareaAll.forEach(textarea => {
            let placeholder = textarea.placeholder.trim();
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

            if(textarea.placeholder.trim()) {
                let label = document.createElement('div'); 
                label.className = 'textarea-label';
                label.innerHTML = textarea.placeholder.trim();
                wrapper.append(label);
            }

            textarea.addEventListener('input', (e) => {
                wrapper.classList.toggle('textarea-has-text', e.target.value.length > 0);
                sizeBox.innerText = e.target.value;
                textarea.style.height = sizeBox.clientHeight + 'px';
                textMask.innerText = e.target.value;
            })

            textarea.addEventListener('focus', () => {
                wrapper.classList.add('textarea-is-focus');
                textarea.style.height = sizeBox.clientHeight + 'px';
                textarea.placeholder = '';
            })
            textarea.addEventListener('blur', () => {
                wrapper.classList.remove('textarea-is-focus');
                textarea.removeAttribute('style');
                textarea.placeholder = placeholder;
            })
        })
    }
}

{
    let defaultInputs = document.querySelectorAll('input');
    if(defaultInputs.length) {
        defaultInputs.forEach(input => {
            if(input.placeholder.trim()) {
                let placeholder = input.placeholder.trim();

                input.addEventListener('focus', () => {
                    input.placeholder = '';
                })
                input.addEventListener('blur', () => {
                    input.placeholder = placeholder;
                })
            }
        })
    }

    let inputs = document.querySelectorAll('.input:not(.not-label)');
    if(inputs.length) {
        inputs.forEach(input => {
            if(input.placeholder.trim()) {
                let inputWrap = document.createElement('div');
                let label = document.createElement('div');
                label.className = 'input-label';
                label.innerText = input.placeholder;
                inputWrap.className = 'input-wrap';
                input.after(inputWrap);
                inputWrap.append(input);
                inputWrap.append(label);


                input.addEventListener('focus', () => {
                    inputWrap.classList.add('input-is-focus');
                })
                input.addEventListener('blur', () => {
                    inputWrap.classList.remove('input-is-focus');
                })

                input.addEventListener('input', (e) => {
                    inputWrap.classList.toggle('input-has-text', e.target.value.length > 0);
                })
            }
        })
    }
}

{
    let passwordAll = document.querySelectorAll('[data-password]');
    if (passwordAll.length) {
        passwordAll.forEach(password => {
            let input = password.querySelector('input');

            if (input) {
                // init
                input.setAttribute('type', 'password');

                // add btn eye
                let btnEye = document.createElement('div');
                btnEye.className = 'password__btn-eye';
                password.append(btnEye);

                btnEye.addEventListener('click', () => {
                    if (password.classList.contains('password--show')) {
                        input.setAttribute('type', 'password');
                        password.classList.remove('password--show');
                    } else {
                        input.setAttribute('type', 'text');
                        password.classList.add('password--show');
                    }
                })
            }
        })
    }
}