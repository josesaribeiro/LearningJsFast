var buttonAdd = document.querySelector('#adicionar-paciente');

function formValueOk(Name, Weight, Hight, Fat) {
  return Name != '' && Weight != '' && Hight != '' && Fat != '';
}
function addNewPatient(Name, Weight, Hight, Fat) {
  var table = document.querySelector('#tabela-pacientes');
  var newPatientTr = document.createElement('tr');

  var NameTd = document.createElement('td');
  var WeightTd = document.createElement('td');
  var HightTd = document.createElement('td');
  var FatTd = document.createElement('td');
  var ImcTd = document.createElement('td');

  NameTd.textContent = Name;
  WeightTd.textContent = Weight;
  HightTd.textContent = Hight;
  FatTd.textContent = Fat;
  ImcTd.textContent = 0;

  newPatientTr.appendChild(NameTd);
  newPatientTr.appendChild(WeightTd);
  newPatientTr.appendChild(HightTd);
  newPatientTr.appendChild(FatTd);
  newPatientTr.appendChild(ImcTd);

  table.appendChild(newPatientTr);
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
