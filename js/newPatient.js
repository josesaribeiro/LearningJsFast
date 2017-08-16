window.newPatient = (function newPatient() {
  function createNewTr(patient) {
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
    ImcTd.textContent = patient.imc;

    newPatientTr.appendChild(NameTd);
    newPatientTr.appendChild(WeightTd);
    newPatientTr.appendChild(HightTd);
    newPatientTr.appendChild(FatTd);
    newPatientTr.appendChild(ImcTd);
    return newPatientTr;
  }

  function createNewPatient(patient) {
    var table = document.querySelector('#tabela-pacientes');
    var newPatientTr = createNewTr(patient);
    table.appendChild(newPatientTr);
  }
  return {
    createNewTr: createNewTr,
    createNewPatient: createNewPatient
  };
}());
