document.getElementById("submit-btn").addEventListener("click", (e) => {
  e.preventDefault();

  const errorFirstName = document.querySelector(".error-first-name");
  const errorLasttName = document.querySelector(".error-last-name");
  const errorEmail = document.querySelector(".error-email");
  const errorPassword = document.querySelector(".error-password");

  const inputFirstName = document.getElementById("first-name");
  const inputLastName = document.getElementById("last-name");
  const inputEmail = document.getElementById("user-email");
  const inputPassword = document.getElementById("user-password");

  if (!inputFirstName.value) {
    errorFirstName.classList.add("error-message");
  } else {
    errorFirstName.classList.remove("error-message");
  }

  if (!inputLastName.value) {
    errorLasttName.classList.add("error-message");
  } else {
    errorLasttName.classList.remove("error-message");
  }

  if (!inputEmail.value || !inputEmail.value.includes("@")) {
    errorEmail.classList.add("error-message");
  } else {
    errorEmail.classList.remove("error-message");
  }

  if (!inputPassword.value) {
    errorPassword.classList.add("error-message");
  } else {
    errorPassword.classList.remove("error-message");
  }
});
