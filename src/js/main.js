// Form Validation
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}


var nameInput = document.getElementById('fName');
var surnameInput = document.getElementById('fSurname');
var emailInput = document.getElementById('fEmail');
var phoneInput = document.getElementById('fPhone');
var zgodaInput = document.getElementById('zgodaDane');
var zgCheck = document.getElementById('zgodaWiecej');
var nameSurname = /^[a-zA-Z\s]+$/;
var reEmail = /^\S+@\S+\.\S+$/;
var rePhone = /^[1-9]\d{8}$/;
// name validation
nameInput.addEventListener('keyup', (event) => {
    if(nameInput.value == "") {
        nameInput.style.border = "1px solid red";
    } else {
        if(nameSurname.test(nameInput.value) === false) {
            nameInput.style.border = "1px solid red";
        } else {
            printError("nameErr", "");
            nameInput.style.border = "1px solid green";
            nameErr = false;
        }
    }
});
// Surname validation
surnameInput.addEventListener('keyup', (event) => {
    if(surnameInput.value == "") {
        surnameInput.style.border = "1px solid red";
    } else {          
        if(nameSurname.test(surnameInput.value) === false) {
            surnameInput.style.border = "1px solid red";
        } else {
            printError("surErr", "");
            surnameInput.style.border = "1px solid green";
            surErr = false;
        }
    }
});

// Email validation
emailInput.addEventListener('keyup', (event) => {
    if(emailInput.value == "") {
        emailInput.style.border = "1px solid red";
    } else {
        if(reEmail.test(emailInput.value) === false) {
            emailInput.style.border = "1px solid red";
        } else{
            printError("emailErr", "");
            emailInput.style.border = "1px solid green";
            emailErr = false;
        }
    }
});
// Phone validation
phoneInput.addEventListener('keyup', (event) => {
    if(phoneInput.value == "") {
        phoneInput.style.border = "1px solid red";
    } else {
        if(rePhone.test(phoneInput.value) === false) {
            phoneInput.style.border = "1px solid red";
        } else{
            printError("phoneErr", "");
            phoneInput.style.border = "1px solid green";
            phoneErr = false;
        }
    }
});
zgodaInput.addEventListener('click', (event) => {
    if(!zgodaInput.checked) {
        printError("zgodaDaneErr", "Pole wymagane.");
        zgCheck.style.border = '1px solid red';
        zgodaDaneErr = true;
    } else {
        printError("zgodaDaneErr", "");
        zgodaDaneErr = false;
    }
});
function validateForm() {
  // Retrieving the values of form elements 
  var name = document.contactForm.fName;
  var surname = document.contactForm.fSurname;
  var email = document.contactForm.fEmail;
  var phone = document.contactForm.fPhone;
  var zgoda = document.contactForm.zgodaDane;
  var zgCheck = document.getElementById('zgodaWiecej');

  var nameErr = surErr = emailErr = phoneErr = zgodaDaneErr   = true;
    
  

// Defining error variables with a default value
  // Validate imie


 if(name.value == "") {
    printError("nameErr", "Wprowadź swóje imię.");
    name.style.border = "1px solid red";
} else {
    var regex = /^[a-zA-Z\s]+$/;                
    if(regex.test(name.value) === false) {
        printError("nameErr", "Wprowadź poprawne imienie.");
        surname.style.border = "1px solid red";
        
    } else {
        printError("nameErr", "");
        name.style.border = "1px solid green";
        nameErr = false;
    }
}
 
   // Validate nazwisko
   if(surname.value == "") {
        printError("surErr", "Wprowadź swóje nazwisko.");
        surname.style.border = "1px solid red";
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(surname.value) === false) {
            printError("surErr", "Wprowadź poprawne nazwisko.");
            surname.style.border = "1px solid red";
        } else {
            printError("surErr", "");
            surname.style.border = "1px solid green";
            surErr = false;
        }
    }
    // Validate email address
    if(email.value == "") {
        printError("emailErr", "Wprowadź swój adres email.");
        email.style.border = "1px solid red";
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email.value) === false) {
            printError("emailErr", "Wprowdź poprawny adres email");
            email.style.border = "1px solid red";
        } else{
            printError("emailErr", "");
            email.style.border = "1px solid green";
            emailErr = false;
        }
    }
    // Validate phone number
    if(phone.value == "") {
        printError("phoneErr", "Wprowadź swój nr telefonu.");
        phone.style.border = "1px solid red";
    } else {
        var regex = /^[1-9]\d{8}$/;
        if(regex.test(phone.value) === false) {
            printError("phoneErr", "Wprowadź poprawny nr telefonu.");
            phone.style.border = "1px solid red";
        } else{
            printError("phoneErr", "");
            phone.style.border = "1px solid green";
            phoneErr = false;
        }
    }
  // Validate zgoda o przetwarzanie danych osobowych
  if(!zgoda.checked) {
    printError("zgodaDaneErr", "Pole wymagane.");
    zgCheck.style.border = '1px solid red';
    zgodaDaneErr = true;
  } else {
    printError("zgodaDaneErr", "");
    zgCheck.style.border = '1px solid green';
    zgodaDaneErr = false;
  }
  // Prevent the form from being submitted if there are any errors
  if(( nameErr || surErr || emailErr || phoneErr || zgodaDaneErr ) == true) {
     return false;
  } else {
    var dataPreview = "Dane: \n" +
    "Imię i nazwisko: " + name.value + surname.value + "\n" +
    "Email: " + email.value + "\n" +
    "Telefon: " + phone.value + "\n" +
    "Zgoda: " + zgoda.value + "\n" +
    alert(dataPreview);
  }
};