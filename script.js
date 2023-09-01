const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password_confirmation")

const passwordValidation = (password1, password2) => {
    if (password1 === password2) {
        const validationResult = document.getElementById("validationResult");
        if (validationResult) {
            validationResult.remove()
            console.log("SUCCESS")
        }
    }
    else {
        const confirmationPassword = document.getElementById("password_confirmation");
        const nextElem = confirmationPassword.nextElementSibling;
        if (nextElem) {
            return;
        }
        const validationResult = document.createElement("div");
        validationResult.textContent = "PASSWORDS DO NOT MATCH";
        validationResult.id = "validationResult";
        confirmationPassword.after(validationResult);
    }
}

passwordConfirmation.addEventListener('change', () => {
        passwordValidation(password.value, passwordConfirmation.value);
    })