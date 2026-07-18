const form = document.getElementById("myForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    document.getElementById("nameError").textContent="";
    document.getElementById("emailError").textContent="";
    document.getElementById("passwordError").textContent="";
    document.getElementById("success").textContent="";

    let name=document.getElementById("name").value.trim();
    let email=document.getElementById("email").value.trim();
    let password=document.getElementById("password").value.trim();

    let valid=true;

    if(name===""){
        document.getElementById("nameError").textContent="Name is required";
        valid=false;
    }

    let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!emailPattern.test(email)){
        document.getElementById("emailError").textContent="Enter valid email";
        valid=false;
    }

    if(password.length<8){
        document.getElementById("passwordError").textContent="Password must be at least 8 characters";
        valid=false;
    }

    if(valid){
        document.getElementById("success").textContent="Form Submitted Successfully!";
    }

});