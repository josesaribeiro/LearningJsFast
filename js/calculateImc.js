// Personal Title
var title = document.querySelector('.personal-title');
var userName = 'Paulo'; // prompt('What is your name?');
title.textContent = 'Welcome ' + userName;

// calculatin imd 
function calculateImc(weight, hight) {
  var imc = weight / (hight * hight);
  return imc.toFixed(2);
}

function calculateOldImc() {
  var weightIsOk = true;
  var weightMax = 400;
  var weightMin = 0;
  var hightIsOk = true;
  var hightMax = 3.00;
  var hightMin = 0;
  var eWeightInvalid = ('Weight is not valid. Lesser than ' + weightMin + ' or higher than ' + weightMax)
  var eHightInvalid = ('Hight is not valid. Lesser than ' + hightMin + ' or higher than ' + hightMax)


  var patients = document.querySelectorAll('.paciente');

  for (var i = 0; i < patients.length; i += 1) {
    var patient = patients[i];

    var imc = patient.querySelector('.info-imc');

    var weight = patient.querySelector('.info-peso').textContent;
    var hight = patient.querySelector('.info-altura').textContent;

    weightIsOk = (weight > weightMin && weight < weightMax);
    hightIsOk = (hight > hightMin && hight < hightMax);

    if (weightIsOk && hightIsOk) {
      imc.textContent = calculateImc(weight, hight);
    } else {
      if (!weightIsOk) imc.textContent = eWeightInvalid;
      if (!hightIsOk) imc.textContent += eHightInvalid;
      patient.classList.add('invalid-patient');
    }
  }
}
calculateOldImc();

