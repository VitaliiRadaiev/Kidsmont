@@include('files/utils.js');
@@include('files/dynamic_adapt.js');

class App {
	constructor() {
		this.utils = new Utils();
		this.dynamicAdapt = new DynamicAdapt('max');
	}

	init() {
		if (this.utils.isMobile()) {
			document.body.classList.add('mobile');
		}

		if (this.utils.iOS()) {
			document.body.classList.add('mobile-ios');
		}

		this.utils.numberCounterAnim();
		this.utils.initTruncateString();
		this.dynamicAdapt.init();
		this.headerHandler();
		this.popupHandler();
		//this.initSmoothScroll();
		this.inputMaskInit();
		this.tabsInit();
		this.selectInit();
		this.initMouse();
		this.spollerInit();
		this.componentsScriptsBeforeLoadPage();


		window.addEventListener('load', () => {
			document.body.classList.add('page-is-load');
			this.componentsScriptsAfterLoadPage();
			this.locomotiveScrollInit();
			this.setPaddingTopHeaderSize();
			//this.videoHandlerInit();
			this.slidersInit();
			this.setFontSize();

		});

	}

	headerHandler() {
		@@include('../common/header/header.js');
	}

	popupHandler() {
		@@include('../common/popup/popup.js');
	}

	slidersInit() {
		@@include('../common/product-carousel/product-carousel.js');
		@@include('../common/see-more-ban/see-more-ban.js');
		@@include('../common/reviews/reviews.js');
		@@include('../common/carousel/carousel.js');
		@@include('../common/gallery-product-detail/gallery-product-detail.js');
		@@include('../common/article-slider/article-slider.js');
		@@include('../common/review-list-card/review-list-card.js');
		@@include('../common/gallery-carousel/gallery-carousel.js');
		@@include('../common/tabs/tabs.js');
	}

	initMouse() {
		if (!this.utils.isMobile()) {
			const createDot = () => {
				let dot = document.createElement('div');
				dot.className = 'mouse-dot';
				document.body.append(dot);
				return dot;
			}

			let mouseDot = createDot();

			const setPositon = (e) => {
				let width = mouseDot.clientWidth / 2;
				mouseDot.style.left = e.pageX + 'px';
				mouseDot.style.top = e.pageY + 'px';
			}

			const setHoverTrigger = (e) => {
				if (e.target.closest('.hover')) {
					mouseDot.classList.add('hover');
				} else {
					mouseDot.classList.remove('hover');
				}
			}

			const mouseHandler = (e) => {
				setPositon(e);
				setHoverTrigger(e);
			}



			document.documentElement.addEventListener('mousemove', mouseHandler);

			window.mouseDot = {
				show() {
					mouseDot.classList.remove('hide');
				},
				hide() {
					mouseDot.classList.add('hide');
				}
			}

		}
	}

	tabsInit() {
		let tabsContainers = document.querySelectorAll('[data-tabs]');
		if (tabsContainers.length) {
			tabsContainers.forEach(tabsContainer => {
				let triggerItems = tabsContainer.querySelectorAll('[data-tab-trigger]');
				let contentItems = Array.from(tabsContainer.querySelectorAll('[data-tab-content]'));
				let select = tabsContainer.querySelector('[data-tab-select]');

				const getContentItem = (id) => {
					if (!id.trim()) return;
					return contentItems.filter(item => item.dataset.tabContent === id)[0];
				}

				if (triggerItems.length && contentItems.length) {
					// init
					let activeItem = tabsContainer.querySelector('.tab-active[data-tab-trigger]');
					if(activeItem) {
						activeItem.classList.add('tab-active');
						getContentItem(activeItem.dataset.tabTrigger).classList.add('tab-active');
					} else {
						triggerItems[0].classList.add('tab-active');
						getContentItem(triggerItems[0].dataset.tabTrigger).classList.add('tab-active');
					}

					triggerItems.forEach(item => {
						item.addEventListener('click', () => {
							item.classList.add('tab-active');
							getContentItem(item.dataset.tabTrigger).classList.add('tab-active');

							triggerItems.forEach(i => {
								if (i === item) return;

								i.classList.remove('tab-active');
								getContentItem(i.dataset.tabTrigger).classList.remove('tab-active');
							})

							// update locomotive scroll
							let id = setInterval(() => {
								window.locomotivePageScroll.update();
							}, 20);
							setTimeout(() => {
								clearInterval(id);
							}, 200)
						})
					})
				}

				if(select) {
					select.addEventListener('change', (e) => {
						getContentItem(e.target.value).classList.add('tab-active');

						contentItems.forEach(item => {
							if(getContentItem(e.target.value) === item) return;

							item.classList.remove('tab-active');
						})
					})
				}
			})
		}
	}

