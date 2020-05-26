isLogin();


function isLogin()
{
    if(getCookie()!=="")
    {
        document.getElementById("login").innerHTML = "";
        document.getElementById("logoff").innerHTML = "&nbsplogoff";
        document.getElementById("cart").innerHTML = "&nbspcart";
        document.getElementById("order").innerHTML = "order";
    }
}

function getCookie()
{
    let a= document.cookie;
    return document.cookie;
}