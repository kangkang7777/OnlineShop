
let login = document.getElementById("login");
let register = document.getElementById("register");

login.addEventListener('click',function(){
    let data = "account="+document.getElementById("account").value+"&password="+document.getElementById("password").value;
    getLogin(data);
},false)

register.addEventListener('click',function(){
    let data = "account="+document.getElementById("account").value+"&password="+document.getElementById("password").value;
    postResister(data);
},false)

function postResister(data)
{
    let xhr=new XMLHttpRequest();
    let url = "http://127.0.0.1:8086/register";
    xhr.onreadystatechange=function()
    {
        if (xhr.readyState===4)
        {
            if(xhr.response === "true") {
                let account = "";
                for(let i = 8;i<data.length;i++)
                {
                    if(data[i] === "&")
                        break;
                    account+=data[i];
                }
                setCookie(account);
                alert("注册成功");
                window.location.href = "index.html";
            }
            else
                alert("注册失败");
        }
    }
    xhr.open("POST",url+"?"+data,true);
    xhr.send();
}

function getLogin(data) {
    let xhr=new XMLHttpRequest();
    let url = "http://127.0.0.1:8086/login";
    xhr.onreadystatechange=function()
    {
        if (xhr.readyState===4)
        {
            if(xhr.response === "true") {
                let account = "";
                for(let i = 8;i<data.length;i++)
                {
                    if(data[i] === "&")
                        break;
                    account+=data[i];
                }
                setCookie(account);
                alert("登录成功");
                window.location.href = "index.html";
            }
            else
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