	spollerInit() {
		let spollers = document.querySelectorAll('[data-spoller]');
		if (spollers.length) {
			spollers.forEach(spoller => {
				let isOneActiveItem = spoller.dataset.spoller.trim() === 'one' ? true : false;
				let triggers = spoller.querySelectorAll('[data-spoller-trigger]');
				if (triggers.length) {
					triggers.forEach(trigger => {
						let parent = trigger.parentElement;
						let content = trigger.nextElementSibling;

						// init
						if (trigger.classList.contains('active')) {
							content.style.display = 'block';
						}

						trigger.addEventListener('click', (e) => {
							e.preventDefault();
							parent.classList.toggle('active');
							trigger.classList.toggle('active');
							content && this.utils.slideToggle(content);

							if (isOneActiveItem) {
								triggers.forEach(i => {
									if (i === trigger) return;

									let parent = i.parentElement;
									let content = i.nextElementSibling;

									parent.classList.remove('active');
									i.classList.remove('active');
									content && this.utils.slideUp(content);
								})
							}

							// update locomotive scroll
							let id = setInterval(() => {
								window.locomotivePageScroll.update();
							}, 200);
							setTimeout(() => {
								clearInterval(id);
							}, 600)

						})
					})
				}
			})
		}
	}

	inputMaskInit() {
		let items = document.querySelectorAll('[data-mask]');
		if (items.length) {
			items.forEach(item => {
				let maskValue = item.dataset.mask;
				let input = item.querySelector('input[type="text"]');

				if (input) {
					Inputmask(maskValue, {
						//"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
					}).mask(input);
				}
			})
		}
	}

	setPaddingTopHeaderSize() {
		let wrapper = document.querySelector('[data-padding-top-header-size]');
		if (wrapper) {
			let header = document.querySelector('[data-header]');
			if (header) {
				const setPedding = () => wrapper.style.paddingTop = header.clientHeight + 'px';
				setPedding();
				let id = setInterval(setPedding, 200);
				setTimeout(() => {
					clearInterval(id);
				}, 2000)
				window.addEventListener('resize', setPedding);
			}

		}
	}

	videoHandlerInit() {
		@@include('../common/video/video.js');
	}

	initSmoothScroll() {
		let anchors = document.querySelectorAll('[data-scroll]');
		if (anchors.length) {
			anchors.forEach(anchor => {
				if (!anchor.getAttribute('href').match(/#\w+$/gi)) return;

				let id = anchor.getAttribute('href').match(/#\w+$/gi).join('').replace('#', '');
				anchor.addEventListener('click', (e) => {

					let el = document.getElementById(id);
					e.preventDefault();
					window.scrollTo({
						top: el ? el.offsetTop : 0,
						behavior: 'smooth',
					})


				})
			})
		}
	}

	selectInit() {
		@@include('../common/select/select.js');
	}

	setFontSize() {
		let elements = document.querySelectorAll('[data-set-font-size]');
		if (elements.length) {
			elements.forEach(el => {
				const setFontSize = () => {
					let value = 10 / 1400 * el.clientWidth;
					el.style.fontSize = value + 'px';
				}

				setFontSize();

				window.addEventListener('resize', setFontSize);
			})
		}
	}

	locomotiveScrollInit() {
		const scroll = new LocomotiveScroll({
			el: document.querySelector('[data-scroll-container]'),
			smooth: true,
			lerp: 0.03
		});

		window.locomotivePageScroll = scroll;

		let id = setInterval(() => {
			scroll.update();
		}, 200);
		setTimeout(() => {
			clearInterval(id);
		}, 1000)

		scroll.on('call', func => {
			let id = setInterval(() => {
				window?.webGLCurtainElements[func]();
			}, 200);
			setTimeout(() => {
				clearInterval(id);
			}, 3000)

		});

		scroll.on('scroll', (args) => {
			//console.log(args);
		});

	}
	componentsScriptsBeforeLoadPage() {
		@@include('../common/form/form.js');
	}
	componentsScriptsAfterLoadPage() {
		@@include('../common/promo-header/promo-header.js');
		@@include('../common/side-panel/side-panel.js');
		@@include('../common/price-range/price-range.js');
		@@include('../common/blog-list/blog-list.js');
		@@include('../common/blog-detail/blog-detail.js');
		@@include('../common/drop-zone/drop-zone.js');
	}

}

window.addEventListener('DOMContentLoaded', function () {
	let app = new App();
	app.init();
});

