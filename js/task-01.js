const categoriesRef = document.querySelector('#categories');

const numberOfCategories = categoriesRef.children.length;

console.log(`Number of categories: ${numberOfCategories}`);

const categoriesTypes = [...categoriesRef.children].forEach(type => {
    const categoryType = type.firstElementChild.textContent;
    const numberOfElements = type.lastElementChild.children.length;

    console.log(`\nCategory: ${categoryType} \nElements: ${numberOfElements}`);
});
