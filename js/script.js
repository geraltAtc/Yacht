let darkButton = document.querySelector('.theme-button-dark');
let lightButton = document.querySelector('.theme-button-light');
let serifFontButton = document.querySelector('.font-button-serif');
let sansSerifFontButton =  document.querySelector('.font-button-sans-serif');
let articleSections  = document.querySelectorAll('.blog-article.short');
let tileViewButton = document.querySelector('.card-view-button-grid');
let standardViewButton = document.querySelector('.card-view-button-list');
let cardsList = document.querySelector('.cards');
let mainImage = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list li a');

darkButton.onclick = function() {
	document.body.classList.add('dark');
	lightButton.classList.remove('active');
	darkButton.classList.add('active');
};

lightButton.onclick = function() {
	document.body.classList.remove('dark');
	darkButton.classList.remove('active');
	lightButton.classList.add('active');
};

serifFontButton.onclick = function() {
	document.body.classList.add('serif');
	sansSerifFontButton.classList.remove('active');
	serifFontButton.classList.add('active');
};

sansSerifFontButton.onclick = function() {
	document.body.classList.remove('serif');
	serifFontButton.classList.remove('active');
	sansSerifFontButton.classList.add('active');
};

for (let articleSection of articleSections) {
	let moreButton = articleSection.querySelector('.more');
	moreButton.onclick = function() {
		articleSection.classList.remove('short');
	};
};

tileViewButton.onclick = function() {
	cardsList.classList.remove('list');
	standardViewButton.classList.remove('active');
	tileViewButton.classList.add('active');
};

standardViewButton.onclick = function() {
	cardsList.classList.add('list');
	tileViewButton.classList.remove('active');
	standardViewButton.classList.add('active');
};

for (let activeImage of previews) {
	activeImage.onclick = function(evt) {
		evt.preventDefault();
		mainImage.src = activeImage.href;
		let currentActive = document.querySelector('.preview-list. active-item');
		currentActive.classList.remove('active-item');
		activeImage.classList.add('active-item');
	};
};