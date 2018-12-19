
function validateInpTextPattern() {
    const inpText = document.getElementsByClassName("inpText").value;
    const inpTextRegex = /^[A-Za-z0-9]{1,50}$/;
    return inpTextRegex.test(inpText);
}
function validatEmails() {
    const email = document.getElementById("email").value;
    const reEmail = document.getElementById("re-email").value;
    const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    const reEmailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    const resultEmail = emailRegex.test(email);
    const resultReEmailRegex = reEmailRegex.test(reEmail);
    return (resultEmail && resultReEmailRegex);
}
function validateEmailcomparison() {
    const email = document.getElementById("email").value;
    const reEmail = document.getElementById("re-email").value;
    return email === reEmail;
}
function validatePhone() {
    const phone = getElementById("phone").value;
    const phoneRegex = /^[0-9]{0,15}$"/;
    return phoneRegex.test(phone);
}
function validateZip() {
    const zip = document.getElementById("zipCode").value;
    const zipRegex = /^[0-9]{1,8}$/;
    return zipRegex.test(zip);
}
function validateRadioBtn() {
    const radio = document.getElementsByClassName("radio-btn");
    let countCheck = 0;
    for(let i = 0; i < radio.length; i++){
        if(radio[i].checked) {
            countCheck++;
            console.log(countCheck);
            break;
        }
    }
}

function validateCheckBox() {
    const checkBox = getElementsByClassName("checkbox");
    let countCheck = 0;
    for(let i = 0; i < checkBox.length; i++){
        if(checkBox[i].checked) {
            countCheck++;
            console.log(countCheck);
            break;
        }
    }
}

let submitButton = document.querySelector('#submitButton');

console.log(submitButton);

submitButton.addEventListener("click", function(event) {
        const elementClicked = event.target;
            switch(elementClicked.id) {
                case "submitButton":
                    if (!validateInpTextPattern()) {
                        document.querySelector("#name").innerHTML = "Please enter upper or undercase letters or numbers";
                        event.preventDefault();
                    } else if (!validatEmails()) {
                        document.querySelector("#email").innerHTML = "Please enter valid email address";
                        document.querySelector("#re-email").innerHTML = "Please enter valid email address";
                        event.preventDefault();
                    } else if(!validateEmailcomparison()) {
                        document.querySelector("#email").innerHTML = "Check please if email and re-email address is the same";
                        document.querySelector("#re-email").innerHTML = "Check please if email and re-email address is the same";
                        event.preventDefault();
                    } else if(!validatePhone()) {
                        document.querySelector("#phone").innerHTML = "please enter only numbers";
                        event.preventDefault();
                    } else if(!validateZip()) {
                        document.querySelector("#zipCode").innerHTML = "Please enter valid zip code";
                        event.preventDefault();
                    }else if(!validateRadioBtn()) {
                        document.querySelector("#radio-btn").innerHTML = "Please select a design discipline";
                        event.preventDefault();
                    }else if(!validateCheckBox()) {
                        document.querySelector("#checkbox").innerHTML = "Please select a location";
                        event.preventDefault();
                    }
                    break;
             }
    });





    

