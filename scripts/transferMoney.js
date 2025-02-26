const sendNowBtn = document.getElementById('send-now-btn');

sendNowBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const amountToTransfer = document.getElementById('amount-to-transfer').value;
    const amount = parseFloat(amountToTransfer);
    const userAccountNumber = document.getElementById('user-account-number').value;
    const pinNumber = document.getElementById('transfer-money-pin-number').value;
    
    if (userAccountNumber.length === 11  && pinNumber === '021223') {
        let availableBalance = document.getElementById('available-balance').innerText;
        let totalAmount = parseFloat(availableBalance);
        totalAmount = totalAmount - amount;
        document.getElementById('available-balance').innerText = totalAmount + '.00';
    } else {
        alert('Invalid Information. Try Again!');
    }
});