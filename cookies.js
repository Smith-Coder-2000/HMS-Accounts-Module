

function change()
        {
            var value=document.getElementById("color").value;
            if(value!="Change background color" && value!="get the current color code" && value!="default background color")
            {
                document.body.style.backgroundColor=value;
                setCookie("color",value,30)
            }
            else if(value=="get the current color code"){
                readCookie(color)
            }
            else if(value=="default background color"){
                deleteCookie("color")
                document.body.style.backgroundColor="#ffffff";
            }
        }



function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

function deleteCookie(cname){
    document.cookie = cname+"=delete; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
}

function readCookie(cname){
    alert(document.cookie.valueOf(cname))
}

window.onload=function()
        {
            if(document.cookie.valueOf("color"))
            {
                var a=document.cookie.split("=");
                document.getElementById("color").value=a[1];
                document.body.style.backgroundColor=a[1];
            }
        }