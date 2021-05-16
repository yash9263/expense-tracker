const logEmailEl = document.querySelector("#login-email");
const logPassEl = document.querySelector("#login-pass");
const logBtnEl = document.querySelector("#login-btn");
const changeToSignupEl = document.querySelector("#change-to-signup");
const signUpUserEl = document.querySelector("#signup-user");
const signUpEmailEl = document.querySelector("#signup-email");
const signUpPassEl = document.querySelector("#signup-password");
const signUpBtnEl = document.querySelector("#signup-btn");
const changeToLoginEl = document.querySelector("#change-to-login");
const loginFormEl = document.querySelector("#login-form");
const signUpFormEl = document.querySelector("#signup-form");

// console.log({
//     logEmailEl,
//     logPassEl,
//     logBtnEl,
//     changeToSignupEl,
//     signUpUserEl,
//     signUpEmailEl,
//     signUpPassEl,
//     signUpBtnEl,
//     changeToLoginEl,
//     loginFormEl,
//     signUpFormEl,
// });

// click Events
changeToSignupEl.addEventListener(
  "click",
  (event) => {
    event.preventDefault();
    loginFormEl.classList.add("invisible");
    loginFormEl.classList.remove("visible");
    signUpFormEl.classList.remove("invisible");
    signUpFormEl.classList.add("visible");
  },
  false
);

changeToLoginEl.addEventListener(
  "click",
  (event) => {
    event.preventDefault();
    signUpFormEl.classList.remove("visible");
    signUpFormEl.classList.add("invisible");
    loginFormEl.classList.add("visible");
    loginFormEl.classList.remove("invisible");
  },
  false
);

logBtnEl.addEventListener(
  "click",
  (event) => {
    event.preventDefault();
  },
  false
);

signUpBtnEl.addEventListener(
  "click",
  (event) => {
    event.preventDefault();
    createUser(signUpUserEl.value, signUpEmailEl.value, signUpPassEl.value);
  },
  false
);

logBtnEl.addEventListener(
  "click",
  (event) => {
    event.preventDefault();
    loginUser(logEmailEl.value, logPassEl.value);
  },
  false
);
