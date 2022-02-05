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
const setActiveCategory = category => {
	portfolioBoxs.forEach(box => {
		box.style =
			category === 'all'
				? ''
				: box.dataset.category === category
				? ''
				: 'display:none';
	});
};
