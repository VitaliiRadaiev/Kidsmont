{
    let checkout = document.querySelector('[data-checkout]');
    if (checkout) {
        // set height
        let header = document.querySelector('[data-header]')
        let footerSimple = document.querySelector('[data-footer-simple]')

        if (header && footerSimple) {
            const setHeight = () => {
                checkout.style.minHeight = document.documentElement.clientHeight - header.clientHeight - footerSimple.clientHeight + 'px';
            }

            setHeight();

            window.addEventListener('resize', setHeight);
        }


        // step toggle handler
        let steps = Array.from(document.querySelectorAll('[data-step]'));
        if (steps.length) {
            steps.forEach(step => {
                let stepTrigger = step.querySelector('[data-trigger-step]');
                let collapseContainer = step.querySelector('[data-collapse-step]');
                let changeBtn = step.querySelector('.steps-checkout__change');

                if (stepTrigger && collapseContainer) {
                    //init
                    if (step.classList.contains('steps-checkout__step--open')) {
                        if (collapseContainer) {
                            collapseContainer.style.display = 'block';
                        }
                    }

                    stepTrigger.addEventListener('click', () => {
                        step.classList.toggle('steps-checkout__step--open');

                        if (collapseContainer) {
                            this.utils.slideToggle(collapseContainer, 500);
                        }

                        steps.forEach(i => {
                            if (step === i) return;

                            let collapseContainer = i.querySelector('[data-collapse-step]');

                            i.classList.remove('steps-checkout__step--open');

                            if (collapseContainer) {
                                this.utils.slideUp(collapseContainer, 500);
                            }
                        })
                    })

                }

                if(changeBtn) {
                    changeBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        step.classList.toggle('steps-checkout__step--open');

                        if (collapseContainer) {
                            this.utils.slideToggle(collapseContainer, 500);
                        }

                        steps.forEach(i => {
                            if (step === i) return;

                            let collapseContainer = i.querySelector('[data-collapse-step]');

                            i.classList.remove('steps-checkout__step--open');

                            if (collapseContainer) {
                                this.utils.slideUp(collapseContainer, 500);
                            }
                        })
                    })
                }
            })

            const slideDown = (el) => {
                this.utils.slideDown(el, 500);
            }
            const slideUp = (el) => {
                this.utils.slideUp(el, 500);
            }
            window.checkoutSteps = {
                openStep(id) {
                    let [step] = steps.filter(i => i.dataset.step === id);
                    if(step) {
                        let collapseContainer = step.querySelector('[data-collapse-step]');

                        step.classList.add('steps-checkout__step--open');
                        if(collapseContainer) {
                            slideDown(collapseContainer);
                        }

                        steps.forEach(i => {
                            if (step === i) return;

                            let collapseContainer = i.querySelector('[data-collapse-step]');

                            i.classList.remove('steps-checkout__step--open');

                            if (collapseContainer) {
                                slideUp(collapseContainer);
                            }
                        })
                    }
                },
                closeStep(id) {
                    let [step] = steps.filter(i => i.dataset.step === id);
                    if(step) {
                        let collapseContainer = step.querySelector('[data-collapse-step]');
                        
                        step.classList.remove('steps-checkout__step--open');
                        if(collapseContainer) {
                            slideUp(collapseContainer);
                        }
                    }
                },
                setStepAsFilled(id) {
                    let [step] = steps.filter(i => i.dataset.step === id);
                    if(step) {
                        let subTitle = step.querySelector('.steps-checkout__subtitle');
                        let resultList = step.querySelector('.steps-checkout__result-list');

                        step.classList.add('steps-checkout__step--filled');
                        if(subTitle) {
                            slideUp(subTitle);
                        }

                        if(resultList) {
                            slideDown(resultList);
                        }
                    }
                },
                unsetStepAsFilled(id) {
                    let [step] = steps.filter(i => i.dataset.step === id);
                    if(step) {
                        let subTitle = step.querySelector('.steps-checkout__subtitle');
                        let resultList = step.querySelector('.steps-checkout__result-list');

                        step.classList.remove('steps-checkout__step--filled');
                        if(subTitle) {
                            slideDown(subTitle);
                        }

                        if(resultList) {
                            slideUp(resultList);
                        }
                    }
                }
            }
        }

        // step one handler
        let step1 = document.querySelector('[data-step="0"]');
        if(step1) {
            let resultList = document.querySelector('.steps-checkout__result-list');
            let inputs = [
                
            ]
        }
    }
}

{
    let collapseTriggers = document.querySelectorAll('[data-collapse-trigger]');
    if (collapseTriggers.length) {
        collapseTriggers.forEach(collapseTrigger => {
            let id = collapseTrigger.dataset.collapseTrigger;
            if (id) {
                let collapseEl = document.querySelector(`[data-collapse="${id}"]`);

                if (collapseEl) {
                    let input = collapseTrigger.querySelector('input');

                    if (input) {
                        // init
                        if (input.checked) {
                            collapseEl.style.display = 'block';
                        }

                        document.addEventListener('change', (e) => {

                            if (e.target === input) {
                                if (input.checked) {
                                    this.utils.slideDown(collapseEl, 300);
                                }
                            } else {
                                if (e.target.closest('[data-collapse]')) return;

                                if (!input.checked) {
                                    this.utils.slideUp(collapseEl, 300);
                                }
                            }
                        })
                    }
                }
            }
        })
    }
}
