(function() {
  const selected = document.getSelection();
  const word = window.prompt('Search in Longman: ', selected);

  if (word) {
    window.open('https://www.ldoceonline.com/search/?q=' + word);
  }
})();
