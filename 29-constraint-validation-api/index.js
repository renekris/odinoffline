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
  elEmail.addEventListener('blur', () => check().email(elEmail));

  const elCountry = document.getElementById('country');
  elCountry.addEventListener('blur', () => check().country(elCountry));

  const elZip = document.getElementById('zip');
  elZip.addEventListener('blur', () => check().zip(elZip));

  const elPassword = document.getElementById('password');
  elPassword.addEventListener('blur', () => check().password(elPassword));

  const elPasswordConfirm = document.getElementById('password-confirm');
  elPasswordConfirm.addEventListener('blur', () => check().passwordConfirm(elPasswordConfirm));

  let enteredData = {};

  function submitData(e) {
    e.preventDefault();
    updateEnteredData();
    console.log(enteredData);

    // using return so it would only check once and not more then that
    check().email(elEmail);
    check().country(elCountry);
    check().zip(elZip);
    check().password(elPassword);
    check().passwordConfirm(elPasswordConfirm);


    if (e.target.checkValidity()) {
      console.log('EVERYTHING IS CORRECT');
      const elCorrectSpan = elForm.appendChild(document.createElement('span'));
      elCorrectSpan.className = 'correct';
      elCorrectSpan.textContent = 'Data sent to imaginary server';
      document.querySelector('button[type="submit"]').disabled = true;
    }
  }

  function updateEnteredData() {
    console.log('entered data update')
    enteredData = new EnteredData(...Array.from(elForm));
  }

  function createError(message) {
    const elSpan = document.createElement('span');
    elSpan.textContent = message;
    elSpan.className = 'error';
    return elSpan;
  }

  function displayErrorCheck(validityError, element) {
    if (validityError === '') {
      element.parentElement.children[1]?.remove();
    } else if (!isClassNameIncluded(element.parentElement, 'error')) {
      element.parentElement.append(createError(validityError));
    }
  }

  function isClassNameIncluded(parentElement, className) {
    for (let i = 0; i < parentElement.children.length; i++) {
      if (parentElement.children[i].className === className) {
        return true
      }
    }
    return false;
  }

  function check() {
    updateEnteredData();

    function email(element) {
      let validityError = '';
      if (element.value === "") {
        validityError = 'Please enter your email';
      } else if (element.validity.typeMismatch) {
        validityError = 'Incorrect format';
      }
      displayErrorCheck(validityError, element);
      element.setCustomValidity(validityError);

      return element;
    }

    function country(element) {
      let validityError = '';
      if (element.value === "") {
        validityError = 'Please enter your country';
      }
      displayErrorCheck(validityError, element);
      element.setCustomValidity(validityError);
      return element;
    }

    function zip(element) {
      let validityError = '';
      if (element.value === "") {
        validityError = 'Please enter your zip';
      } else if (!element.value.match(/[0-9]{5}/)) {
        validityError = 'Follow this format [0-9]{5}';
      }
      displayErrorCheck(validityError, element);
      element.setCustomValidity(validityError);
      return element;
    }

    function password(element) {
      let validityError = '';
      if (element.value === "") {
        validityError = 'Please enter your password';
      } else if (!element.value.match(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)) {
        validityError = 'Password has to have UpperCase, LowerCase, Number/SpecialChar and min 8 Chars';
      }
      displayErrorCheck(validityError, element);
      element.setCustomValidity(validityError);
      return element;
    }

    function passwordConfirm(element) {
      let validityError = '';
      if (element.value === "") {
        validityError = 'Entered value has to be equal to password';
      } else if (enteredData.password !== enteredData.passwordConfirm) {
        validityError = 'Make sure the passwords are the same in both of the fields';
      }
      displayErrorCheck(validityError, element);
      element.setCustomValidity(validityError);
      return element;
    }

    return {
      email,
      country,
      zip,
      password,
      passwordConfirm,
    }
  }

})();
