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
let vintage = document.getElementById('vintage');
let sC = document.getElementById('sC');
let vividRetro = document.getElementById('vividRetro');
let tA = document.getElementById('tA');
let deflt = document.getElementById('default');

vintage.addEventListener('click', addVintage);
vividRetro.addEventListener('click', addVividRetro);
sC.addEventListener('click', addSc);
tA.addEventListener('click', addTa);
deflt.addEventListener('click', addDefault);

let myStorage = window.localStorage;

window.addEventListener('load', (event) => {
    name1.value = myStorage.getItem("name");
    email.value  = myStorage.getItem("email");
    phone.value  = myStorage.getItem("phone");
    address.value  = myStorage.getItem("address");
    cardName.value  = myStorage.getItem("cardName");
    cardNo.value  = myStorage.getItem("cardNo");
    cardCvv.value  = myStorage.getItem("cardCvv");
    cardDate.value  = myStorage.getItem("CardDate");
  });
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

// This function validates the form input.
function validateForm(e){
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
        cardNameError = "This field is required!"
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

        alert("Works!");

        // const pD = new Object();
        // pD.userName = name.value;
        // pD.userEmail = email.value;
        // pD.userPhone = phone.value;
        // pD.userAddress = address.value;
        // pD.userCardNo = cardNo.value;
        // pD.userCardName = cardName.value;
        // pD.userCardDate = cardDate.value;
        // pD.userCvv = cardCvv.value;

        // console.log(pD.userName, pD.userAddress);
        // let x = JSON.stringify(pD);
        // window.location = "user.json?x=" + x;
        // console.log(x);
        // let postData = new XMLHttpRequest();
        // postData.open("POST", "userInfo.json");
        // postData.send(x);
        
        
    }
    e.preventDefault();
}
