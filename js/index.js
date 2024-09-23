const blogButton = document.getElementById('blog-button');
blogButton.addEventListener('click', function(){
    window.location.href = '/blog.html';
});



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

const donationTab = document.getElementById('doanation-button');
const historyTab = document.getElementById('history-button');
historyTab.addEventListener('click', function(){
    
    donationTab.classList.remove('bg-buttonColor');
    historyTab.classList.remove('bg-coinColor');
    historyTab.classList.add('bg-buttonColor');
    document.getElementById('card-section').classList.add('hidden');
});
donationTab.addEventListener('click', function(){
    historyTab.classList.remove('bg-buttonColor');
    donationTab.classList.add('bg-buttonColor');
    document.getElementById('card-section').classList.remove('hidden');
})