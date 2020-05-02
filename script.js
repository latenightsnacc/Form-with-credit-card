// Form Variables
let dropDown = document.getElementById('loadDetails');
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

// Theme Variables
let vintage = document.getElementById('vintage');
let sC = document.getElementById('sC');
let vividRetro = document.getElementById('vividRetro');
let tA = document.getElementById('tA');
let deflt = document.getElementById('default');

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
// btn.addEventListener('input', addLogo);

function bindDetailsToDropDown(pD) {
        
    dropDown.options.length = 0;

    let el = document.createElement("option");
    el.textContent = "...Select Personal Details...";
    dropDown.appendChild(el);


    for (let i = 0; i < PersonalDetailsList.length; i++) {
        let pD = PersonalDetailsList[i];

        let el = document.createElement("option");
        el.textContent = "Personal Details Of " + pD.UserName;
        el.value = pD.Id.toString();
        dropDown.appendChild(el);
    }
}

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
        cardNameError = "This field is required!"
    } else {
        const pD = new Object();
        pD.userName = name.value;
        pD.userEmail = email.value;
        pD.userPhone = phone.value;
        pD.userAddress = address.value;
        pD.userCardNo = cardNo.value;
        pD.userCardName = cardName.value;
        pD.userCardDate = cardDate.value;
        pD.userCvv = cardCvv.value;

        console.log(pD.userName, pD.userAddress);
        bindDetailsToDropDown(pD)
        
        
    }
    e.preventDefault();
}
