const btnConvert = document.getElementById("convert");
const unit = document.getElementById("unit");
let meters = document.getElementById("meters");
let litters = document.getElementById("litters");
let kilos = document.getElementById("kilos");

function unitCal() {
    let unitVal = unit.value;
    meters.textContent = `
        ${unitVal} meters = ${3.281 * unitVal} feet |
        ${unitVal} feet = ${(unitVal / 3.281).toFixed(3)} meters
    `;

    litters.textContent = `
        ${unitVal} liters  = ${0.264 * unitVal} gallon |
        ${unitVal} gallon = ${(unitVal / 0.264).toFixed(3)} liters
    `;

    kilos.textContent = `
        ${unitVal} kilogram  = ${2.204 * unitVal} pounds  |
        ${unitVal} pounds = ${(unitVal / 2.204).toFixed(3)} kilogram
    `;
}

btnConvert.addEventListener("click", unitCal);

unitCal();
