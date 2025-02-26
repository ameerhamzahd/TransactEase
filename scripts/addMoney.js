const addMoneyBtn = document.getElementById('add-money-btn');

addMoneyBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const amountToAdd = document.getElementById('amount-to-add').value;
    const amount = parseFloat(amountToAdd);
    const bankAccountNumber = document.getElementById('bank-account-number').value;
    const pinNumber = document.getElementById('add-money-pin-number').value;
    
    if (bankAccountNumber.length === 11  && pinNumber === '021223') {
        let availableBalance = document.getElementById('available-balance').innerText;
        let totalAmount = parseFloat(availableBalance);
        totalAmount = totalAmount + amount;
        document.getElementById('available-balance').innerText = totalAmount + '.00';
    } else {
        alert('Invalid Information. Try Again!');
    }
});