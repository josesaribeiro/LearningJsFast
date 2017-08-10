alert('Check the console.');
console.log('Olá mundo do JS');
console.log(document);
var tile = document.querySelector('.titulo-personalizado');
var oldTitle = tile.textContent;
var userName = prompt('What is your name?');
tile.textContent = userName + ' Nuticionista';
console.log('O título antigo era "' + oldTitle + '" e agora virou "' + tile.textContent + '"');