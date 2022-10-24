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
// const btnSubmit = document.getElementsByClassName('btn-submit')[0];
const confirmationMessage = document.querySelector(".confirmation-message");
const confirmationBtn = document.getElementById('close-btn');
const form = document.getElementsByTagName('form')[0];

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

//prevent default behavior of form
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
// })

// btnSubmit.addEventListener("click", inputCheck);

//define validate / inputCheck
function validate () {

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
  const locationIcon = document.getElementsByClassName('checkbox-icon');
  const conditionsIcon = document.getElementsByClassName('checkbox-icon')[6];

  // firstname validation
  let firstValidation;
  if (firstName.value.length < 2 || firstName.value == null) {
    firstValidation = false;
    firstName.classList.add("empty");
    first_error.style.display = 'flex';
    first_error.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
  } else {
    firstValidation = true;
    firstName.classList.remove('empty');
    first_error.style.display = 'none';
  }

  // lastname validation
  let lastValidation;
  if (lastName.value.length < 2 || lastName.value == null) {
    lastValidation = false;
    lastName.classList.add("empty");
    last_error.style.display = 'flex';
    last_error.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
  } else {
    lastValidation = true;
    lastName.classList.remove('empty');
    last_error.style.display = 'none';
  }

  // email validation
  let emailValidation;
  if (email.value.match (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailValidation = true;
    email.classList.remove('empty');
    email_error.style.display = 'none';
  } else {
    emailValidation = false;
    email.classList.add("empty");
    email_error.style.display = 'flex';
    email_error.textContent = 'Veuillez entrer une adresse valide.';
  }

  // birthdate validation
  let birthdateValidation;
  if (birthdate.value) {
    birthdateValidation = true;
    birthdate.classList.remove('empty');
    birthdate_error.style.display = 'none';
  } else {
    birthdateValidation = false;
    birthdate.classList.add("empty");
    birthdate_error.style.display = 'flex';
    birthdate_error.textContent = 'Vous devez entrer votre date de naissance.';
  }

  // quantity validation
  let quantityValidation;
  if (quantity.value.match (/^\d+$/)) {
    quantityValidation = true;
    quantity.classList.remove('empty');
    quantity_error.style.display = 'none';
  } else {
    quantityValidation = false;
    quantity.classList.add("empty");
    quantity_error.style.display = 'flex';
    quantity_error.textContent = 'Veuillez entrer votre nombre de participations.';
  }

  // location validation
  let locationValidation;
  if (location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked) {
    locationValidation = true;
    location_error.style.display = 'none';
    locationIcon.style = 'default';
    let i = 0;
    while (i < 6) {
      locationIcon[i].style.border = 'solid #279e7a 2px';
      i++
    }
  } else {
    locationValidation = false;
    location_error.style.display = 'flex';
    location_error.textContent = 'Vous devez choisir une option.';
    let i = 0;
    while (i < 6) {
      locationIcon[i].style.border = 'solid red 2px';
      i++
    }
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
    conditionsIcon.style.border = 'solid red 2px';
  }

  //form validation
  if (firstValidation == true && lastValidation == true && emailValidation == true && quantityValidation == true && locationValidation == true && checkboxValidation == true) {
    closeBtn.style.display = 'none';
    form.style.display = 'none';
    confirmationMessage.style.display = 'block';
    confirmationBtn.addEventListener("click", closeModal);
    //prevent validate true to display confirmation message
    event.preventDefault();
  } else {
    return false;
  }
}