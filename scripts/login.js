const loginBtn = document.getElementById('login-btn');
const inputMobileNumber = document.getElementById('input-mobile-number');
const inputPin = document.getElementById('input-pin');

loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const mobileNumber = inputMobileNumber.value;
    const pin = inputPin.value;
    if (mobileNumber.length === 11  && pin === '021223') {
        window.location.href = 'home.html';
    } else {
        alert('Invalid Information. Try Again!');
    }
});