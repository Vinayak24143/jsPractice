checkBtn = document.getElementById('check-btn');
resetBtn = document.getElementById('reset-btn');
successDiv = document.getElementById('success-msg');
numberInput = document.getElementById('number-input');
randomNumber = null;
historydiv = document.getElementById('guess-history');

window.onload = () => {
    randomNumber = Math.floor((Math.random() * 100) + 1);
};
function checkNumber(num) {

    number = parseInt(num);
    if (isNaN(number) || (number.toString().length != num.length)) {
        return ""
    }
    if (number > randomNumber) {
        let history = '<div class="history-item">Guess ' + number.toString() + ' is greater than actual number</div>'
        history += historydiv.innerHTML
        historydiv.innerHTML = history;
    }
    else if (number < randomNumber) {
        let history = '<div class="history-item">Guess ' + number.toString() + ' is less than actual number</div>'
        history += historydiv.innerHTML
        historydiv.innerHTML = history;
    }
    else {
        let history = '<div class="history-item">Guess ' + number.toString() + ' is the actual number</div>'
        history += historydiv.innerHTML
        historydiv.innerHTML = history;
        successDiv.style.display = 'block';
        numberInput.disabled = true;
    }
}

checkBtn.addEventListener('click', () => {
    number = numberInput.value;
    numberInput.value = "";
    checkNumber(number);
});

resetBtn.addEventListener('click', () => {
    historydiv.innerHTML = "";
    successDiv.style.display = 'none';
    numberInput.disabled = false;
    randomNumber = Math.floor((Math.random * 100) + 1);
});
