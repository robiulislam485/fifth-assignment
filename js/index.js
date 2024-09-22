document.getElementById('first-donate-button').addEventListener('click', function(){
    const firstInputValue = getValueFromInput('first-donate-input');
    const currentAmount = document.getElementById('first-donate-current-amount').innerText;
    const finalAmount = firstInputValue + parseFloat(currentAmount);
    if( firstInputValue > 0 && typeof(firstInputValue) === 'number'){
        document.getElementById('first-donate-current-amount').innerText = finalAmount;
    }
    else{
        alert('Invalid Amount!')
    }
});