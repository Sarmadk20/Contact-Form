const sumbitbtn = document.getElementById('submit-btn');

sumbitbtn.addEventListener('click', (event) =>{
    event.preventDefault();
    const firstName = document.getElementById('input-firstName');
    const lastName = document.getElementById('input-lastName');
    const emailAddress = document.getElementById('input-emailaddress');
    const queryTypeContainer = document.getElementById('input-querytype');
    const Messages = document.getElementById('input-messages');
    const consentBtn = document.getElementById('input-consentbtn');

    const errorfirstName = document.getElementById('error-firstName');
    const errorlastName = document.getElementById('error-lastName');
    const erroremailAddress = document.getElementById('error-emailaddress');
    const errorQueryType = document.getElementById('error-query');
    const errorMessages = document.getElementById('error-messages');
    const errorconsentBtn = document.getElementById('error-btn')

    const msgSent = document.getElementById("msg-sent");

    const selectedRadio = queryTypeContainer.querySelector('input[type="radio"]:checked');

   let formIsvalid  = true;
    
   if (firstName.value.trim() === "") {
      firstName.classList.add('error');
      errorfirstName.style.display = 'block';
      formIsvalid = false;
   }
   else{
    firstName.classList.remove('error');
    errorfirstName.style.display = 'none';
   }

   if (lastName.value.trim() === "") {
    lastName.classList.add('error');
    errorlastName.style.display = 'block';
    formIsvalid=false;
   }
   else{
    firstName.classList.remove('error');
    errorlastName.style.display = 'none';
   }

   if (emailAddress.value.trim() === "") {
      emailAddress.classList.add('error');
      erroremailAddress.style.display = 'block'; 
      formIsvalid = false;
   } 
   else {
    emailAddress.classList.remove('error');
   erroremailAddress.style.display = 'none';
    
   }

   if (!selectedRadio) {
    errorQueryType.style.display = 'block';
    formIsvalid = false;
} else {
    errorQueryType.style.display = 'none';
    console.log(`Selected query type: ${selectedRadio.id}`); 
}


   if (Messages.value.trim() === "") {
    Messages.classList.add('error');
    errorMessages.style.display = 'block';
    formIsvalid = false;
   } else {
    Messages.classList.remove('error');
    errorMessages.style.display = 'none';
   }


   if (!consentBtn.checked) {
    errorconsentBtn.style.display = 'block';
    formIsvalid = false;
} else {
    errorconsentBtn.style.display = 'none';
    console.log(`Selected checkbox: ${consentBtn.id}`); 
}

   if (formIsvalid) {
   // alert('Message sent! Thanks for completing the form');
   msgSent.classList.add("show");
   setTimeout(() => {
    msgSent.classList.remove("show");
}, 3000);
   }

    
});



