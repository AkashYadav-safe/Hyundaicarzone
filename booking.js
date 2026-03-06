document.getElementById("bookBtn").addEventListener("click", function(){

let brand = document.querySelectorAll("input")[0].value;
let model = document.querySelectorAll("input")[1].value;
let variant = document.querySelectorAll("input")[2].value;
let price = document.querySelectorAll("input")[3].value;

let name = document.querySelectorAll("input")[4].value;
let mobile = document.querySelectorAll("input")[5].value;
let email = document.querySelectorAll("input")[6].value;
let city = document.querySelectorAll("input")[7].value;

let address = document.querySelector("textarea").value;
let payment = document.querySelector("select").value;

let booking = {
brand,
model,
variant,
price,
name,
mobile,
email,
city,
address,
payment
};

localStorage.setItem("carBooking", JSON.stringify(booking));

alert("Car Booking Successful");

});