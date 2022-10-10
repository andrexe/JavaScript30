const inputs = document.querySelectorAll('.controls input');
function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    // console.log(this.name); this.name grabs the value from the input name attributes
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    // in the global document style, use the name attribute to change the --base / --spacing / --blur variable to the input value + the appropriate suffix set with the data-sizing attribute on the input elements
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('input', handleUpdate));