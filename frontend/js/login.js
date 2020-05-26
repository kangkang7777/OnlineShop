
let login = document.getElementById("login");
let register = document.getElementById("register");

login.addEventListener('click',function(){
    let data;
    data.append(document.getElementById("account").value);
    data.append(document.getElementById("password").value);
    getLogin(data);
},false)

register.addEventListener('click',function(){
    let data = "account="+document.getElementById("account").value+"&password="+document.getElementById("password").value;
    postResister(data);
},false)

function postResister(data)
{
    let xhr=new XMLHttpRequest();
    let url = "127.0.0.1:8081/register";
    xhr.onreadystatechange=function()
    {
        if (xhr.readyState===4 && xhr===200)
        {
            setCookie(data.get("account"));
        }
        else
        {
            alert("注册失败");
        }
    }
    xhr.open("POST",url+"?"+data,true);
    xhr.send();
}

function getLogin(data) {
    let xhr=new XMLHttpRequest();
    let url = "";
    xhr.onreadystatechange=function()
    {
        if (xhr.readyState===4 && xhr===200)
        {
            setCookie(data.get("account"));
            // document.getElementById("myDiv").innerHTML=xhr.responseText;
        }
        else
        {
            alert("登录失败");
        }
    }
    xhr.open("GET",url+"?"+data,true);
    xhr.send();
}

function setCookie(id) {
    document.cookie = "user="+id;
}

function getCookie() {
    return document.cookie;
}