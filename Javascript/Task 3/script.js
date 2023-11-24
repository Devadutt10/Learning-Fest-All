//Variables...

const container = document.querySelector('.container');
const emiCont = document.querySelector('.emi');
const submitBtn = document.querySelector('.submit-btn');
const emiContainer = document.querySelector('.emi-container');

// Event listener for submit button..
submitBtn.addEventListener('click', function () {
    const amount = parseFloat(document.querySelector('#amount').value);
    const rate = parseFloat(document.querySelector('#rate').value);
    const years = parseFloat(document.querySelector('#years').value);

    if (isNaN(amount) || isNaN(rate) || isNaN(years)) {
        alert("Please enter a valid number.");
    } 
    else {
        let emi = (amount * rate * (Math.pow(1 + rate, years)) / (Math.pow(1 + rate, years) - 1));
        emiContainer.innerHTML = emi.toFixed(2); // Format the EMI to two decimal places
        container.style.display = 'none';
        emiCont.style.display = 'flex';
    }
});