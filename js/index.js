const blogButton = document.getElementById('blog-button');
blogButton.addEventListener('click', function(){
    window.location.href = '/blog.html';
});


//   first card start
document.getElementById('first-donate-button').addEventListener('click', function(){
const firstInputValue = getValueFromInput('first-donate-input');
const currentAmount = getValueFromText('first-donate-current-amount');
const firstInputfinalAmount = firstInputValue + currentAmount;
const curentWallet = getValueFromText('current-wallet');
const currentWalletAmount = curentWallet -firstInputValue;
if( firstInputValue > 0 && typeof(firstInputValue) === 'number'){
    document.getElementById('first-donate-current-amount').innerText = firstInputfinalAmount;
    document.getElementById('current-wallet').innerText = currentWalletAmount;
}
else{
    alert('Invalid Amount!');
};
const historyItem = document.createElement('div');
historyItem.className = "p-10 border border-gray-400 rounded-xl mb-6 space-y-4";
historyItem.innerHTML = `
<h1 class="text-xl font-bold">${firstInputValue} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h1>
<p class="font-sm text-gray-400">${new Date().toLocaleDateString()}</p>
`;

const historyContainer = document.getElementById('history-list');
historyContainer.insertBefore(historyItem , historyContainer.firstChild);
});
//   first card end


// second card start
document.getElementById('second-donate-button').addEventListener('click', function(){
const secondInputValue = getValueFromInput('second-card-input');
const secondCardCurentAmount = getValueFromText('second-donate-current-amount');
const secondInputFinalAmount = secondCardCurentAmount + secondInputValue;
const curentWallet = getValueFromText('current-wallet');
const currentWalletAmount = curentWallet - secondInputValue;
if(secondInputValue > 0 && typeof(secondInputValue) === 'number'){
    document.getElementById('second-donate-current-amount').innerText = secondInputFinalAmount;
    document.getElementById('current-wallet').innerText = currentWalletAmount;
}
else{
    alert('Invalid Amount!')
}
const historyItem = document.createElement('div');
historyItem.className = "p-10 border border-gray-400 rounded-xl mb-6 space-y-4";
historyItem.innerHTML = `
<h1 class="text-xl font-bold">${secondInputValue} Taka is Donated for famine-2024 at Feni, Bangladesh</h1>
<p class="font-sm text-gray-400">${new Date().toLocaleDateString()}</p>
`;

const historyContainer = document.getElementById('history-list');
historyContainer.insertBefore(historyItem , historyContainer.firstChild);

});

// second card end


// third card start
document.getElementById('third-donate-button').addEventListener('click', function(){
const thirdInputValue = getValueFromInput('third-card-input');
const thirdCardCurentAmount = getValueFromText('third-card-donate-amount');
const thirdInputFinalAmount = thirdCardCurentAmount + thirdInputValue;
const curentWallet = getValueFromText('current-wallet');
const currentWalletAmount = curentWallet - thirdInputValue;
if(thirdInputValue > 0 && typeof(thirdInputValue) === 'number'){
    document.getElementById('third-card-donate-amount').innerText = thirdInputFinalAmount;
    document.getElementById('current-wallet').innerText = currentWalletAmount;
}
else{
    alert('Invalid Amount!')
}
const historyItem = document.createElement('div');
historyItem.className = "p-10 border border-gray-400 rounded-xl mb-6 space-y-4";
historyItem.innerHTML = `
<h1 class="text-xl font-bold">${thirdInputValue} Taka is Donated for Aid injured in the Quota Movement , Bangladesh</h1>
<p class="font-sm text-gray-400">${new Date().toLocaleDateString()}</p>
`;
const historyContainer = document.getElementById('history-list');
historyContainer.insertBefore(historyItem , historyContainer.firstChild);
});
// third card end


// history and donation button
const donationTab = document.getElementById('doanation-button');
const historyTab = document.getElementById('history-button');
historyTab.addEventListener('click', function(){
    donationTab.classList.remove('bg-buttonColor');
    historyTab.classList.remove('bg-coinColor');
    historyTab.classList.add('bg-buttonColor');
    document.getElementById('card-section').classList.add('hidden');
    document.getElementById('history-list').classList.remove('hidden');
});
donationTab.addEventListener('click', function(){
    historyTab.classList.remove('bg-buttonColor');
    donationTab.classList.add('bg-buttonColor');
    document.getElementById('card-section').classList.remove('hidden');
    document.getElementById('history-list').classList.add('hidden');
});