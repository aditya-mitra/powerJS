const inputs = document.querySelectorAll('input');

function handleChange () {
	console.log('triggered')
	let suffix = this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}

inputs.forEach(input=>input.addEventListener('change', handleChange));
inputs.forEach(input=>input.addEventListener('mousemove', handleChange))