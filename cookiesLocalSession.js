
function store(){
    email=document.getElementById("exampleInputEmail1").value
    password=document.getElementById("exampleInputPassword1").value
    setCookie(email,password)
    setsession(email,password)
    setlocal(email,password)
}
function setCookie(email,password) {
    document.cookie = "Mydetails="+email+","+password;

    const d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie +=  ";" + expires;
    console.log(document.cookie);
}

function readCookie(cname){
    if(document.cookie.valueOf("Mydetails")){
        alert(document.cookie.valueOf(cname))
    }
    else{
        alert("no cookie available")
    }
}

function deleteCookie(cname){
    if(document.cookie.valueOf("Mydetails")){
        document.cookie = cname+"=delete; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
        alert("Cookie deleted sucessfully")
    }
    else{
        alert("no cookie available")
    }
}

function setsession(email, password){
    sessionStorage.setItem("Email", email);
    sessionStorage.setItem("Password", password);
}

function setlocal(email, password){
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", password);
}

function readLocal(){
    alert("Email:"+localStorage.getItem("Email")+"\npassword:"+localStorage.getItem("Password"));
}
function readSession(){
    alert("Email:"+sessionStorage.getItem("Email")+"\npassword:"+sessionStorage.getItem("Password"));
}