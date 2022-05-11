{
    let promoTitle = document.querySelector('[data-promo-title]');
    if (promoTitle) {
        let discoverText = document.querySelector('.promo-header__title-discover');
        let mask = document.querySelector('.promo-header__title-mask');

        let x;
        let y;
        let r = 7;
        let animValue = 0;
        let borderXStart = 10;
        let borderXEnd = 100 - borderXStart;
        let borderYStart = 15;
        let borderYEnd = 100 - borderYStart;
        let animationForwardId = null;
        let animationBackId = null;

        const animationForward = () => {
            if (animValue < r) {
                animValue += 0.2;
                mask.style.clipPath = `circle(${animValue}% at ${x}% ${y}%)`;
                animationForwardId = requestAnimationFrame(animationForward);
            }
        }

        const animationBack = () => {
            if (animValue > 0) {
                animValue -= 0.2;
                mask.style.clipPath = `circle(${animValue}% at ${x}% ${y}%)`;
                animationBackId = requestAnimationFrame(animationBack);
            }
        }

        promoTitle.addEventListener('mousemove', (e) => {
            if (document.documentElement.clientWidth > 991) {
                let { left, top, width, height } = mask.getBoundingClientRect();

                x = (e.clientX - left) / width * 100;
                y = (e.clientY - top) / height * 100;

                mask.style.clipPath = `circle(${animValue}% at ${x}% ${y}%)`;
                discoverText.setAttribute('style', `left:${x}%;top:${y}%;`);

            }
        })
        promoTitle.addEventListener('mouseenter', () => {
            if (document.documentElement.clientWidth > 991) {
                mask.classList.add('_anime');
                animationForward();
                mouseDot.hide();
                if(animationBackId) {
                    cancelAnimationFrame(animationBackId);
                }
            }

        })

        promoTitle.addEventListener('mouseleave', () => {
            if (document.documentElement.clientWidth > 991) {
                mask.classList.remove('_anime');
                animationBack();
                mouseDot.show();
    
                if(animationForwardId) {
                    cancelAnimationFrame(animationForwardId);
                }
            }
        })
    }
}