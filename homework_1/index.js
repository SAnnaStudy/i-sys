let emailError = document.getElementById('email-error')
let passwordError = document.getElementById('password-error')
let checkError = document.getElementById('check-error')
let dateError = document.getElementById('date-error')
document.getElementById('getStartButt').addEventListener('click', function(){
    document.getElementById('pop_up').classList.add('active')
})
document.getElementById('closeBtn').addEventListener('click', function(){
    document.getElementById('pop_up').classList.remove('active')
})
function validateEmail(){
    let email = document.getElementById('email').value
    if(email.length == 0){
        emailError.innerHTML = 'email is required'
        return false
    }
    if(!email.match(/^[A-Za-z/\._\=[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'email is incorrect'
        return false
    }
    emailError.innerHTML = ''
    return true
}
function validatePassword(){
    let password = document.getElementById('password').value
    if(password.length == 0){
        passwordError.innerHTML = 'password is required'
        return false
    }
    if(password.length > 8){
        passwordError.innerHTML = 'password must be less then 8'
        return false
    }
    passwordError.innerHTML = ''
    console.log(password)
    return true
}
function checkPasswords(){
    let check = document.getElementById('check').value
    let password = document.getElementById('password').value
    if(password !== check){
        checkError.innerHTML = 'passwords must be the same'
        return false
    }
    checkError.innerHTML = ''
    return true
}
function validateDate(){
    let date = document.getElementById('date').value
    if(!date){
        dateError.innerHTML = 'date is required'
        return false
    }
    dateError.innerHTML = ''
    return true
}
const form = document.getElementById('form');
    
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(!validateEmail() || !validateDate() || !validatePassword() || !checkPasswords()){
    return false
  }
  const formData = new FormData(form);
  console.log(formData)
  e.target.reset(); 
  alert('Thanks! Your application is being processed')
})