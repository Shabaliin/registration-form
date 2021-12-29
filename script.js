'use strict'

// Получаем email
const email = document.getElementById('email-input');
email.addEventListener('input', (event) => {
    // Удалили все пробелы и записали как
    // новое значение input
    event.target.value = event.target.value.replaceAll(' ', '');
});

// Валидация email
const validateEmail = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.value.length === 0){
        emailError('Поле обязательно для заполнения');
        return false
    } else if(!re.test(email.value.toLowerCase())){
        emailError('Email невалидный');
        return false
    } else {
        emailError('');
        const inputLabel = document.querySelectorAll('.input-wrapper__label')[0];
        inputLabel.style.color = '#787878';
        const inputStar = document.querySelectorAll('.input-wrapper__star')[0];
        inputStar.style.color = '#787878';
        const input = document.querySelectorAll('.input-wrapper__input')[0];
        input.style.border = '2px solid #787878';
        return true
    }
}

// Обработка ошибки email
function emailError(errorText) {
    const error = document.querySelector('.input-wrapper__error-email');
    error.innerText = errorText;
    const inputLabel = document.querySelectorAll('.input-wrapper__label')[0];
    inputLabel.style.color = '#CB2424';
    const inputStar = document.querySelectorAll('.input-wrapper__star')[0];
    inputStar.style.color = '#CB2424';
    const input = document.querySelectorAll('.input-wrapper__input')[0];
    input.style.border = '2px solid #CB2424';

}

// Получаем password
const password = document.getElementById('password-input');
password.addEventListener('input', (event) => {
    // Удалили все пробелы
    event.target.value = event.target.value.replaceAll(' ', '');
});

// Валидация password
const passwordValidate = () => {
    if(password.value.length === 0){
        passwordError('Поле обязательно для заполнения');
        return false
    }
    if(password.value.length < 8){
        passwordError('Пароль должен содержать как минимум 8 символов');
        return false
    } else {
        passwordError('');
        const inputLabel = document.querySelectorAll('.input-wrapper__label')[1];
        inputLabel.style.color = '#787878';
        const inputStar = document.querySelectorAll('.input-wrapper__star')[1];
        inputStar.style.color = '#787878';
        const input = document.querySelectorAll('.input-wrapper__input')[1];
        input.style.border = '2px solid #787878';
        return true
    }
}

// Обработка ошибки password
function passwordError(errorText) {
    const error = document.querySelector('.input-wrapper__error-password');
    error.innerText = errorText;
    const inputLabel = document.querySelectorAll('.input-wrapper__label')[1];
    inputLabel.style.color = '#CB2424';
    const inputStar = document.querySelectorAll('.input-wrapper__star')[1];
    inputStar.style.color = '#CB2424';
    const input = document.querySelectorAll('.input-wrapper__input')[1];
    input.style.border = '2px solid #CB2424';
}

// Получаем и проводим валидацию checkbox
const checkbox = document.getElementById('checkbox-input');
const checkboxValidate = () => {
    if(!checkbox.checked){
        checkboxError('Поле обязательно для заполнения');
        return false
    } else {
        checkboxError('');
        const checkboxStar = document.querySelectorAll('.checkbox-wrapper__star')[0];
        checkboxStar.style.color = '#787878';
        const checkboxMark = document.querySelectorAll('.checkbox-wrapper__mark')[0];
        checkboxMark.style.border = '2px solid #787878';
        return true
    }
}

// Обработка ошибки checkbox
function checkboxError(errorText) {
    const error = document.querySelector('.checkbox-wrapper__error');
    error.innerText = errorText;
    const checkboxStar = document.querySelectorAll('.checkbox-wrapper__star')[0];
    checkboxStar.style.color = '#CB2424';
    const checkboxMark = document.querySelectorAll('.checkbox-wrapper__mark')[0];
    checkboxMark.style.border = '2px solid #CB2424';
}

// При submit вызываем функции валидации
// При успешной валидации выводим в консоль введенные пользователем данные
const form = document.querySelector('.registration-form');
form.addEventListener('submit', (event) => {
    if(validateEmail() && passwordValidate() && checkboxValidate()){
        const userDate = {
            email: email.value,
            password: password.value
        }
        console.log(userDate);
    }
    event.preventDefault();
});
