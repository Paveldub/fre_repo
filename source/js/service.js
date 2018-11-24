const formData = document.getElementById('formData');
const nameInputError = document.getElementById('nameInputError');
const phoneInputError = document.getElementById('phoneInputError');
const emailInputError = document.getElementById('emailInputError');
const checkboxInputError = document.getElementById('checkboxInputError');

if (formData) {
    formData.addEventListener('submit', e => {
        e.preventDefault();
    
        const nameInput = formData.elements['nameInput'];
        const phoneInput = formData.elements['phoneInput'];
        const emailInput = formData.elements['emailInput'];
        const checkboxInput = formData.elements['checkboxInput'];
        const params = 'nameInput=' + encodeURIComponent(nameInput) + '&phoneInput' + encodeURIComponent(phoneInput) + '&emailInput' + encodeURIComponent(emailInput) + '&checkboxInput' + encodeURIComponent(checkboxInput);
    
        if (nameInput.value === '') {
            nameInput.style.border = '1px solid red';
            nameInputError.textContent = 'Обязательно поле для ввода';
        } else {
            nameInput.style.border = '1px solid green';
            nameInputError.textContent = '';
        }
    
        if (phoneInput.value === '') {
            phoneInput.style.border = '1px solid red';
            phoneInputError.textContent = 'Обязательно поле для ввода';
        } else {
            phoneInput.style.border = '1px solid green';
            phoneInputError.textContent = '';
        }
    
        if (emailInput.value === '') {
            emailInput.style.border = '1px solid red';
            emailInputError.textContent = 'Обязательно поле для ввода';
        } else {
            const emailIsValid = emailInput.value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
    
            if (emailIsValid) {
                emailInput.style.border = '1px solid green';
                emailInputError.textContent = '';
            } else {
                emailInput.style.border = 'Обязательно поле для ввода';
                emailInputError.textContent = '';
            }    
        }

        if (checkboxInput.checked) {
            checkboxInputError.textContent = '';
        } else {
            checkboxInputError.textContent = 'Обязательно поле для ввода';
        }
    
        const xhr = new XMLHttpRequest();
    
        xhr.open('POST', '');
    
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
        xhr.onload= function() {
            nameInput.value = '';
            phoneInput.value = '';
            emailInput.value = '';
        }
    
        xhr.send(params);
    });
}

const phoneInput = document.getElementById('phoneInput');

if (phoneInput) {
    phoneInput.addEventListener('keydown', () => {
        const isDigit = false;
        const isControls = false;
    
        if (e.key > 0 || e.key < 9) {
            isDigit = true;
        }
    
        if (e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 8 || e.key === '-' || e.key === '+' || e.keyCode === 9) {
            isControls = true;
        }
    
        if(!isDigit && !isControls) {
            e.preventDefault();
        }
    });
}
