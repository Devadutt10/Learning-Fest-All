const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");

document.querySelector("form").addEventListener("submit", function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

function validateForm(){
    if(username.value.trim() == ""){
        alert("Enter username..");
        username.focus();
        return false;
    }
    else if(password.value.trim() == ""){
        alert("Enter password..");
        password.focus();
        return false
    }
    else if(email.value.trim() == ""){
        alert("Enter email..");
        email.focus();
        return false;
    }
    else if(password.value.trim().length < 8){
        alert("Password must container at least 8 characters..")
        return false;
    }
    else{
        return true;
    }
}