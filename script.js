const cardholder = document.querySelector('#name');
const cardNumber = document.querySelector('#card-number');
const mm = document.querySelector('#exp-date-mm');
const yy = document.querySelector('#yy');
const cvc = document.querySelector('#cvc');
const hasNumber = /\d/;
const formArea = document.querySelector('.form-container');
const thankyouArea = document.querySelector('.thankyou-area');
const submitBtn = document.querySelector('.submit');
const continueBtn = document.querySelector('.btn-reset');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  submitForm();
});
continueBtn.addEventListener('click', (event) => {
  event.preventDefault();
  resetForm();
});

function validateInputs() {
  cardholder.addEventListener('focus', () => {
    cardholder.classList.add('active');
  });
  cardholder.addEventListener('blur', () => {
    cardholder.classList.remove('active');
    verifyName();
  });
  cardholder.addEventListener('input', () => {
    verifyName();
    document.querySelector('.cardholder p').innerHTML = cardholder.value;
  });
  cardNumber.addEventListener('focus', () => {
    cardNumber.classList.add('active');
  });
  cardNumber.addEventListener('blur', () => {
    cardNumber.classList.remove('active');
    verifyCard();
  });
  cardNumber.addEventListener('input', () => {
    if (
      cardNumber.value === '' ||
      hasNumber.test(cardNumber.value.substr(cardNumber.value.length - 1))
    ) {
      document.querySelector('.card-num').innerHTML = cardNumber.value;
    }
  });
  mm.addEventListener('focus', () => {
    mm.classList.add('active');
  });
  mm.addEventListener('blur', () => {
    mm.classList.remove('active');
    verifyMonth();
  });
  mm.addEventListener('input', () => {
    if (
      mm.value === '' ||
      hasNumber.test(mm.value.substr(mm.value.length - 1))
    ) {
      document.querySelector('.expire').innerHTML = `${('0' + mm.value).slice(
        -2
      )}/${yy.value}`;
    }
  });
  yy.addEventListener('focus', () => {
    yy.classList.add('active');
  });
  yy.addEventListener('blur', () => {
    yy.classList.remove('active');
    verifyYear();
  });
  yy.addEventListener('input', () => {
    if (
      yy.value === '' ||
      hasNumber.test(yy.value.substr(yy.value.length - 1))
    ) {
      document.querySelector('.expire').innerHTML = `${('0' + mm.value).slice(
        -2
      )}/${yy.value}`;
    }
  });
  cvc.addEventListener('focus', () => {
    cvc.classList.add('active');
  });
  cvc.addEventListener('blur', () => {
    cvc.classList.remove('active');
    verifyCvc();
  });
  cvc.addEventListener('input', () => {
    if (
      cvc.value === '' ||
      hasNumber.test(cvc.value.substr(cvc.value.length - 1))
    ) {
      document.querySelector('.card-cvc').innerHTML = cvc.value;
    }
  });
}

function verifyName() {
  if (cardholder.value === '' || hasNumber.test(cardholder.value)) {
    cardholder.nextElementSibling.style.display = 'block';
    cardholder.classList.add('error');
  } else {
    cardholder.nextElementSibling.style.display = 'none';
    cardholder.classList.remove('error');
  }
}

function verifyCard() {
  if (cardNumber.value === '' || cardNumber.value.length < 19) {
    document.querySelector('.error-msg-card').style.display = 'block';
    cardNumber.classList.add('error');
  } else {
    document.querySelector('.error-msg-card').style.display = 'none';
    cardNumber.classList.remove('error');
  }
}

function verifyMonth() {
  const date = new Date();
  let y = date.getFullYear() - 2000;
  if (mm.value === '' || mm.value < 1 || mm.value > 12) {
    document.querySelector('.error-msg-date').style.display = 'block';
    mm.classList.add('error');
  } else {
    mm.classList.remove('error');
  }
  if (mm.value >= 1 && mm.value <= 12 && yy.value >= y && yy.value <= y + 10) {
    document.querySelector('.error-msg-date').style.display = 'none';
  }
}
function verifyYear() {
  const date = new Date();
  let y = date.getFullYear() - 2000;
  if (yy.value === '' || yy.value < y || yy.value > y + 10) {
    document.querySelector('.error-msg-date').style.display = 'block';
    yy.classList.add('error');
  } else {
    yy.classList.remove('error');
  }
  if (mm.value >= 1 && mm.value <= 12 && yy.value >= y && yy.value <= y + 10) {
    document.querySelector('.error-msg-date').style.display = 'none';
  }
}

function verifyCvc() {
  if (cvc.value === '' || cvc.value.length < 3) {
    document.querySelector('.error-msg-cvc').style.display = 'block';
    cvc.classList.add('error');
  } else {
    document.querySelector('.error-msg-cvc').style.display = 'none';
    cvc.classList.remove('error');
  }
}

function submitForm() {
  verifyName();
  verifyCard();
  verifyMonth();
  verifyYear();
  verifyCvc();
  const error = document.querySelector('.error');
  if (error === null) {
    formArea.style.display = 'none';
    thankyouArea.style.display = 'flex';
  }
}

function resetForm() {
  cardholder.value = '';
  cardNumber.value = '';
  mm.value = '';
  yy.value = '';
  cvc.value = '';
  document.querySelector('.cardholder p').innerHTML = 'Jane Appleseed';
  document.querySelector('.card-num').innerHTML = '0000 0000 0000 0000';
  document.querySelector('.expire').innerHTML = '00/00';
  document.querySelector('.card-cvc').innerHTML = '000';
  formArea.style.display = 'flex';
  thankyouArea.style.display = 'none';
}

validateInputs();
