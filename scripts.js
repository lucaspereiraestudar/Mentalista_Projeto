var numeroSecreto = 581;
var attempts = 0;

function checkGuess() {
  var userGuess = parseInt(document.getElementById('userGuess').value);
  var resultDisplay = document.getElementById('result');

  if (userGuess === numeroSecreto) {
    resultDisplay.textContent = 'Acertou!';
  } else if (userGuess > numeroSecreto) {
    resultDisplay.textContent = 'Errou... O número secreto é menor';
  } else if (userGuess < numeroSecreto) {
    resultDisplay.textContent = 'Errou... O número secreto é maior';
  } else {
    resultDisplay.textContent = 'Digite um número válido entre 1 e 1000';
  }

  attempts++;

  if (attempts >= 3 && userGuess !== numeroSecreto) {
    resultDisplay.textContent = 'Suas tentativas acabaram. O número secreto era ' + numeroSecreto;
    document.getElementById('userGuess').setAttribute('disabled', 'disabled');
  }
}
