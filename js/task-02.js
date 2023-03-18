const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const ulIngredientsRef = document.querySelector('#ingredients');

const makeList = elements => {
    return elements.map(el => {
        const item = document.createElement('li');
        item.textContent = el;
        item.classList.add('item');
        return item;
    });
};

const elements = makeList(ingredients);

ulIngredientsRef.append(...elements);
