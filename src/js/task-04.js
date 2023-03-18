const refs = {
    value: document.querySelector('#value'),
    btnIncr: document.querySelector('[data-action=increment]'),
    btnDecr: document.querySelector('[data-action=decrement]'),
};

let counterValue = 0;

refs.btnIncr.addEventListener('click', Increment);
refs.btnDecr.addEventListener('click', decrement);

function Increment() {
    counterValue += 1;
    refs.value.textContent = counterValue;
}

function decrement() {
    counterValue -= 1;
    refs.value.textContent = counterValue;
}
