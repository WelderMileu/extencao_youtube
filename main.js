const barraDeMenu = document.querySelector("#container");
const input = document.querySelector("form #container #search-input input");
const form = document.querySelector("#search-form")

const interval = setInterval(() => {
	if(barraDeMenu) {
		clearInterval(interval)

		const canais = [
			'-- Selecionar canal --',
			'Pamela Drudi',
			'Lucas Lira',
			'Codigo Fonte Tv',
			'Roketseat',
			'Vlog da Si'
		]

		const select = document.createElement('select')
		select.classList.add('form-control')
		
		canais.forEach(item => {
			const option = document.createElement('option')
			option.innerHTML = item;
			option.value = item;
			select.appendChild(option)
		})

		barraDeMenu.appendChild(select)

		
		select.addEventListener('change', (e) => {
			input.value = e.target.value;
			form.submit();
		})	
	}
}, 100)

