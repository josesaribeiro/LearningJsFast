var buttonAdd = document.querySelector('#adicionar-paciente');

function formValueOk(patient) {
  debugger;
  var result = true;
  var objectkeys = Object.keys(patient);

  for (var i = 0; i < objectkeys.length; i += 1) {
    var element = objectkeys[i];
    if (!patient[element]) {
      result = false;
    }
    return result;
  }
}

function addNewPatient(patient) {
  var table = document.querySelector('#tabela-pacientes');
  var newPatientTr = document.createElement('tr');

  var NameTd = document.createElement('td');
  var WeightTd = document.createElement('td');
  var HightTd = document.createElement('td');
  var FatTd = document.createElement('td');
  var ImcTd = document.createElement('td');

  NameTd.textContent = patient.name;
  WeightTd.textContent = patient.weight;
  HightTd.textContent = patient.hight;
  FatTd.textContent = patient.fat;
  ImcTd.textContent = calculateImc(patient.weight, patient.hight);

  newPatientTr.appendChild(NameTd);
  newPatientTr.appendChild(WeightTd);
  newPatientTr.appendChild(HightTd);
  newPatientTr.appendChild(FatTd);
  newPatientTr.appendChild(ImcTd);

  table.appendChild(newPatientTr);
}

function createNewPatient() {
  var form = document.querySelector('#form-adiciona');

  // var nova
  var patient = newPatientData(form);

  function cleanFormValues() {
    form.nome.value = '';
    form.peso.value = '';
    form.altura.value = '';
    form.gordura.value = '';
  }

  if (formValueOk(patient)) {
    addNewPatient(patient);
    cleanFormValues();
  } else {
    alert('Há valeres não preenchidos no formulário');
  }
}
buttonAdd.addEventListener('click', function createNewPatients(event) {
  event.preventDefault();
  createNewPatient();
});

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
