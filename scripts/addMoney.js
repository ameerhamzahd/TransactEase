const addMoneyBtn = document.getElementById('add-money-btn');

addMoneyBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const bankingSelection = document.getElementById('banking-selection').value;
    const amountToAdd = document.getElementById('amount-to-add').value;
    const amount = parseFloat(amountToAdd);
    const bankAccountNumber = document.getElementById('bank-account-number').value;
    const pinNumber = document.getElementById('add-money-pin-number').value;

    if(amount < 0) {
      alert("Invalid amount. Please enter a positive number.");
      return;
    }

    if (bankAccountNumber.length === 11 && pinNumber === '231185') {
        let availableBalance = document.getElementById('available-balance').innerText;
        let totalAmount = parseFloat(availableBalance);
        totalAmount = totalAmount + amount;
        document.getElementById('available-balance').innerText = totalAmount + '.00';

        const transactionsChildContainer = document.getElementById('transactions-child-container');

        const div = document.createElement('div');
        div.innerHTML =`
        <div class="flex flex-col gap-3 pt-5 items-center">
          <div class=" flex flex-col justify-center w-full max-w-sm shadow-xl card bg-base-100 shrink-0">
            <div class="flex justify-between p-5 items-center">
              <div class="">
                <div class="gap-3 flex justify-center items-center">
                  <img class="p-2 bg-slate-100 rounded-full" src="./resources/assets/wallet1.png" alt="wallet1">
                  <div>
                    <p class="text-[1rem] font-bold">৳ <span id="available-balance">${amount}</span></p>
                    <p class="text-[0.75rem] font-bold">${bankingSelection}</p>
                    <p class="text-[0.75rem]">A/C No: ${bankAccountNumber}</p>
                  </div>
                </div>
              </div>

              <svg class="hover:scale-110 hover:cursor-pointer" width="24" height="25" viewBox="0 0 24 25" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_11_8567)">
                  <path
                    d="M11 12.75C11 13.0152 11.1054 13.2696 11.2929 13.4571C11.4804 13.6446 11.7348 13.75 12 13.75C12.2652 13.75 12.5196 13.6446 12.7071 13.4571C12.8946 13.2696 13 13.0152 13 12.75C13 12.4848 12.8946 12.2304 12.7071 12.0429C12.5196 11.8554 12.2652 11.75 12 11.75C11.7348 11.75 11.4804 11.8554 11.2929 12.0429C11.1054 12.2304 11 12.4848 11 12.75Z"
                    stroke="#080808" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M11 19.75C11 20.0152 11.1054 20.2696 11.2929 20.4571C11.4804 20.6446 11.7348 20.75 12 20.75C12.2652 20.75 12.5196 20.6446 12.7071 20.4571C12.8946 20.2696 13 20.0152 13 19.75C13 19.4848 12.8946 19.2304 12.7071 19.0429C12.5196 18.8554 12.2652 18.75 12 18.75C11.7348 18.75 11.4804 18.8554 11.2929 19.0429C11.1054 19.2304 11 19.4848 11 19.75Z"
                    stroke="#080808" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M11 5.75C11 6.01522 11.1054 6.26957 11.2929 6.45711C11.4804 6.64464 11.7348 6.75 12 6.75C12.2652 6.75 12.5196 6.64464 12.7071 6.45711C12.8946 6.26957 13 6.01522 13 5.75C13 5.48478 12.8946 5.23043 12.7071 5.04289C12.5196 4.85536 12.2652 4.75 12 4.75C11.7348 4.75 11.4804 4.85536 11.2929 5.04289C11.1054 5.23043 11 5.48478 11 5.75Z"
                    stroke="#080808" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_11_8567">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.75)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
            `

        transactionsChildContainer.appendChild(div);
    } else {
        alert('Invalid Information. Try Again!');
    }
});