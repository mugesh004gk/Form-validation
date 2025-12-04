let namefeild = document.querySelector(".namefeild");
let emailfield = document.querySelector(".emailfeild");
let numfield = document.querySelector(".numfeild");
let passfield = document.querySelector(".passfeild");
let repassfield = document.querySelector(".repassfeild");

let errorpara = document.querySelector(".errorpara");
let success = document.querySelector(".success")
let emailerror =document.querySelector(".emailerror")
let numerror = document.querySelector(".numerror")
let passerror=document.querySelector(".passerror")
let reerror = document.querySelector(".reerror")

let subbtn = document.querySelector(".subbtn");
let clear = document.querySelector(".clear");

subbtn.addEventListener("click", ()=>{

    errorpara.innerHTML = ""; 
    errorpara.innerHTML = "";
    emailerror.innerHTML = "";
    numerror.innerHTML = "";
    passerror.innerHTML = "";
    reerror.innerHTML = "";


    if(namefeild.value === ""){
        errorpara.innerHTML = "Enter your name";
        return;
    }
    else if(emailfield.value === ""){
        emailerror.innerHTML = "Enter your email";
        return;
    }
    else if(numfield.value === ""){
        numerror.innerHTML = "Enter your contact number";
        return;
    }
    else if(passfield.value === ""){
        passerror.innerHTML = "Enter your password";
        return;
    }
    else if(repassfield.value === ""){
        reerror.innerHTML = "Confirm your password";
        return;
    }
    else if(passfield.value !== repassfield.value){
        reerror.innerHTML = "Passwords do not match";
        reerror.innerHTML=""
        return;
    }

    success.style.color = "green";
    success.innerHTML = "Form submitted successfully!";
});
clear.addEventListener("click", ()=>{
    namefeild.value=""
    emailfield.value=""
    numfield.value=""
    passfield.value=""
    repassfield.value=""

    errorpara.innerHTML = "";
    emailerror.innerHTML = "";
    numerror.innerHTML = "";
    passerror.innerHTML = "";
    reerror.innerHTML = "";
    success.innerHTML = "";
})
