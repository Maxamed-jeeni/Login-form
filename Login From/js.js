// all elements
            // Check Empty With Places   from validation

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const form = document.querySelector("#form");


                        // Showing Error Message
const showError =(input,message) => {
    let parentElement =input.parentElement;
    parentElement.classList= 'form-control error';
const small = parentElement.querySelector('small');
const successIcon = parentElement.querySelectorAll("i") [0];
const errorIcon = parentElement.querySelectorAll("i") [1];

errorIcon.style.visibility = 'visible';
successIcon.style.visibility = 'hidden';
//small.innerText = message;
}


                        // Showing Success Message
const showSuccess =(input) => {
    let parentElement =input.parentElement;
    parentElement.classList= 'form-control success';
const successIcon = parentElement.querySelectorAll("i") [0];
const errorIcon = parentElement.querySelectorAll("i") [1];

errorIcon.style.visibility = 'hidden';
successIcon.style.visibility = 'visible';

}

// Check empty with function Basid Way
 const checkEmpty =(elements) => {
        elements.forEach( (element) => {
            if(element.value === '') {
                element.parentElement.classList = 'form-control error'
                showError(element,'Input required');
            } else {
                showSuccess (element);
            }
        });
    }
    
    form.addEventListener("submit" , (event)=>{

    event.preventDefault();
    
    checkEmpty ( [username,email, password,confirmPassword]);
    
    });








    //  Check Empty 
// //form.addEventListener("submit",  (event)=> {
//     event.preventDefault();

//     if(username.value === ''){
//         username.parentElement.classList = 'form-control error';
//     }

//     if(Email.value === ''){
//         Email.parentElement.classList = 'form-control error';
//     }


//     if(Password.value === ''){
//         Password.parentElement.classList = 'form-control error';
//     }

//     if(confirmPassword.value === ''){
//         confirmPassword.parentElement.classList = 'form-control error';
//     }
// });



  
