const refs = {
    input: document.querySelector('#name-input'),
    name: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    const DEFAULT_USER_NAME = 'Anonymous';
    refs.input.value !== ''
        ? (refs.name.textContent = event.currentTarget.value)
        : (refs.name.textContent = DEFAULT_USER_NAME);
}
