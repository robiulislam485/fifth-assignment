function getValueFromInput(id){
    const getInputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(getInputValue);
    return inputNumber;
};
function getValueFromText(id){
    const getTextValue = document.getElementById(id).innerText;
    const textNumber =parseFloat(getTextValue);
    return textNumber;
}