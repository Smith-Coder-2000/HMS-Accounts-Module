
var Name=document.getElementById('name');
var email=document.getElementById('email');
var password=document.getElementById('password');
var conPassword=document.getElementById('password2');
var phno=document.getElementById('phno');
var address=document.getElementById('address');
var span=document.getElementsByTagName('span');


    function validate(){
        const regex1= /^([a-z0-9\.-]+)@(hospital)\.(in)$/;
        const regex2= /^[a-zA-Z]+$/
        const regex3 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])([a-z])([a-zA-Z0-9!@#$%^&*])(.*[a-z])?$/;
        const isValidLength = /^.{8,16}$/;
        //name validation
        if(Name.value.trim().length<3){
            $("#name").addClass("is-invalid")
            $("#name").removeClass("is-valid")
            span[1].innerText="length should be greater than two";
            span[1].className="invalid-feedback";
            return false
        }
        else if(!regex2.test(Name.value.trim())){
            $("#name").addClass("is-invalid")
            $("#name").removeClass("is-valid")
            span[1].innerText="special characters are not allowed";
            span[1].className="invalid-feedback";
            return false
        }
        else if(!regex1.test(email.value.trim())){
            $("#email").addClass("is-invalid")
                $("#email").removeClass("is-valid")
                span[2].innerText="invalid email";
                span[2].className="invalid-feedback";
                return false
        }
        else if(!regex3.test(password.value.trim()) && !isValidLength.test(password.value.trim())){
            $("#password").addClass("is-invalid")
            $("#password").removeClass("is-valid")
            span[3].innerText="provide a strong password";
            span[3].className="invalid-feedback";
            return false
        }
        else if(password.value!=conPassword.value || password.value==""){
            $("#password2").addClass("is-invalid")
            $("#password2").removeClass("is-valid")
            span[4].innerText="invalid Password";
            span[4].className="invalid-feedback";
            return false
        }
        else{
            $("#name").addClass("is-valid")
            $("#name").removeClass("is-invalid")
            $("#email").addClass("is-valid")
            $("#email").removeClass("is-invalid")
            $("#password").addClass("is-valid")
            $("#password").removeClass("is-invalid")
            $("#password2").addClass("is-valid")
            $("#password2").removeClass("is-invalid")
            return true
        }
}

email.onkeyup=function()
    {
        const regex1= /^([a-z0-9\.-]+)@(hospital)\.(in)$/;
        if(regex1.test(email.value.trim()))
        {

                $("#email").addClass("is-valid")
                $("#email").removeClass("is-invalid")
                span[2].innerText="looking good";
        }
        else{
                $("#email").addClass("is-invalid")
                $("#email").removeClass("is-valid")
                span[2].innerText="invalid email";
        }
    }

Name.onkeyup=function(){
    const regex2= /^[a-zA-Z]+$/
    if(Name.value.trim().length<3){
        $("#name").addClass("is-invalid")
        $("#name").removeClass("is-valid")
        span[1].innerText="length should be greater than two";
    }
    else if(!regex2.test(Name.value.trim())){
        $("#name").addClass("is-invalid")
        $("#name").removeClass("is-valid")
        span[1].innerText="special characters are not allowed";
    }
    else{
        $("#name").addClass("is-valid")
        $("#name").removeClass("is-invalid")
        span[1].innerText="looks good";
    }
}

password.onkeyup=function(){
    const regex3 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])([a-z])([a-zA-Z0-9!@#$%^&*])(.*[a-z])?$/;
    const isValidLength = /^.{8,16}$/;
    if(regex3.test(password.value.trim()) && isValidLength.test(password.value.trim())){
        $("#password").addClass("is-valid")
        $("#password").removeClass("is-invalid")
        span[3].innerText="looks good";
    }
    else{
        $("#password").addClass("is-invalid")
        $("#password").removeClass("is-valid")
        span[3].innerText="provide a strong password";
    }
}

conPassword.onkeyup=function(){
    if(password.value==conPassword.value && password.value!=""){
        $("#password2").addClass("is-valid")
        $("#password2").removeClass("is-invalid")
        span[4].innerText="looks good";
    }
    else{
        $("#password2").addClass("is-invalid")
        $("#password2").removeClass("is-valid")
        span[4].innerText="invalid Password";
    }
}

function numlock(event)
{
    let code=event.which;
    if(code>47&&code<58)
    return false;
    else
    return true;
}

