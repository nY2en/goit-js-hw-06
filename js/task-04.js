const refs = {
    value: document.querySelector('#value'),
    btnIncr: document.querySelector('[data-action=increment]'),
    btnDecr: document.querySelector('[data-action=decrement]'),
};

let counterValue = 0;

refs.btnIncr.addEventListener('click', onBtnIncrement);
refs.btnDecr.addEventListener('click', onBtnDecrement);

function onBtnIncrement() {
    counterValue += 1;
    refs.value.textContent = counterValue;
}

function onBtnDecrement() {
    counterValue -= 1;
    refs.value.textContent = counterValue;
}
