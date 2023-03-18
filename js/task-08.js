const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', onFormChange);

function onFormChange(event) {
    event.preventDefault();

    const emailValue = event.currentTarget.elements.email.value;
    const pswValue = event.currentTarget.elements.password.value;

    emailValue === '' || pswValue === ''
        ? console.log(alert('All fileds must be filled'))
        : 1;

    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => console.log(`\n${name}: ${value}`));

    event.currentTarget.reset();
}
