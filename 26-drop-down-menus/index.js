const elDropDownList = Array.from(document.getElementsByClassName('drop-down-parent'));

for (let i = 0; i < elDropDownList.length; i++) {
  const element = elDropDownList[i];
  element.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-button')) {
      e.target.nextElementSibling.classList.toggle('drop-down-visible');
    }
  });
}
