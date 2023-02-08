const btnSubmit = document.querySelector(".btn-click");
const formFill = document.querySelector(".form__fill");
const formCompleted = document.querySelector(".form__completed");
const formBtn = document.querySelector(".form__button");
const form = document.querySelector(".form");
const usernameText = document.querySelector(".username-text");
const usernameInput = document.getElementById("username-input");
const cardInput = document.getElementById("card-input");
const cardText = document.querySelector(".card__number-text");
const monthText = document.querySelector(".month");
const yearText = document.querySelector(".year");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");
const cvcText = document.querySelector(".cvc-text");
const cvcInput = document.getElementById("cvc-input");
const errorMessage = document.querySelectorAll(".form__error--message");

const displayName = function () {
  if (usernameInput.value) {
    usernameText.textContent = usernameInput.value;
    usernameInput.style.border = "0.1rem solid #dedddf";
    errorMessage[0].classList.remove("active");
  }
  if (!usernameInput.value) usernameText.textContent = "Jane Appleseed";
};

const format = function (card) {
  return card.toString().replace(/\d{4}(?=.)/g, "$& ");
};

const displayCard = function () {
  const card = cardInput.value;

  if (card) {
    errorMessage[1].classList.remove("active");
    cardText.textContent = format(card);
    cardInput.style.border = "0.1rem solid #dedddf";
  }
  if (!card) cardText.textContent = `0000 0000 0000 0000`;
  console.log(card.toString());
};

const displayDate = function () {
  if (monthInput.value) {
    monthText.textContent = monthInput.value;
    monthInput.style.border = "0.1rem solid #dedddf";
    errorMessage[2].classList.remove("active");
  } else if (!monthInput.value) monthText.textContent = `00`;

  if (yearInput.value) {
    yearText.textContent = yearInput.value;
    yearInput.style.border = "0.1rem solid #dedddf";
    errorMessage[3].classList.remove("active");
  } else if (!yearInput.value) yearText.textContent = `00`;
};

const displayCvc = function () {
  if (cvcInput.value) {
    cvcText.textContent = cvcInput.value;
    cvcInput.style.border = "0.1rem solid #dedddf";
    errorMessage[4].classList.remove("active");
  }
  if (!cvcInput.value) cvcText.textContent = `000`;
};

const formSubmit = function (e) {
  e.preventDefault();

  if (!String(usernameInput.value)) {
    errorMessage[0].classList.add("active");
    usernameInput.style.border = ".1rem solid #ff5252";
  } else if (!String(usernameInput.value).includes(" ")) {
    errorMessage[0].classList.add("active");
    usernameInput.style.border = ".1rem solid #ff5252";
    errorMessage[0].textContent = `Must be Full Name`;
  }

  if (!cardInput.value) {
    errorMessage[1].classList.add("active");
    cardInput.style.border = ".1rem solid #ff5252";
  } else if (!Number(cardInput.value)) {
    errorMessage[1].classList.add("active");
    cardInput.style.border = ".1rem solid #ff5252";
    errorMessage[1].textContent = `Card must be a number!`;
  } else if (Number(cardInput.value.length) !== 16) {
    errorMessage[1].classList.add("active");
    cardInput.style.border = ".1rem solid #ff5252";
    errorMessage[1].textContent = `Card must be 16 digits numbers`;
  }

  if (!monthInput.value) {
    errorMessage[2].classList.add("active");
    monthInput.style.border = ".1rem solid #ff5252";
  } else if (!Number(monthInput.value)) {
    errorMessage[2].classList.add("active");
    monthInput.style.border = ".1rem solid #ff5252";
    errorMessage[2].textContent = `Month must be a number!`;
  }

  if (!yearInput.value) {
    errorMessage[3].classList.add("active");
    yearInput.style.border = ".1rem solid #ff5252";
  } else if (!Number(yearInput.value)) {
    errorMessage[3].classList.add("active");
    yearInput.style.border = ".1rem solid #ff5252";
    errorMessage[3].textContent = "Year must be a number!";
  }

  if (!cvcInput.value) {
    errorMessage[4].classList.add("active");
    cvcInput.style.border = ".1rem solid #ff5252";
  } else if (!Number(cvcInput.value)) {
    errorMessage[4].classList.add("active");
    cvcInput.style.border = ".1rem solid #ff5252";
    errorMessage[4].textContent = "Year must be a number!";
  }

  if (
    usernameInput.value &&
    cardInput.value &&
    monthInput.value &&
    yearInput.value &&
    cvcInput.value
  ) {
    formFill.classList.add("hidden");
    formCompleted.classList.remove("hidden");
  }
};

usernameInput.addEventListener("input", displayName);
cardInput.addEventListener("input", displayCard);
monthInput.addEventListener("input", displayDate);
yearInput.addEventListener("input", displayDate);
cvcInput.addEventListener("input", displayCvc);
formBtn.addEventListener("click", formSubmit);
