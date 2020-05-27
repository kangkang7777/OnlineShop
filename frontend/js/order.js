isLogin();
let logoff = document.getElementById("logoff");
logoff.addEventListener('click',function(){
    delCookie();
},false)

function isLogin()
{
    if(getCookie()>5)
    {
        document.getElementById("login").innerHTML = "";
        document.getElementById("cart").innerHTML = "cart";
        document.getElementById("logoff").innerHTML = "&nbsplogoff";
    }
}

function getCookie()
{
    return document.cookie.length;
}

function delCookie() {
    document.cookie = "user=";
    window.event.returnValue=false;
    window.location.href = "index.html";
}