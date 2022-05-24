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
		this.resetFormHandler();
		this.initDatepicker();
		this.initTooltip();


		window.addEventListener('load', () => {
			document.body.classList.add('page-is-load');
			this.componentsScriptsAfterLoadPage();
			this.locomotiveScrollInit();
			this.setPaddingTopHeaderSize();
			//this.videoHandlerInit();
			this.slidersInit();
			this.setFontSize();
			this.setFullHeight();
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
		@@include('../common/blog-preview/blog-preview.js');
		@@include('../common/benefits/benefits.js');
	}

	initMouse() {
		if (!this.utils.isMobile()) {
			// const createDot = () => {
			// 	let dot = document.createElement('div');
			// 	dot.className = 'mouse-dot';
			// 	document.body.append(dot);
			// 	return dot;
			// }

			// let mouseDot = createDot();

			// const setPositon = (e) => {
			// 	let width = mouseDot.clientWidth / 2;
			// 	mouseDot.style.left = e.pageX + 'px';
			// 	mouseDot.style.top = e.pageY + 'px';
			// }

			// const setHoverTrigger = (e) => {
			// 	if (e.target.closest('.hover')) {
			// 		mouseDot.classList.add('hover');
			// 	} else {
			// 		mouseDot.classList.remove('hover');
			// 	}
			// }

			// const mouseHandler = (e) => {
			// 	setPositon(e);
			// 	setHoverTrigger(e);
			// }



			// document.documentElement.addEventListener('mousemove', mouseHandler);

			window.mouseDot = {
				show() {
					//mouseDot.classList.remove('hide');
				},
				hide() {
					//mouseDot.classList.add('hide');
				}
			}

		}
	}

	tabsInit() {
		let tabsContainers = document.querySelectorAll('[data-tabs]');
		if (tabsContainers.length) {
			tabsContainers.forEach(tabsContainer => {
				let triggerItems = Array.from(tabsContainer.querySelectorAll('[data-tab-trigger]'));
				let contentItems = Array.from(tabsContainer.querySelectorAll('[data-tab-content]'));
				let select = tabsContainer.querySelector('[data-tab-select]');

				const getContentItem = (id) => {
					if (!id.trim()) return;
					return contentItems.filter(item => item.dataset.tabContent === id)[0];
				}

				if (triggerItems.length && contentItems.length) {
					// init
					let activeItem = tabsContainer.querySelector('.tab-active[data-tab-trigger]');
					if (activeItem) {
						activeItem.classList.add('tab-active');
						getContentItem(activeItem.dataset.tabTrigger).classList.add('tab-active');
					} else {
						triggerItems[0].classList.add('tab-active');
						getContentItem(triggerItems[0].dataset.tabTrigger).classList.add('tab-active');
					}

					triggerItems.forEach(item => {
						item.addEventListener('click', (e) => {
							e.preventDefault();
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

				if (select) {
					select.addEventListener('change', (e) => {
						getContentItem(e.target.value).classList.add('tab-active');

						contentItems.forEach(item => {
							if (getContentItem(e.target.value) === item) return;

							item.classList.remove('tab-active');
						})
					})
				}

				if (tabsContainer.dataset.tabs === 'has-outside-navigation') {
					let outsideNavigation = document.querySelector('[data-tabs-outside-nav]');
					if (outsideNavigation) {
						let triggerItems = outsideNavigation.querySelectorAll('[data-tab-trigger]');

						// init
						let activeItem = tabsContainer.querySelector('.tab-active[data-tab-trigger]');
						if (activeItem) {
							activeItem.classList.add('tab-active');
							getContentItem(activeItem.dataset.tabTrigger).classList.add('tab-active');
						} else {
							triggerItems[0].classList.add('tab-active');
							getContentItem(triggerItems[0].dataset.tabTrigger).classList.add('tab-active');
						}

						triggerItems.forEach(item => {
							item.addEventListener('click', (e) => {
								e.preventDefault();
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

								window.sidePanel.close('faq-items');
							})
						})
					}
				}


				// open found resutl
				let serchResult = document.querySelector('.search-result');
				if (serchResult) {


					serchResult.addEventListener('click', (e) => {

						if (e.target.classList.contains('search-link')) {
							let link = e.target;
							let elId = link.getAttribute('href').match(/#\w+$/gi).join('');
							let [tab] = triggerItems.filter(i => i.dataset.tabTrigger === link.dataset.term);
							let questionEl = document.querySelector(`${elId}`);

							if (tab) {
								tab.classList.add('tab-active');
								getContentItem(tab.dataset.tabTrigger).classList.add('tab-active');

								triggerItems.forEach(i => {
									if (i === tab) return;

									i.classList.remove('tab-active');
									getContentItem(i.dataset.tabTrigger).classList.remove('tab-active');
								})
							}

							if (questionEl) {
								let spollerTrigger = questionEl.querySelector('[data-spoller-trigger]');
								if (spollerTrigger) {
									let collapseContent = spollerTrigger.nextElementSibling;
									let spollerTriggers = spollerTrigger.closest('[data-spoller]').querySelectorAll('[data-spoller-trigger]');

									if (collapseContent) {
										spollerTrigger.classList.add('active');
										spollerTrigger.parentElement.classList.add('active');
										this.utils.slideDown(collapseContent);

										if (spollerTriggers.length) {
											spollerTriggers.forEach(i => {
												if (i === spollerTrigger) return;

												i.classList.remove('active');
												i.parentElement.classList.remove('active');
												this.utils.slideUp(i.nextElementSibling);
											})
										}
									}
								}

								if(document.documentElement.clientHeight - questionEl.clientHeight < questionEl.getBoundingClientRect().top) {
									setTimeout(() => {
										window.locomotivePageScroll.scrollTo(questionEl, {
											offset: -100,
											duration: 0
										})
									}, 200)
								}

							}

							// update locomotive scroll
							let id = setInterval(() => {
								window.locomotivePageScroll.update();
							}, 20);
							setTimeout(() => {
								clearInterval(id);
							}, 200)
						}
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
				let mobModification = spoller.dataset.spoller.trim() === 'mob' ? true : false;

				let triggers;
				if (spoller.dataset.hasOwnProperty('subSpoller')) {
					triggers = spoller.querySelectorAll('[data-spoller-trigger]');
				} else {
					triggers = spoller.querySelectorAll('[data-spoller-trigger]:not([data-sub-spoller] [data-spoller-trigger])');
				}
				if (triggers.length) {
					triggers.forEach(trigger => {
						let parent = trigger.parentElement;
						let content = trigger.nextElementSibling;

						// init
						if (trigger.classList.contains('active')) {
							content.style.display = 'block';
						}

						trigger.addEventListener('click', (e) => {

							if (mobModification && document.documentElement.clientWidth > 991.98) return;

							e.preventDefault();
							parent.classList.toggle('active');
							trigger.classList.toggle('active');
							content && this.utils.slideToggle(content);

							if (isOneActiveItem || mobModification) {
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
				let inputs = item.querySelectorAll('input');
				if (inputs.length) {
					inputs.forEach(input => {
						if (input) {
							Inputmask(maskValue, {
								//"placeholder": '',
								clearIncomplete: true,
								clearMaskOnLostFocus: true,
								showMaskOnHover: false,
							}).mask(input);
						}
					})
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
		let container = document.querySelector('[data-scroll-container]');
		if (container) {


			const scroll = new LocomotiveScroll({
				el: container,
				smooth: true,
				lerp: 0.03,
				reloadOnContextChange: true,
				scrollFromAnywhere: true
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
				//console.log(args.scroll.y);
			});
		}
	}

	resetFormHandler() {
		let resetButtons = document.querySelectorAll('[data-button-reset]');
		if (resetButtons.length) {
			resetButtons.forEach(resetButton => {
				let count = 0;
				let form = resetButton.closest('form');
				let checkboxInputs = form.querySelectorAll('input[type="checkbox"]');
				let numBox = resetButton.querySelector('span');
				let inputPriceStart = form.querySelector('.price-range__input--start');
				let inputPriceEnd = form.querySelector('.price-range__input--end');

				// init
				numBox.innerText = count;

				checkboxInputs.forEach(checkboxInput => {
					checkboxInput.addEventListener('change', () => {
						if (checkboxInput.checked) {
							count++;
						} else {
							count--;
						}

						numBox.innerText = count;
					})
				})

				form.addEventListener('reset', (e) => {
					e.preventDefault();
					count = 0;
					numBox.innerText = count;

					checkboxInputs.forEach(checkboxInput => {
						checkboxInput.checked = false;
					})

					if (inputPriceStart) {
						inputPriceStart.value = 0;
						window.priceSlider.noUiSlider.set([0, null]);
					}

					if (inputPriceEnd) {
						let value = inputPriceEnd.closest('.price-range').dataset.max;
						inputPriceStart.value = value;
						window.priceSlider.noUiSlider.set([null, value]);
					}
				})
			})
		}
	}

	componentsScriptsBeforeLoadPage() {
		@@include('../common/form/form.js');
	}

	setFullHeight() {
		let elements = document.querySelectorAll('[data-set-full-height]');
		if (elements.length) {
			let header = document.querySelector('[data-header]');
			elements.forEach(el => {
				let mob = el.dataset.setFullHeight === 'mob';

				const setHeight = () => {
					if (mob && document.documentElement.clientWidth > 767.98) return;
					el.style.minHeight = document.documentElement.clientHeight - header.clientHeight + 'px';
				}

				setHeight();

				window.addEventListener('resize', setHeight);
			})
		}
	}

	initDatepicker() {
		let elements = document.querySelectorAll('[data-datepicker]');
		if (elements.length) {
			elements.forEach(el => {
				let input = el.querySelector('input');
				datepicker(input, {
					formatter: (input, date, instance) => {
						const value = date.toLocaleDateString()
						input.value = value
					}
				});
			})
		}
	}

	initTooltip() {
		let elements = document.querySelectorAll('[data-tooltip]');
		if (elements.length) {
			elements.forEach(el => {
				tippy(el, {
					content: el.dataset.tooltip,
				});
			})
		}
	}


	componentsScriptsAfterLoadPage() {
		@@include('../common/promo-header/promo-header.js');
		@@include('../common/side-panel/side-panel.js');
		@@include('../common/price-range/price-range.js');
		@@include('../common/blog-list/blog-list.js');
		@@include('../common/blog-detail/blog-detail.js');
		@@include('../common/drop-zone/drop-zone.js');
		@@include('../common/orders-list/orders-list.js');
		@@include('../common/quantity/quantity.js');
		@@include('../common/footer/footer.js');
		@@include('../common/text-table/text-table.js');
		@@include('../common/mob-share/mob-share.js');
		@@include('../common/payment-cart/payment-cart.js');
		@@include('../common/checkout/checkout.js');
		@@include('../common/pagination/pagination.js');
		@@include('../common/faq/faq.js');

		{
			let lastSection = document.querySelector('[data-last-section]');
			let footer = document.querySelector('.footer');
			if (lastSection && footer) {
				footer.style.paddingTop = '0px';
			}
		}


	}

}

window.addEventListener('DOMContentLoaded', function () {
	let app = new App();
	app.init();
});

