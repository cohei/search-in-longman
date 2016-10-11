const selected = document.getSelection();
const word = window.prompt('Search in Longman: ', selected);

if (word) {
  window.open('http://www.ldoceonline.com/search/?q=' + word);
}
