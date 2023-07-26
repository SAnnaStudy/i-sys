window.addEventListener("DOMContentLoaded", (event) => {
    const form = document.querySelector('.modal_form');
    const overlay = document.querySelector('.overlay')
    const open_modal = document.querySelector('.open_modal')
    const menu_hamburger = document.querySelector(".menu_hamburger");
    const menu_item = document.querySelectorAll(".menu_item");
    const hamburger= document.querySelector(".hamburger");
    const close_hamburger_icon= document.querySelector(".close_hamburger_icon");
    const menu_icon = document.querySelector(".menu_icon");
    validateEmail = () => {
        const email = form.querySelector('.email').value
        const emailErrorMessage = form.querySelector('.email-error')
        if(email.length == 0){
            emailErrorMessage.innerHTML = 'email is required'
            return false
        }
        if(!email.match(/^[A-Za-z/\._\=[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            emailErrorMessage.innerHTML = 'email is incorrect'
            return false
        }
        emailErrorMessage.innerHTML = ''
        return true
    }
    validatePassword = () => {
        const password = form.querySelector('.password').value
        const passwordErrorMessage = form.querySelector('.password-error')
        if(password.length == 0){
            passwordErrorMessage.innerHTML = 'password is required'
            return false
        }
        if(password.length > 8){
            passwordErrorMessage.innerHTML = 'password must be less then 8'
            return false
        }
        passwordErrorMessage.innerHTML = ''
        return true
    }
    checkPasswords = () => {
        const check = form.querySelector('.check').value
        const checkErrorMessage = form.querySelector('.check-error')
        const password = form.querySelector('.password').value
        if(password !== check){
            checkErrorMessage.innerHTML = 'passwords must be the same'
            return false
        }
        checkErrorMessage.innerHTML = ''
        return true
    }
    validateDate = () => {
        const date = form.querySelector('.date').value
        const dateErrorMessage = form.querySelector('.date-error')
        if(!date){
            dateErrorMessage.innerHTML = 'date is required'
            return false
        }
        dateErrorMessage.innerHTML = ''
        return true
    }
    toggleMenu = () => {
        if (menu_hamburger.classList.contains("show_menu")) {
            menu_hamburger.classList.remove("show_menu");
            close_hamburger_icon.style.display = "none";
            menu_icon.style.display = "block";
        } else {
            menu_hamburger.classList.add("show_menu");
            close_hamburger_icon.style.display = "block";
            menu_icon.style.display = "none";
        }
      }
    if(form){
        const closeModal = document.querySelector('.close_modal')

        form.addEventListener('submit', (e) => {
            const data = {}
            e.preventDefault()
            validateEmail()
            validateDate()
            validatePassword()
            checkPasswords()
            if(!validateEmail() || !validateDate() || !validatePassword() || !checkPasswords()){
                return false
            }
            form.childNodes.forEach(child => {
                if(child.nodeName == 'INPUT'){
                    data[child.name] = child.value
                }
            })
            console.log(data)
            e.target.reset();
        })
        closeModal.addEventListener('click', (e) => {
            form.classList.remove('active')
            const body = document.body;
            const scrollY = body.style.top;
            body.style.position = '';
            body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
          
            overlay.classList.remove('active')
            form.reset();
        })
    }

    open_modal.addEventListener('click', function(){
        form.classList.add('active')
        overlay.classList.add('active')
    })
    hamburger.addEventListener("click", toggleMenu);

    menu_item.forEach( 
        function(menu_item) { 
            menu_item.addEventListener("click", toggleMenu);
        }
    )
})