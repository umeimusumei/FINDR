const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

const SignupForm = document.querySelector('.sign-up form');
const SigninForm = document.querySelector('.sign-in form');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

SigninForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const idInput = document.getElementById('signin-idnumber').value;
    const passwordInput = document.getElementById('signin-password').value;

    console.log('Sign In Attempt:', { idnumber: idInput, password: passwordInput });

    window.location.href = 'https://umeimusumei.github.io/FINDR/dashboard.html';
});

SignupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nameInput = document.getElementById('name-input').value;
    const idInput = document.getElementById('idnumber-input').value;
    const passwordInput = document.getElementById('password-input').value;

    console.log('Sign Up Attempt:', { name: nameInput, idnumber: idInput, password: passwordInput });

    window.location.href = 'https://umeimusumei.github.io/FINDR/dashboard.html';
});