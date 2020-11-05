class Validator {
  constructor() {
    // <<  ERROR MESSAGES  >>
    this.invalidEmailError = "Enter a valid email address";
    this.emailExistsError = "The entered email address is already taken.";
    this.passwordError = "Password must be at least 6 characters long";
    this.repeatPasswordError = "Password and reapeat password must match!";

    // <<  OBJECT WITH ALL ERROR MESSAGES  >>
    this.errors = {
      invalidEmailError: this.invalidEmailError,
      passwordError: this.passwordError,
      repeatPasswordError: this.repeatPasswordError,
    };
  }

  // <<  EMAIL VALIDATOR  >>
  validateValidEmail = (email) => {
    if (this.emailSyntaxIsValid(email)) {
      // <<  REMOVE ERROR MESSAGE FOR EMAIL  >>
      delete this.errors.invalidEmailError;
    } else {
      // <<  EMAIL ERROR MESSAGE SET UP  >>
      this.errors.invalidEmailError = this.invalidEmailError;
    }
  };


  // <<  HELPER FOR validateValidEmail  >>
  emailSyntaxIsValid = (email) => {
    // <<  REGEX OBJECT  >>
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    // <<  EMAIL BOOLEAN  >>
    const emailIsValid = emailRegEx.test(email);
    return emailIsValid;
  };

  // <<  EMAIL UNICQUENES CHECK CROSSREFERENCE WITH DATABASE>>
  validateUniqueEmail = (newEmail) => {
    const users = db.getAllUsers();
    let emailUnique = true;

    users.forEach((userObj) => {
      if (userObj.email === newEmail) {
        emailUnique = false;
      }
    });

    // <<  REMOVE ERROR MESSAGE IF UNIQUE >>
    if (emailUnique) {
      delete this.errors.emailExistsError;
    } else {
      // <<  SHOW ERROR MESSAGE IF TAKEN  >>
      this.errors.emailExistsError = this.emailExistsError;
    }
  };

  // <<  PASSWORD LENGTH VALIDATOR  >>
  validatePassword = (password) => {
    if (password.length >= 6) {
      // <<  REMOVE ERROR MESSAGE >>
      delete this.errors.passwordError;
    } else {
      // <<  PASSWORD.LENGTH < 6 SHOW ERROR MESSAGE  >>
      this.errors.passwordError = this.passwordError;
    }
  };

  // <<  PASSWORD & REPEAT PASSWORD MATCH VALIDATOR  >>
  validateRepeatPassword = (password, repeatPassword) => {
    if (password === repeatPassword) {
      // <<  REMOVE ERROR MESSAGE  >>
      delete this.errors.repeatPasswordError;
    } else {
      // <<  IF THEY DON'T MATCH, SHOWS ERROR MESSAGE  >>
      this.errors.repeatPasswordError = this.repeatPasswordError;
    }
  };

  // <<  ERROR FETCHER TO SHOW IN SIGN UP PAGE  >>
  getErrors = () => {
    return this.errors;
  };
}

const validator = new Validator();
