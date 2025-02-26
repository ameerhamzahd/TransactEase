const payNowBtn = document.getElementById('pay-now-btn');

payNowBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const amountToPay = document.getElementById('amount-to-pay').value;
    const amount = parseFloat(amountToPay);
    const billerAccountNumber = document.getElementById('biller-account-number').value;
    const pinNumber = document.getElementById('pay-bill-pin-number').value;
    
    if (billerAccountNumber.length === 11  && pinNumber === '021223') {
        let availableBalance = document.getElementById('available-balance').innerText;
        let totalAmount = parseFloat(availableBalance);
        totalAmount = totalAmount - amount;
        document.getElementById('available-balance').innerText = totalAmount + '.00';
    } else {
        alert('Invalid Information. Try Again!');
    }
});