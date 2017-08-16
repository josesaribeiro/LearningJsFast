window.newPatient = (function newPatient() {
  function _createNewTd(data, tdClass) {
    var patientTd = document.createElement('td');
    patientTd.textContent = data;
    patientTd.classList.add(tdClass);

    return patientTd;
  }

  function _createNewTr(patient) {
    var newPatientTr = document.createElement('tr');
    newPatientTr.classList.add('paciente');

    newPatientTr.appendChild(_createNewTd(patient.name, 'info-nome'));
    newPatientTr.appendChild(_createNewTd(patient.weight, 'info-peso'));
    newPatientTr.appendChild(_createNewTd(patient.hight, 'info-altura'));
    newPatientTr.appendChild(_createNewTd(patient.fat, 'info-gordura'));
    newPatientTr.appendChild(_createNewTd(patient.imc, 'info-imc'));

    return newPatientTr;
  }

  function createNewPatient(patient) {
    var table = document.querySelector('#tabela-pacientes');
    var newPatientTr = _createNewTr(patient);
    table.appendChild(newPatientTr);
  }
  return {
    createNewPatient: createNewPatient
  };
}());
