var letterInput = document.getElementById('letters');
var foundWords = document.getElementById('words');

var findWords = function() {
  foundWords.innerHTML = ScrabbleWordFinder.find(letterInput.value.toLowerCase()).join('\n');
};
