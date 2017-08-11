// alert('Check the console.');
console.log('Using my log');
// console.log(document);

// Personal Title
var title = document.querySelector('.personal-title');
var oldTitle = title.textContent;
var userName = 'Paulo'; // prompt('What is your name?');
title.textContent = 'Welcome ' + userName;
console.log('Your old title was "' + oldTitle + '" and now is "' + title.textContent + '"');

// calculatin imd 
function calculatingImc() {
  console.log('vim do click');
  var weightIsOk = true;
  var weightMax = 400;
  var weightMin = 0;
  var hightIsOk = true;
  var hightMax = 3.00;
  var hightMin = 0;
  var imcResult = 0;

  var patients = document.querySelectorAll('.paciente');

  for (var i = 0; i < patients.length; i += 1) {
    var patient = patients[i];

    var imc = patient.querySelector('.info-imc');

    var weight = patient.querySelector('.info-peso').textContent;
    var hight = patient.querySelector('.info-altura').textContent;

    weightIsOk = (weight > weightMin && weight < weightMax);
    hightIsOk = (hight > hightMin && hight < hightMax);

    if (weightIsOk && hightIsOk) {
      imcResult = (weight / (hight * hight));
      imc.textContent = imcResult.toFixed(2);
    } else if (!weightIsOk) {
      imc.textContent = ('Weight is not valid. Lesser than ' + weightMin + ' or higher than ' + weightMax);
      patient.classList.add('invalid-patient');
    } else {
      imc.textContent = ('Hight is not valid. Lesser than ' + hightMin + ' or higher than ' + hightMax);
      patient.classList.add('invalid-patient');
    }
  }
}
calculatingImc();
