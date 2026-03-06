function registerUser(){

let name = document.getElementById("regName").value;
let email = document.getElementById("regEmail").value;
let pass = document.getElementById("regPass").value;
let confirmPass = document.getElementById("regConfirmPass").value;

if(pass !== confirmPass){
    alert("Password and Confirm Password must be same");
    return;
}

let user = {
    name : name,
    email : email,
    password : pass
};

localStorage.setItem("user", JSON.stringify(user));

alert("Registration Successful");

}

function loginUser(){

let email = document.querySelector(".login-form input[type='email']").value;
let pass = document.querySelector(".login-form input[type='password']").value;

let storedUser = JSON.parse(localStorage.getItem("user"));

if(storedUser && storedUser.email === email && storedUser.password === pass){

    alert("Login Successful");

}else{

    alert("Invalid Email or Password");

}

}