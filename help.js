document.getElementById("helpForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let issue = document.getElementById("issue").value;

    let helpData = {
        name: name,
        email: email,
        issue: issue
    };

    localStorage.setItem("helpRequest", JSON.stringify(helpData));

    alert("Problem submitted successfully!");

});