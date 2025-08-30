let generate = document.querySelector('#generate')
let displayPassword = document.querySelector('#password')
let copyPassword = document.querySelector('.display img')


generate.addEventListener('click', function () {
    let passwordLength = 12;
    let charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}<>?";
    let password = "";

    for (i = 0; i < passwordLength; i++) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
        // console.log(password)
    }

    displayPassword.value = password;
})


copyPassword.addEventListener('click', function () {
    if (displayPassword.value) {
        displayPassword.select();
        document.execCommand('copy');
        alert('Password copied to clipboard!');
    }else {
        alert(`Please enter or generate the password first`)
    }

    displayPassword.value = ''
})