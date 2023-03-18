function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const refs = {
    btn: document.querySelector('.change-color'),
    value: document.querySelector('.color'),
};

refs.btn.addEventListener('click', onBtnClick);

function onBtnClick() {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
    refs.value.textContent = color;
}
