let btn = document.getElementById('create-account-button')




btn.addEventListener('click', () => {
    let errors = 0;

    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let confirmPass = document.getElementById('confirm-password')

    let errorName = document.getElementById('icon-error-name')
    let errorEmail = document.getElementById('icon-error-email')
    let errorPassword = document.getElementById('icon-error-password')
    let errorConfirmPass = document.getElementById('icon-error-password-confirm')

    let errorNameText = document.getElementById('name-error-msg')
    let errorEmailText = document.getElementById('email-error-msg')
    let errorPasswordText = document.getElementById('password-error-msg')
    let errorPasswordConfirmTex = document.getElementById('password-confirm-error-msg')

    valor = email.value
    if(email.value == null || email.value.length == 0){
        errorEmail.style.display = 'block';
        errorEmailText.style.display = 'block';
        email.classList.add('errorInput')
        errors += 1
    }else{
        errorEmail.style.display = 'none';
        errorEmailText.style.display = 'none';
        email.classList.remove('errorInput')
        if(errors > 0){
            errors -= 1
        }
    }

    if(name.value == null || name.value.length == 0){
        errorName.style.display = 'block';
        errorNameText.style.display = 'block';
        name.classList.add('errorInput')
        errors += 1
    }else{
        errorName.style.display = 'none';
        errorNameText.style.display = 'none';
        name.classList.remove('errorInput')
        if(errors > 0){
            errors -= 1
        }
    }

    if(password.value == null || password.value.length < 8){
        errorPassword.style.display = 'block';
        errorPasswordText.style.display = 'block';
        password.classList.add('errorInput')
        errors += 1
    }else{
        errorPassword.style.display = 'none';
        errorPasswordText.style.display = 'none';
        password.classList.remove('errorInput')
        if(errors > 0){
            errors -= 1
        }
    }

    if(confirmPass.value !== password.value || confirmPass.value == null){
        errorConfirmPass.style.display = 'block';
        errorPasswordConfirmTex.style.display = 'block';
        confirmPass.classList.add('errorInput')
        errors += 1
    }else{
        errorConfirmPass.style.display = 'none';
        errorPasswordConfirmTex.style.display = 'none';
        confirmPass.classList.remove('errorInput')
        if(errors > 0){
            errors -= 1
        }
    }


    let form = document.getElementById('form-register')

    form.addEventListener('submit', function(event){
        console.log(errors)
        if (errors > 0){
            event.preventDefault();
        }
    })  
    
})