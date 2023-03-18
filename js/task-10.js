function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const refs = {
    input: document.querySelector('.controls, input'),
    createBtn: document.querySelector('[data-create]'),
    destroyBtn: document.querySelector('[data-destroy]'),
    boxes: document.querySelector('#boxes'),
};

refs.input.addEventListener('change', onInputChange);
refs.createBtn.addEventListener('click', onCreateBtnClick);
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);

function onInputChange(event) {
    createBlocks(event.currentTarget.value);
}

function onCreateBtnClick() {
}

function onDestroyBtnClick() {
    refs.boxes.innerHTML = '';
}

function createBlocks(number) {
    const blocks = [];
    let length = 30;
    for (let i = 1; i <= number; i += 1) {
        const block = document.createElement('div');
        block.style.width = `${length}px`;
        block.style.height = `${length}px`;
        block.style.backgroundColor = getRandomHexColor();
        blocks.push(block);
        length += 10;
    }
    boxes.append(...blocks);
}