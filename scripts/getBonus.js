const getBonusBtn = document.getElementById('get-bonus-btn');

getBonusBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const couponInput = document.getElementById("coupon-input").value.trim();
    const validCoupons = {
        "bonus100": 100,
        "discount50": 50,
        "free20": 20
    };

    if (couponInput === "") {
        alert('Please enter a coupon!');
    } else if (validCoupons[couponInput.toLowerCase()]) {
        const availableBalance = document.getElementById('available-balance').innerText;
        let totalAmount = parseFloat(availableBalance);
        const bonusAmount = validCoupons[couponInput.toLowerCase()];

        totalAmount = totalAmount + bonusAmount;
        document.getElementById('available-balance').innerText = totalAmount + '.00';
    } else {
        alert('Invalid coupon. Try again.');
    }
});