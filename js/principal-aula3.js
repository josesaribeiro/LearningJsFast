//alert('Check the console.');
console.log('Using my log');
//console.log(document);

//Personal Title
var title = document.querySelector('.personal-title');
var oldTitle = title.textContent;
var userName = 'Paulo'; //prompt('What is your name?');
title.textContent = 'Welcome ' + userName;
console.log('Your old title was "' + oldTitle + '" and now is "' + title.textContent + '"');

//calculatin imd 
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

  for (var i = 0; i < patients.length; i++) {
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
//eventos

var buttonAdd = document.querySelector('#adicionar-paciente');

function addNewPatient(newName, newWeight, newHight, newFat) {
  var table = document.querySelector('#tabela-pacientes');
  var newPatientTr = document.createElement('tr');

  var newNameTd = document.createElement('td');
  var newWeightTd = document.createElement('td');
  var newHightTd = document.createElement('td');
  var newFatTd = document.createElement('td');
  var newImcTd = document.createElement('td');

  newNameTd.textContent = newName;
  newWeightTd.textContent = newWeight;
  newHightTd.textContent = newHight;
  newFatTd.textContent = newFat;
  newImcTd.textContent = 0;

  newPatientTr.appendChild(newNameTd);
  newPatientTr.appendChild(newWeightTd);
  newPatientTr.appendChild(newHightTd);
  newPatientTr.appendChild(newFatTd);
  newPatientTr.appendChild(newImcTd);

  table.appendChild(newPatientTr);
}

function showMessage() {
  //console.log('Hi, i\'ve been clicked');
}

function formValueOk(newName, newWeight, newHight, newFat) {
  return newName != '' && newWeight != '' && newHight != '' && newFat != '';
}

function createNewPatient() {
  var form = document.querySelector('#form-adiciona');
  var newName = form.nome.value;
  var newWeight = form.peso.value;
  var newHight = form.altura.value;
  var newFat = form.gordura.value;

  function cleanFormValues() {
    form.nome.value = '';
    form.peso.value = '';
    form.altura.value = '';
    form.gordura.value = '';
  }

  if (formValueOk(newName, newWeight, newHight, newFat)) {
    addNewPatient(newName, newWeight, newHight, newFat);
    calculatingImc();
    cleanFormValues();
  } else {
    alert('Há valeres não preenchidos no formulário');
  }
}
buttonAdd.addEventListener('click', function (event) {
  event.preventDefault();
  createNewPatient();
});
