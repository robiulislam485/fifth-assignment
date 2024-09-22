function getValueFromInput(id){
    const getInputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(getInputValue);
    return inputNumber;
};