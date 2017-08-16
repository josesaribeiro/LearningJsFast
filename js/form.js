var buttonAdd = document.querySelector('#adicionar-paciente');
var newPatient = window.newPatient;

function formValueOk(form) {
  return form.nome.value !== '' && form.peso.value !== '' && form.altura.value !== '' && form.gordura.value !== '';
}

function newPatientData(form) {
  var patient = {
    name: form.nome.value,
    weight: form.peso.value,
    hight: form.altura.value,
    fat: form.gordura.value,
    imc: calculateImc(form.peso.value, form.altura.value)
  };
  return patient;
}

function cleanFormValues(form) {
  form.nome.value = '';
  form.peso.value = '';
  form.altura.value = '';
  form.gordura.value = '';
}

buttonAdd.addEventListener('click', function createNewPatients(event) {
  event.preventDefault();

  var form = document.querySelector('#form-adiciona');

  if (formValueOk(form)) {
    var newPatientForm = newPatientData(form);
    newPatient.createNewPatient(newPatientForm);
    cleanFormValues(form);
  } else {
    alert('Há valeres não preenchidos no formulário');
  }
});

// function objectValidator(patient) {
//   var result = true;
//   var objectkeys = Object.keys(patient);

//   for (var i = 0; i < objectkeys.length; i += 1) {
//     var element = objectkeys[i];
//     if (!patient[element]) {
//       result = false;
//     }
//     return result;
//   }
// }
