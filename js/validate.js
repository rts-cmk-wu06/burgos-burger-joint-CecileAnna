// const form = document.querySelector('#form');

const email = document.querySelector('#email');
const firstname = document.querySelector('#firstname');

console.log(firstname);
console.log(email);

email.addEventListener("input", function(event) {
    if (email.validity.patternMismatch) {
        email.setCustomValidity("Mail ikke gyldigt. Prøv at skrive emailen igen.");
    } else {
        email.setCustomValidity("");
    }
});

firstname.addEventListener("input", function(event) {
    if (firstname.validity.patternMismatch) {
        firstname.setCustomValidity("Venligst skriv dit navn. Kun med bogstaver og mellemrum.");
    } else {
        firstname.setCustomValidity("");
    }
});