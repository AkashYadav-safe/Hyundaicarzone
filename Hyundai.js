
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    index++;
    if (index >= slides.length) {
        index = 0;
    }
    slides[index].classList.add("active");
}

setInterval(showSlide, 3000); // 3 second me change



// Car database (Add all your car pages here)
const cars = {
    "creta": "creta.html",
    "venue": "vanue.html",
    "i20": "i20.html",
    "verna": "verna.html",
    "exter": "exter.html",
    "aura": "aura.html",
    "i10": "i10.html",
    "santro": "santro.html",
    "tucson": "tucson.html",
    "loniq": "loniq.html",
    "alcazar": "alcazar.html"
};

function searchCar() {

    let input = document.getElementById("searchInput").value
                    .toLowerCase()
                    .trim();

    if(input === ""){
        alert("Please enter a car name");
        return;
    }

    // Partial match search
    for(let car in cars){
        if(car.includes(input)){
            window.location.href = cars[car];
            return;
        }
    }

    alert("Car not found in Hyundai collection!");
}

// Enter key support
function handleEnter(event){
    if(event.key === "Enter"){
        searchCar();
    }
}
