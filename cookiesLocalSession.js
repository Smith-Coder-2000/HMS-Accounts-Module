
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
    var details = getCookie(cname);
    if(details!=""){
        alert(details)
    }
    else{
        alert("no cookie available")
    }
}

function deleteCookie(cname){
    var details = getCookie(cname);
    console.log(details)
    if(details!=undefined && details!=false){
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

function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    if(cDecoded !="")
    {
        const cArr = cDecoded.split('; ');
        let res;
        cArr.forEach(val => {
            if (val.indexOf(name) === 0) res = val.substring(name.length);
        })
        return res
    }
    else {
        return false;
    }
    
}

function readLocal(){
    alert("Email:"+localStorage.getItem("Email")+"\npassword:"+localStorage.getItem("Password"));
}
function readSession(){
    alert("Email:"+sessionStorage.getItem("Email")+"\npassword:"+sessionStorage.getItem("Password"));
}