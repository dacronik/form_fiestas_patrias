const loginBtn = document.querySelector('.login-btn');
const registerBtn = document.querySelector('.register-btn');
const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.register-form');

loginBtn.addEventListener('click', () =>{
    loginBtn.classList.add('active');
    registerBtn.classList.remove('active');
    loginForm.classList.add('show');
    registerForm.classList.remove('show');
})

registerBtn.addEventListener('click', () =>{
    loginBtn.classList.remove('active');
    registerBtn.classList.add('active');
    loginForm.classList.remove('show');
    registerForm.classList.add('show');
});