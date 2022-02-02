const portfolioButtons = document.querySelectorAll(
	'.portfolio .portfolio__tabs .btn'
);
const portfolioBoxs = document.querySelectorAll('.portfolio .box');
portfolioButtons.forEach(btn => {
	btn.onclick = () => {
		document
			.querySelector('.portfolio .portfolio__tabs .btn.active')
			.classList.remove('active');
		btn.classList.add('active');
		setActiveCategory(btn.dataset.category);
	};
});
const sleep = ms => new Promise(res => setTimeout(res, ms));
const setActiveCategory = category => {
	portfolioBoxs.forEach(box => {
		if (category === 'all') {
			show(box);
		} else if (box.dataset.category === category) {
			show(box);
		} else {
			hide(box);
		}
	});
};
const hide = function (elm, ms = 500) {
	var y = elm.style ? elm.style.display : '';
	if (!y || y == 'block') {
		// change the opacity. CSS will handle the animation.
		elm.style.opacity = '0';
		elm.style.transform = 'translateX(-40%)';
		// change the display to "none" after a delay.
		setTimeout(function () {
			elm.style.display = 'none';
		}, ms);
	}
};
const show = function (elm) {
	elm.style.display = 'block';
	setTimeout(function () {
		elm.style.transform = '';
		elm.style.opacity = '1';
	}, 10);
};
// hide(portfolioBoxs[0]);
