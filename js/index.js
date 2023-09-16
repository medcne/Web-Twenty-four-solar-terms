const shell = document.querySelector('.shell')
const slide_bar = document.querySelector('.slide_bar')
const jump = document.querySelector('#jump')
console.log(slide_bar);
shell.addEventListener('click', function(e) {
	if (e.target.tagName === 'A') {
		console.log(e.target.offsetTop);
		slide_bar.style.transform = `translateY(${e.target.offsetTop - 9}px)`
		document.querySelector('.shell .active').classList.remove('active')
		e.target.classList.add('active')
		const src = e.target.dataset.name
		jump.src = `${src}.html`

	} else if (e.target.tagName === 'I' || e.target.tagName === 'SPAN') {

		document.querySelector('.shell .active').classList.remove('active')
		slide_bar.style.transform = `translateY(${e.target.parentElement.offsetTop - 9}px)`
		e.target.parentElement.classList.add('active')
		const src = e.target.parentElement.dataset.name
		jump.src = `${src}.html`
	}

})