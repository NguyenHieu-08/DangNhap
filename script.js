function inputName(object) {
    let pwd = document.querySelector('#password');
    let repwd = document.querySelector('#repassword');
    let result = document.querySelector('#result');

    if(object.value === 'Admin') {
        pwd.removeAttribute('disabled');
        repwd.removeAttribute('disabled');
        result.innerHTML='';
        if (pass == 'TheMaster') {
            result.innerHTML='Welcome!';
        } else if (pass == null) {
            result.innerHTML='Canceled.';
        } else {
            result.innerHTML='Wrong password';
        }
    } else if (object.value === 'null') {
        result.innerHTML=''
        result.innerHTML='Canceled';
    } else {
        result.innerHTML="I don't know you";
    }
}
