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
            mask.classList.add('_anime');
            animationForward();
            mouseDot.hide();
            if(animationBackId) {
                cancelAnimationFrame(animationBackId);
            }
        })

        promoTitle.addEventListener('mouseleave', () => {

            mask.classList.remove('_anime');
            animationBack();
            mouseDot.show();

            if(animationForwardId) {
                cancelAnimationFrame(animationForwardId);
            }
        })
    }

    const shader = {
        vertex: `			
        #ifdef GL_ES
            precision mediump float;
            #endif

            // those are the mandatory attributes that the lib sets
            attribute vec3 aVertexPosition;
            attribute vec2 aTextureCoord;

            // those are mandatory uniforms that the lib sets and that contain our model view and projection matrix
            uniform mat4 uMVMatrix;
            uniform mat4 uPMatrix;
          
      // our texture matrix uniform (this is the lib default name, but it could be changed)
      uniform mat4 uTextureMatrix0;

            // if you want to pass your vertex and texture coords to the fragment shader
            varying vec3 vVertexPosition;
            varying vec2 vTextureCoord;

            void main() {
                vec3 vertexPosition = aVertexPosition;

                gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

                // set the varyings
        // thanks to the texture matrix we will be able to calculate accurate texture coords
        // so that our texture will always fit our plane without being distorted
                vTextureCoord = (uTextureMatrix0 * vec4(aTextureCoord, 0.0, 1.0)).xy;
                vVertexPosition = vertexPosition;
            }`,
        fragment: `
            #ifdef GL_ES
            precision mediump float;
            #endif

            // get our varyings
            varying vec3 vVertexPosition;
            varying vec2 vTextureCoord;

            // the uniform we declared inside our javascript
            uniform float uTime;

            // our texture sampler (default name, to use a different name please refer to the documentation)
            uniform sampler2D uSampler0;

            void main() {
        // get our texture coords
                vec2 textureCoord = vTextureCoord;

                // displace our pixels along both axis based on our time uniform and texture UVs
                // this will create a kind of water surface effect
                // try to comment a line or change the constants to see how it changes the effect
                // reminder : textures coords are ranging from 0.0 to 1.0 on both axis
                const float PI = 3.141592;

                textureCoord.x += (
                    sin(textureCoord.x * 5.0 + ((uTime * (PI / 3.0)) * 0.031))
                    + sin(textureCoord.y * 5.0 + ((uTime * (PI / 2.489)) * 0.017))
                    ) * 0.0075;

                textureCoord.y += (
                    sin(textureCoord.y * 7.0 + ((uTime * (PI / 5.023)) * 0.023))
                    + sin(textureCoord.x * 7.0 + ((uTime * (PI / 6.1254)) * 0.037))
                    ) * 0.0125;

                gl_FragColor = texture2D(uSampler0, textureCoord);
            }`
    };


    let images = document.querySelectorAll('.promo-header__img');
    if (images.length) {
        images.forEach(img => {
            let canvas = img.querySelector('.promo-header__img-canvas');

            const webGLCurtain = new Curtains({
                container: canvas,
                pixelRatio: Math.min(1.5, window.devicePixelRatio)
            });

            let params = {
                vertexShader: shader.vertex, // our vertex shader ID
                fragmentShader: shader.fragment, // our framgent shader ID
                alwaysDraw: true,
                //crossOrigin: "", // codepen specific
                uniforms: {
                    time: {
                        name: "uTime", // uniform name that will be passed to our shaders
                        type: "1f", // this means our uniform is a float
                        value: 0,
                    },
                }
            }

            const plane = new Plane(webGLCurtain, img, params);

            plane && plane.onReady(() => {

                plane.userData.mouseOver = false;

                img.addEventListener("mouseenter", function (e) {
                    plane.userData.mouseOver = true;
                    img.classList.add('show');
                });

                img.addEventListener("mouseleave", function (e) {
                    plane.userData.mouseOver = false;
                    img.classList.remove('show');
                });
            }).onRender(() => {
                // use damping
                // if(plane.userData.mouseOver) {
                //     plane.uniforms.time.value++;
                // }
                // else {
                //     plane.uniforms.time.value = -1;
                // }
                plane.uniforms.time.value++;
            });

            //webGLCurtain.disableDrawing();

            let id = setInterval(() => {
                webGLCurtain.resize();
            }, 200);
            setTimeout(() => {
                clearInterval(id);
            }, 3000)
        })
    }

}