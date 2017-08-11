// alert('Check the console.');
console.log('Using my log');
// console.log(document);

// Personal Title
var title = document.querySelector('.personal-title');
var oldTitle = title.textContent;
var userName = prompt('What is your name?');
title.textContent = 'Welcome ' + userName;
console.log('Your old title was "' + oldTitle + '" and now is "' + title.textContent + '"');

// calculatin imd old

var patient = document.querySelector('#firstPatience');
var tdPeso = patient.querySelector('.info-peso');
var peso = tdPeso.textContent;
//--------
var weightPatientIsOk = true;
var hightPatientIsOk = true;

var weightPatient = document.querySelector('#firstPatience').querySelector('.info-peso').textContent;
weightPatientIsOk = !!(weightPatient > 0 && weightPatient < 400);

var hightPatient = document.querySelector('#firstPatience').querySelector('.info-altura').textContent;
hightPatientIsOk = !!(hightPatient > 0 && hightPatient < 3.00)

var imc = document.querySelector('#firstPatience').querySelector('.info-imc');

if (weightPatientIsOk && hightPatientIsOk) {
  var resultImc = weightPatient / (hightPatient * hightPatient);
  imc.textContent = resultImc;
} else if (!weightPatientIsOk) {
  imc.textContent = 'Weight not valid. Lesser than 0 or higher than 400';
} else {
  imc.textContent = 'Hight not valid. Lesser than 0 or higher than 3.00';
}
