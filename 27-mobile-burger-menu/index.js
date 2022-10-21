const elExpand = document.getElementById('expand');
const elSettings = document.getElementById('settings');

elExpand.addEventListener('click', () => addShown(elSettings));

function addShown(element) {
  element.classList.add('shown');
  element.addEventListener('click', (e) => removeShown(element, e));
}

function removeShown(element, e) {
  if (e.target === element) {
    element.classList.remove('shown');
  }
}
