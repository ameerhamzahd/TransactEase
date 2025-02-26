const addMoneySelection = document.getElementById('add-money-selection');
const cashoutSelection = document.getElementById('cashout-selection');
const transferMoneySelection = document.getElementById('transfer-money-selection');
const getBonusSelection = document.getElementById('get-bonus-selection');
const payBillSelection = document.getElementById('pay-bill-selection');
const transactionsSelection = document.getElementById('transactions-selection');

addMoneySelection.addEventListener('click', () => {
    document.getElementById('add-money-container').style.display = 'block';
    document.getElementById('cashout-container').style.display = 'none';
    document.getElementById('transfer-money-container').style.display = 'none';
    document.getElementById('get-bonus-container').style.display = 'none';
    document.getElementById('pay-bill-container').style.display = 'none';
    document.getElementById('transactions-container').style.display = 'none';
});

cashoutSelection.addEventListener('click', () => {
    document.getElementById('add-money-container').style.display = 'none';
    document.getElementById('cashout-container').style.display = 'block';
    document.getElementById('transfer-money-container').style.display = 'none';
    document.getElementById('get-bonus-container').style.display = 'none';
    document.getElementById('pay-bill-container').style.display = 'none';
    document.getElementById('transactions-container').style.display = 'none';
});

transferMoneySelection.addEventListener('click', () => {
    document.getElementById('add-money-container').style.display = 'none';
    document.getElementById('cashout-container').style.display = 'none';
    document.getElementById('transfer-money-container').style.display = 'block';
    document.getElementById('get-bonus-container').style.display = 'none';
    document.getElementById('pay-bill-container').style.display = 'none';
    document.getElementById('transactions-container').style.display = 'none';
});

getBonusSelection.addEventListener('click', () => {
    document.getElementById('add-money-container').style.display = 'none';
    document.getElementById('cashout-container').style.display = 'none';
    document.getElementById('transfer-money-container').style.display = 'none';
    document.getElementById('get-bonus-container').style.display = 'block';
    document.getElementById('pay-bill-container').style.display = 'none';
    document.getElementById('transactions-container').style.display = 'none';
});

payBillSelection.addEventListener('click', () => {
    document.getElementById('add-money-container').style.display = 'none';
    document.getElementById('cashout-container').style.display = 'none';
    document.getElementById('transfer-money-container').style.display = 'none';
    document.getElementById('get-bonus-container').style.display = 'none';
    document.getElementById('pay-bill-container').style.display = 'block';
    document.getElementById('transactions-container').style.display = 'none';
});

transactionsSelection.addEventListener('click', () => {
    document.getElementById('add-money-container').style.display = 'none';
    document.getElementById('cashout-container').style.display = 'none';
    document.getElementById('transfer-money-container').style.display = 'none';
    document.getElementById('get-bonus-container').style.display = 'none';
    document.getElementById('pay-bill-container').style.display = 'none';
    document.getElementById('transactions-container').style.display = 'block';
});