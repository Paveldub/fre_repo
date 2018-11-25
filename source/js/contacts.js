let feedbackButton = document.getElementById('feedback');
let feedback = document.getElementById('feedbackPopup');
let closeButton = document.querySelector('.feedback-popup__closeButton');
let body = document.body;

if (feedbackButton) {
    feedbackButton.addEventListener('click', (e) => {
        e.preventDefault();
    
        feedback.classList.add('feedback-popup--active');
        body.classList.add('body--active');
    });
}

if (closeButton) {
    closeButton.addEventListener('click', () => {
        feedback.classList.remove('feedback-popup--active');
        body.classList.remove('body--active');
    });    
}

let print = document.getElementById('print');

if (print) {
    print.addEventListener('click', (e) => {
        e.preventDefault();
        window.print();
    });    
}

// form
const form = document.querySelector('.feedback-popup__form');
const nameError = document.getElementById('nameError');
const phoneError = document.getElementById('phoneError');
const emailError = document.getElementById('emailError');
const checkboxError = document.getElementById('checkboxError');
const textareaError = document.getElementById('textAreaError');
const textAreaValue = document.getElementById('textAreaValue');

if(form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
    
        const textArea = form.elements['textarea'];
        const name = form.elements['name'];
        const phone = form.elements['phone'];
        const email = form.elements['email'];
        const checkbox = form.elements['checkbox'];
        const params = 'name=' + encodeURIComponent(name) + '&phone' + encodeURIComponent(phone) + '&email' + encodeURIComponent(email) + '&checkbox' + encodeURIComponent(checkbox);
    
        if (textAreaValue.value === '') {
            textAreaValue.style.border = '1px solid red';
            textareaError.innerText = 'Обязательное поле для ввода';
        } else {
            textAreaValue.style.border = '1px solid green';
            textareaError.innerText = '';
        }
        
        if (name.value === '') {
            name.style.border = '1px solid red';
            nameError.innerText = 'Обязательное поле для ввода';
        } else {
            name.style.border = '1px solid green';
            nameError.innerText = '';
        }
    
        if (phone.value === '') {
            phone.style.border = '1px solid red';
            phoneError.innerText = 'Обязательное поле для ввода';
        } else {
            phone.style.border = '1px solid green';
            phoneError.innerText = '';
        }
    
        if (email.value === '') {
            email.style.border = '1px solid red';
            emailError.innerText = 'Обязательное поле для ввода';
        } else {
            const emailIsValid = email.value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
            if (emailIsValid) {
                email.style.border = '';
                emailError.textContent = '';
              } else {
                email.style.border = '1px solid red';
                emailError.textContent = 'Обязательное поле для ввода';
              }
        }
    
        if (checkbox.checked) {
            checkboxError.innerText = '';
        } else {
            checkboxError.innerText = 'Обязательное поле для ввода';
        }
    
        const xhr = new XMLHttpRequest();
        
        xhr.open('POST', '');
    
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
        xhr.onload = function() {
            name.value = '';
            email.value = '';
            phone.value = '';
            textArea.value = '';
        }
    
        xhr.send(params);
    });
}

const phoneNumber = document.getElementById('phoneNumber');

if(phoneNumber) {
    phoneNumber.addEventListener('keydown', e => {
        const isDigit = false;
        const isControls = false
    
    
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


