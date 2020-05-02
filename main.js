class PersonalDetails {
    UserName;
    UserEmail;
    UserPhone;
    UserAddress;
    UserCardNo;
    UserCardName;
    UserCardCvv;
    UserCardDate;
    UserTheme;
}

let PersonalDetailsList = [];

window.onload = function(){
    initializeDetails();
    bindDetailsToDropDown();
}
// Theme Variables
let vintage = document.getElementById('vintage');
let sC = document.getElementById('sC');
let vividRetro = document.getElementById('vividRetro');
let tA = document.getElementById('tA');
let deflt = document.getElementById('default');

// Form Variables
let formDiv = document.getElementById('formDiv');
let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let address = document.getElementById('address');
let cardNo = document.getElementById('card-no');
let cardDate = document.getElementById('date');
let cardCvv = document.getElementById('cvv');
let cardName = document.getElementById('card-name');
let btn = document.getElementById('submit');

// Card Logo
let logo = document.getElementById('cardLogo');

// Error
let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let phoneError = document.getElementById('phone-error');
let addressError = document.getElementById('address-error');
let cardNoError = document.getElementById('cardno-error');
let dateError = document.getElementById('date-error');
let cardNameError = document.getElementById('cardname-error');
let cvvError = document.getElementById('cvv-error');

// Theme Event Listeners
vintage.addEventListener('click', addVintage);
sC.addEventListener('click', addSc);
vividRetro.addEventListener('click', addVividRetro);
tA.addEventListener('click', addTa);
deflt.addEventListener('click', addDefault);

// This function adds the vintage class to the formDiv
function addVintage(e){
    formDiv.classList.remove('sC');
    formDiv.classList.remove('vividRetro');
    formDiv.classList.remove('tA');
    formDiv.classList.add('vintage');
}
function addSc(e){
    formDiv.classList.remove('vintage');
    formDiv.classList.remove('vividRetro');
    formDiv.classList.remove('tA');
    formDiv.classList.add('sC');
}
function addVividRetro(e){
    formDiv.classList.remove('vintage');
    formDiv.classList.remove('sC');
    formDiv.classList.remove('tA');
    formDiv.classList.add('vividRetro');
}
function addTa(e){
    formDiv.classList.remove('vintage');
    formDiv.classList.remove('sC');
    formDiv.classList.remove('vividRetro');
    formDiv.classList.add('tA');
}
function addDefault(e){
    formDiv.classList.remove('vintage');
    formDiv.classList.remove('sC');
    formDiv.classList.remove('vividRetro');
    formDiv.classList.remove('tA');
}

// Form event
btn.addEventListener('click', validateForm);
btn.addEventListener('input', addLogo);


// This function validates the form input.
function validateForm(e){
    if(name.value === '' || name == null){
        nameError.innerHTML = "Please enter your name!";
    } else if (email.value === '' || email == null){
        nameError.innerHTML = "";
        emailError.innerHTML = "Please enter a valid email!";
    } else if (phone.value === ''){
        emailError.innerHTML = "";
        phoneError.innerHTML = "Please enter your phone number!";
    } else if(isNaN(phone.value)){
        phoneError.innerHTML = "Only numbers allowed!";
    } else if(address.value === '' || address.value ==  null){
        nameError.innerHTML = "";
        emailError.innerHTML = "";
        phoneError.innerHTML = "";
        addressError.innerHTML = "Please enter your address!";
    } else if(cardNo.value === '' || cardNo.value ==  null){
        nameError.innerHTML = "";
        emailError.innerHTML = "";
        phoneError.innerHTML = "";
        addressError.innerHTML = "";
        cardNoError.innerHTML = "Please enter your card number!";
    } else if (isNaN(cardNo.value)){
        cardNoError.innerHTML = "Only numbers allowed!";
    } else if (cardNo.value.length != 16 ){
        cardNoError.innerHTML = "16 digits required!";
    } else if(cardDate.value === '' || cardDate.value ==  null){
        nameError.innerHTML = "";
        emailError.innerHTML = "";
        phoneError.innerHTML = "";
        addressError.innerHTML = "";
        cardNoError.innerHTML = "";
        dateError.innerHTML = "This field is required!"
    } else if(cardCvv.value != 3){
        nameError.innerHTML = "";
        emailError.innerHTML = "";
        phoneError.innerHTML = "";
        addressError.innerHTML = "";
        cardNoError.innerHTML = "";
        dateError.innerHTML = ""
        cvvError.innerHTML = " Only 3 digits allowed!";
    } else if(isNaN(cardCvv.value)){
        cvvError.innerHTML = "Only numbers allowed!";
    } 
     else if(cardName.value === '' || cardName.value == null){
        nameError.innerHTML = "";
        emailError.innerHTML = "";
        phoneError.innerHTML = "";
        addressError.innerHTML = "";
        cardNoError.innerHTML = "";
        dateError.innerHTML = ""
        cvvError.innerHTML = "";
        cardNameError = "This field is required!"
    } 
    e.preventDefault();
}

// This function check the input value of zero index of 
// card number value
function addLogo(e){
    let x = 0;
    let value = Array();

    value[x] = cardNo.value;
    if(value[0] === 5){
        logo.src = "assets/logos/MC.png";
    } else if (value[0] === 4){
        logo.src = "assets/logos/Visa.png";
    }
}