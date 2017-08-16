var buttonAdd = document.querySelector('#adicionar-paciente');
var newPatient = window.newPatient;
var calculateImc = window.calculateImc;

function formValueOk(form) {
  var weightIsOk = calculateImc.validateWeight(weight);
  var hightIsOk = calculateImc.validateHight(hight);
  var formNotNull = form.nome.value !== '' && form.peso.value !== '' && form.altura.value !== '' && form.gordura.value !== '';

  return weightIsOk && hightIsOk && formNotNull;
}

function newPatientData(form) {
  var patient = {
    name: form.nome.value,
    weight: form.peso.value,
    hight: form.altura.value,
    fat: form.gordura.value,
    imc: calculateImc.calculateImc(form.peso.value, form.altura.value)
  };
  return patient;
}

buttonAdd.addEventListener('click', function createNewPatients(event) {
  event.preventDefault();

  var form = document.querySelector('#form-adiciona');

  if (formValueOk(form)) {
    newPatient.createNewPatient(newPatientData(form));
    form.reset();
  } else {
    alert('Há valeres preenchidos incorretamento ou não preenchidos no formulário');
  }
});

// function objectValidator(patient) {
//   var result = true;
//   var objectKeys = Object.keys(patient);

//   for (var i = 0; i < objectKeys.length; i += 1) {
//     var element = objectKeys[i];
//     if (!patient[element]) {
//       result = false;
//     }
//     return result;
//   }
// }
