const form = document.getElementById("tipForm");
const billInput = document.getElementById("bill");
const tipRange = document.getElementById("tipRange");
const tipPercent = document.getElementById("tipPercent");
const tipAmount = document.getElementById("tipAmount");
const totalTax = document.getElementById("totalTax");
const totalTip = document.getElementById("totalTip");
const currency = document.getElementById("currency");

form.addEventListener("input", calculate);

function calculate() {
    let bill = parseFloat(billInput.value);
    let tip = parseFloat(tipRange.value);

    // Validation
    if (isNaN(bill) || bill < 0) {
        resetFields();
        return;
    }

    if (bill === 0) {
        resetFields();
        return;
    }

    // Calculations
    let tipAmt = (bill * tip) / 100;
    let tax = bill * 0.11;
    let totalWithTax = bill + tax;
    let totalWithTip = bill + tipAmt;

    // Currency conversion
    let rate = 1;
    if (currency.value === "inr") rate = 83;
    if (currency.value === "eur") rate = 0.92;

    tipPercent.value = tip + "%";
    tipAmount.value = (tipAmt * rate).toFixed(2);
    totalTax.value = (totalWithTax * rate).toFixed(2);
    totalTip.value = (totalWithTip * rate).toFixed(2);
}

function resetFields() {
    tipPercent.value = "";
    tipAmount.value = "";
    totalTax.value = "";
    totalTip.value = "";
}