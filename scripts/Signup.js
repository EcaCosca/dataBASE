class Signup {
  constructor() {
    // <<  STORE ALL INPUT ELEMENTS>>
    this.nameInput = document.querySelector("#name");
    this.emailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");
    this.repeatPasswordInput = document.querySelector("#repeat-password");
    this.buttonInput = document.querySelector("#signup-button");
    this.errorsWrapper = document.querySelector(".message-container");
  }

  // <<  EMAIL INPUT  >>
  handleEmailInput = (event) => {
    const emailInput = event.target;
    const email = emailInput.value;

    validator.validateValidEmail(email);
    validator.validateUniqueEmail(email);

    this.setErrorMessages();
  };

  // <<  PASSWORD INPUT  >>
  handlePasswordInput = (event) => {
    const passwordInput = event.target;
    const repeatPasswordInput = this.repeatPasswordInput;

    const password = passwordInput.value;
    const repeatPassword = repeatPasswordInput.value;

    validator.validatePassword(password);
    validator.validateRepeatPassword(password, repeatPassword);

    this.setErrorMessages();
  };

  // <<  PASSWORD INPUT & CONFIRMATION  >>  
  handleRepeatPasswordInput = (event) => {
    const passwordInput = event.target;
    const repeatPasswordInput = this.repeatPasswordInput;

    const password = passwordInput.value;
    const repeatPassword = repeatPasswordInput.value;

    validator.validatePassword(password);
    validator.validateRepeatPassword(password, repeatPassword);

    this.setErrorMessages();
  };

  // <<  MESSAGES  >>
  setErrorMessages = () => {

    // <<  CLEAR MESSAGES  >>
    this.errorsWrapper.innerHTML = "";
    const errorsObj = validator.getErrors();

    // <<  ARRAY OF ERRORS  >>
    const errorStringsArr = Object.values( errorsObj );

    errorStringsArr.forEach( (str) => {
      const p = document.createElement('p');
      p.textContent = str;

      this.errorsWrapper.appendChild(p);
    })
  }

  // <<  DATA SENDING CONTAINERS  >>
  saveData = (event) => {
    event.preventDefault();

    // <<  GET VALUE OF EACH INPUT  >>
    const name = this.nameInput.value;
    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    // <<  NEW USER  >>
    const newUser = new User(name, email, password);

    // <<  PUSH TO DATABASE  >>
    db.saveNewUser(newUser);

    // <<  EMPTY INPUTS  >>
    this.nameInput.value = "";
    this.emailInput.value = "";
    this.passwordInput.value = "";
  };

  // <<  EVENT LISTENERS  >>
  addListeners = () => {
    this.emailInput.addEventListener("input", this.handleEmailInput);
    this.passwordInput.addEventListener("input", this.handlePasswordInput);
    this.repeatPasswordInput.addEventListener("input", this.handleRepeatPasswordInput);
    this.buttonInput.addEventListener("click", this.saveData);
  }

}

const signup = new Signup();

// <<  LOAD EVENT LISTENERS  >>
window.addEventListener('load', signup.addListeners )