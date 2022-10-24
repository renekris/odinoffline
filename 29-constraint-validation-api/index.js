(() => {
  class EnteredData {
    constructor(email, country, zip, password, passwordConfirm) {
      this.email = email.value;
      this.country = country.value;
      this.zip = zip.value;
      this.password = password.value;
      this.passwordConfirm = passwordConfirm.value;
    }
  }

  const elForm = Array.from(document.getElementsByClassName('form'))[0];
  elForm.addEventListener('submit', submitData);

  const elEmail = document.getElementById('email');
  elEmail.addEventListener('invalid', () => check().email(elEmail));
  elEmail.addEventListener('blur', () => check().email(elEmail));

  const elCountry = document.getElementById('country');
  elCountry.addEventListener('invalid', () => check().country(elCountry));
  elCountry.addEventListener('blur', () => check().country(elCountry));

  const elZip = document.getElementById('zip');
  elZip.addEventListener('invalid', () => check().zip(elZip));
  elZip.addEventListener('blur', () => check().zip(elZip));

  const elPassword = document.getElementById('password');
  elPassword.addEventListener('invalid', () => check().password(elPassword));
  elPassword.addEventListener('blur', () => check().password(elPassword));

  const elPasswordConfirm = document.getElementById('password-confirm');
  elPasswordConfirm.addEventListener('invalid', () => check().passwordConfirm(elPasswordConfirm));
  elPasswordConfirm.addEventListener('blur', () => check().passwordConfirm(elPasswordConfirm));

  let enteredData = {};

  function submitData(e) {
    e.preventDefault();
    updateEnteredData();
    console.log(enteredData);

    // using return so it would only check once and not more then that
    if (check().validity(check().email(elEmail))) return;
    if (check().validity(check().country(elCountry))) return;
    if (check().validity(check().zip(elZip))) return;
    if (check().validity(check().password(elPassword))) return;
    if (check().validity(check().passwordConfirm(elPasswordConfirm))) return;


    if (e.target.checkValidity()) {
      console.log('EVERYTHING IS CORRECT');
    }
  }

  function updateEnteredData() {
    console.log('entered data update')
    enteredData = new EnteredData(...Array.from(elForm));
  }

  function check() {
    updateEnteredData();

    function email(element) {
      if (element.value === "") {
        element.setCustomValidity('Please enter your email');
      } else if (element.validity.typeMismatch) {
        element.setCustomValidity('Incorrect format');
      } else {
        element.setCustomValidity('');
      }

      return element;
    }

    function country(element) {
      if (element.value === "") {
        element.setCustomValidity('Please enter your country');
      } else {
        element.setCustomValidity('');
      }

      return element;
    }

    function zip(element) {
      if (element.value === "") {
        element.setCustomValidity('Please enter your zip');
      } else if (!element.value.match(/[0-9]{5}/)) {
        element.setCustomValidity('Follow this format [0-9]{5}');
      } else {
        element.setCustomValidity('');
      }

      return element;
    }

    function password(element) {
      if (element.value === "") {
        element.setCustomValidity('Please enter your password');
      } else if (!element.value.match(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)) {
        element.setCustomValidity('Password has to have UpperCase, LowerCase, Number/SpecialChar and min 8 Chars');
      } else {
        element.setCustomValidity('');
      }

      return element;
    }

    function passwordConfirm(element) {
      if (element.value === "") {
        element.setCustomValidity('Entered value has to be equal to password');
      } else if (enteredData.password !== enteredData.passwordConfirm) {
        element.setCustomValidity('Make sure the passwords are the same in both of the fields');
      } else {
        element.setCustomValidity('');
      }

      return element;
    }

    function validity(element) {
      if (!element.checkValidity()) {
        element.reportValidity();
        return true;
      } else {
        return false;
      }
    }

    return {
      email,
      country,
      zip,
      password,
      passwordConfirm,
      validity
    }
  }

})();
