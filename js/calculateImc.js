window.calculateImc = (function calculateImc() {
  var patientWeight = {
    max: 400,
    min: 0
  };

  var patientHight = {
    max: 3.00,
    min: 0
  };

  var errors = {
    weight: ('Weight is not valid. Lesser than ' + patientWeight.min + ' or higher than ' + patientWeight.max),
    hight: ('Hight is not valid. Lesser than ' + patientHight.min + ' or higher than ' + patientHight.max)
  };

  function calculateImc(weight, hight) {
    var imc = weight / (hight * hight);
    return imc.toFixed(2);
  }

  function validateWeight(weight) {
    return weight > patientWeight.min && weight < patientWeight.max;
  }

  function validateHight(hight) {
    return hight > patientHight.min && hight < patientHight.max;
  }

  function calculateOldImc() {
    var patients = document.querySelectorAll('.paciente');

    for (var i = 0; i < patients.length; i += 1) {
      var patient = patients[i];

      var imc = patient.querySelector('.info-imc');
      var weight = patient.querySelector('.info-peso').textContent;
      var hight = patient.querySelector('.info-altura').textContent;

      var weightIsOk = validateWeight(weight);
      var hightIsOk = validateHight(hight);

      if (weightIsOk && hightIsOk) {
        imc.textContent = calculateImc(weight, hight);
      } else {
        if (!weightIsOk) {
          imc.textContent = errors.weight;
        }

        if (!hightIsOk) {
          imc.textContent = errors.hight;
        }

        if (!weightIsOk && !hightIsOk) {
          imc.textContent = (errors.weight + '. ' + errors.hight);
        }
        patient.classList.add('invalid-patient');
      }
    }
  }
  return {
    validateWeight: validateWeight(),
    validateHight: validateHight(),
    calculateOldImc: calculateOldImc()
  };
}());
