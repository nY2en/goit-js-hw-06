const refs = {
    inputRef: document.querySelector('#name-input'),
    nameRef: document.querySelector('#name-output'),
};

refs.inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (refs.inputRef.value !== '') {
        refs.nameRef.textContent = event.currentTarget.value;
    } else refs.nameRef.textContent = 'Anonymous';
}
