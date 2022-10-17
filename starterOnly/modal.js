function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) =>
  btn.addEventListener("click", launchModal)
);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event 
closeBtn.addEventListener("click", closeModal);

// close modal form 
function closeModal(){
  modalbg.style.display = "none";
}

let btnSubmit = document.getElementsByClassName('btn-submit')[0];

btnSubmit.addEventListener("click", inputCheck);

function inputCheck () {

  const firstName = document.getElementById('first');
  const lastName = document.getElementById('last');
  const email = document.getElementById('email');
  const birthdate = document.getElementById('birthdate');
  const quantity = document.getElementById('quantity');
  const location1 = document.getElementById('location1');
  const location2 = document.getElementById('location2');
  const location3 = document.getElementById('location3');
  const location4 = document.getElementById('location4');
  const location5 = document.getElementById('location5');
  const location6 = document.getElementById('location6');
  const conditionsCheckbox = document.getElementById('checkbox1');
  const locationIcon = document.getElementsByClassName('checkbox-icon')[0];
  const conditionsIcon = document.getElementsByClassName('checkbox-icon')[6];





  // firstname validation
  let firstValidation;
  if (firstName.value.length < 2 || firstName.value == null) {
    firstValidation = false;
    firstName.style.border = 'solid red 2px';
    first_error.style.display = 'flex';
    first_error.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
    first_error.style.fontSize = '12px';
    first_error.style.color = 'red';
  } else {
    firstValidation = true;
    firstName.style = 'default';
    first_error.style.display = 'none';
  }

  // lastname validation
  let lastValidation;
  if (lastName.value.length < 2 || lastName.value == null) {
    lastValidation = false;
    lastName.style.border = 'solid red 2px';
    last_error.style.display = 'flex';
    last_error.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
    last_error.style.fontSize = '12px';
    last_error.style.color = 'red';
  } else {
    lastValidation = true;
    lastName.style = 'default';
    last_error.style.display = 'none';
  }

  // email validation
  let emailValidation;
  if (email.value.match (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailValidation = true;
    email.style = 'default';
    email_error.style.display = 'none';
  } else {
    emailValidation = false;
    email.style.border = 'solid red 2px';
    email_error.style.display = 'flex';
    email_error.textContent = 'Veuillez entrer une adresse valide.';
    email_error.style.fontSize = '12px';
    email_error.style.color = 'red';
  }

  // birthdate validation
  let birthdateValidation;
  if (birthdate.value) {
    birthdateValidation = true;
    birthdate.style = 'default';
    birthdate_error.style.display = 'none';
  } else {
    birthdateValidation = false;
    birthdate.style.border = 'solid red 2px';
    birthdate_error.style.display = 'flex';
    birthdate_error.textContent = 'Vous devez entrer votre date de naissance.';
    birthdate_error.style.fontSize = '12px';
    birthdate_error.style.color = 'red';
  }

  // quantity validation
  let quantityValidation;
  if (quantity.value.match (/^\d+$/)) {
    quantityValidation = true;
    quantity.style = 'default';
    quantity_error.style.display = 'none';
  } else {
    quantityValidation = false;
    quantity.style.border = 'solid red 2px';
    quantity_error.style.display = 'flex';
    quantity_error.textContent = 'Veuillez entrer votre nombre de participations.';
    quantity_error.style.fontSize = '12px';
    quantity_error.style.color = 'red';
  }

  // location validation
  let locationValidation;
  if (location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked) {
    locationValidation = true;
    location_error.style.display = 'none';
    locationIcon.style = 'default';
  } else {
    locationValidation = false;
    location_error.style.display = 'flex';
    location_error.textContent = 'Vous devez choisir une option.';
    location_error.style.fontSize = '12px';
    location_error.style.color = 'red';
    locationIcon.style.border = 'solid red 2px';
  }

  // checkbox validation
  let checkboxValidation;
  if (conditionsCheckbox.checked) {
    checkboxValidation = true;
    checkbox_error.style.display = 'none';
    conditionsIcon.style = 'default';
  } else {
    checkboxValidation = false;
    checkbox_error.style.display = 'flex';
    checkbox_error.textContent = 'Vous devez vérifier que vous acceptez les termes et conditions.';
    checkbox_error.style.fontSize = '12px';
    checkbox_error.style.color = 'red';
    conditionsIcon.style.border = 'solid red 2px';
  }

  if (firstValidation == true && lastValidation == true && emailValidation == true && quantityValidation == true && locationValidation == true && checkboxValidation == true) {
    prompt('Votre inscription a été prise en compte.');
  } else {
    event.preventDefault();
  }
}