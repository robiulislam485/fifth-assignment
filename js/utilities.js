function getValueFromInput(id){
    const getInputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(getInputValue);
    return inputNumber;
};
function getValueFromText(id){
    const getTextValue = document.getElementById(id).innerText;
    const textNumber =parseFloat(getTextValue);
    return textNumber;
};

function showModal(id){
    const modal = document.getElementById(id).classList.remove('hidden');
    const closeBtn = document.getElementById('close-btn').addEventListener('click', function(){
    document.getElementById('modal').classList.add('hidden');
    return modal , closeBtn;
    });
};

