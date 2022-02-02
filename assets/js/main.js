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
	portfolioBoxs.forEach(async box => {
		if (category === 'all') {
			box.classList.remove('disable');
		} else if (box.dataset.category !== category) {
			box.classList.add('disable');
		} else {
			box.classList.remove('disable');
		}
	});
};
