// Form Variables
let dropDown = document.getElementById('loadDetails');
let formDiv = document.getElementById('formDiv');
let name1 = document.getElementById('name');
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

// Theme Variables
let theme = document.getElementById('theme');

// Local storage variable
let myStorage = window.localStorage;

// On load, fill form fields with user input and sets the theme to user's prefered theme.
document.addEventListener('DOMContentLoaded', () => {

    const themeStylesheet = document.getElementById('theme');
    const storedTheme = localStorage.getItem('theme');
    name1.value = myStorage.getItem("name");
    email.value  = myStorage.getItem("email");
    phone.value  = myStorage.getItem("phone");
    address.value  = myStorage.getItem("address");
    cardName.value  = myStorage.getItem("cardName");
    cardNo.value  = myStorage.getItem("cardNo");
    cardCvv.value  = myStorage.getItem("cardCvv");
    cardDate.value  = myStorage.getItem("CardDate");
    if(storedTheme){
        themeStylesheet.href = storedTheme;
    }
    const themeToggle = document.getElementById('themeBtn');
    themeToggle.addEventListener('click', () => {
        // if it's light -> go dark
        if(themeStylesheet.href.includes('light')){
            themeStylesheet.href = 'dark.css';
            themeToggle.innerText = 'Light mode';
        } else {
            // if it's dark -> go light
            themeStylesheet.href = 'light.css';
            themeToggle.innerText = 'Dark mode';
        }
        // save the preference to localStorage
        localStorage.setItem('theme',themeStylesheet.href)  
    })
})

// Form event
btn.addEventListener('click', saveForm);

// This function validates the form input and saves the form input in the localStorage of the user.
function saveForm(e){
    if(name1.value === '' || name1 == null){
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
    }  else if(isNaN(cardCvv.value)){
        cvvError.innerHTML = "Only numbers allowed!";
    } else if(cardCvv.value.length != 3){
        nameError.innerHTML = "";
        emailError.innerHTML = "";
        phoneError.innerHTML = "";
        addressError.innerHTML = "";
        cardNoError.innerHTML = "";
        dateError.innerHTML = ""
        cvvError.innerHTML = "Only 3 digits allowed!";
    } else if(cardName.value === '' || cardName.value == null){
        nameError.innerHTML = "";
        emailError.innerHTML = "";
        phoneError.innerHTML = "";
        addressError.innerHTML = "";
        cardNoError.innerHTML = "";
        dateError.innerHTML = ""
        cvvError.innerHTML = "";
        cardNameError = "This field is required!";
    } else {
        const pD = new Object();
        pD.userName = myStorage.setItem("name", name1.value);
        pD.userEmail = myStorage.setItem("email", email.value);
        pD.userPhone = myStorage.setItem("phone", phone.value);
        pD.userAddress = myStorage.setItem("address", address.value);
        pD.userCardNo = myStorage.setItem("cardNo", cardNo.value);
        pD.userCardName = myStorage.setItem("cardName", cardName.value);
        pD.userCardDate = myStorage.setItem("cardDate", cardDate.value);
        pD.userCvv = myStorage.setItem("cardCvv", cardCvv.value);
        
        alert("Personal Details has been saved!");
        
    }
    e.preventDefault();
}
