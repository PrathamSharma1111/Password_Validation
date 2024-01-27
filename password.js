function validatePassword() {
    var password = document.getElementById('password').value;
    var passwordMessage = document.getElementById('passwordMessage');

    var lowercaseRegex = /[a-z]/;
    var uppercaseRegex = /[A-Z]/;
    var numberRegex = /[0-9]/;

    // if (password.length <8) {
    //     passwordMessage.innerText = 'Password must have at least 8 characters';
    //     passwordMessage.style.color = 'red';
    // }else if(!lowercaseRegex.test(password)) {
    //     passwordMessage.innerText = 'Password must have at least 1 lowercase';
    //     passwordMessage.style.color = 'red';
    // }else if(!uppercaseRegex.test(password)) {
    //     passwordMessage.innerText = 'Password must have at least 1 uppercase';
    //     passwordMessage.style.color = 'red';
    // }else if(!numberRegex.test(password)) {
    //     passwordMessage.innerText = 'Password must have at least 1 number';
    //     passwordMessage.style.color = 'red';
    // }else {
    //     passwordMessage.innerText=" ";
    //    alert('Your password is valid!');
    // }
    var errorMessage = '';

if (password.length < 8) {
    errorMessage = 'Password must have at least 8 characters';
} else if (!lowercaseRegex.test(password)) {
    errorMessage = 'Password must have at least 1 lowercase';
} else if (!uppercaseRegex.test(password)) {
    errorMessage = 'Password must have at least 1 uppercase';
} else if (!numberRegex.test(password)) {
    errorMessage = 'Password must have at least 1 number';
}
passwordMessage.innerText='';
console.log('ErrorMessage:', errorMessage);
    if (errorMessage) {
    passwordMessage.innerText = errorMessage;
    passwordMessage.style.color = 'red';
} else {
    alert('Password is valid!');
}

}