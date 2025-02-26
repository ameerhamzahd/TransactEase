const cashoutBtn = document.getElementById('cashout-btn');

cashoutBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const amountToWithdraw = document.getElementById('amount-to-withdraw').value;
    const amount = parseFloat(amountToWithdraw);
    const agentNumber = document.getElementById('agent-number').value;
    const pinNumber = document.getElementById('cashout-pin-number').value;
    
    if (agentNumber.length === 11  && pinNumber === '021223') {
        let availableBalance = document.getElementById('available-balance').innerText;
        let totalAmount = parseFloat(availableBalance);
        totalAmount = totalAmount - amount;
        document.getElementById('available-balance').innerText = totalAmount + '.00';
    } else {
        alert('Invalid Information. Try Again!');
    }
});