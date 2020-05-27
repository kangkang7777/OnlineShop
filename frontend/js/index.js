isLogin();
let logoff = document.getElementById("logoff");
logoff.addEventListener('click',function(){
delCookie();
},false)

document.getElementById("goods-1").addEventListener('click',function(){addCart(1);},false)
document.getElementById("goods-2").addEventListener('click',function(){addCart(2);},false)
document.getElementById("goods-3").addEventListener('click',function(){addCart(3);},false)
document.getElementById("goods-4").addEventListener('click',function(){addCart(4);},false)
document.getElementById("goods-5").addEventListener('click',function(){addCart(5);},false)
document.getElementById("goods-6").addEventListener('click',function(){addCart(6);},false)
document.getElementById("goods-7").addEventListener('click',function(){addCart(7);},false)



function addCart(num)
{
    if(getCookie()>5)
    {

        let xhr=new XMLHttpRequest();
        let url = "http://127.0.0.1:8086/user/addCart";
        let data = "account=";
        for(let i = 5;i<document.cookie.length;i++)
            data+=document.cookie[i];
        data+="&num="+num;
        xhr.onreadystatechange=function()
        {
            if (xhr.readyState===4)
            {
                if(xhr.response === "true") {
                    alert("添加购物车成功");
                }
                else
                    alert("添加失败");
            }
        }
        xhr.open("POST",url+"?"+data,true);
        xhr.send();
    }
    else {
        alert("请先登录！");
        window.location.href="login.html";
    }
}

function isLogin()
{
    if(getCookie()>5)
    {
        document.getElementById("login").innerHTML = "";
        document.getElementById("logoff").innerHTML = "&nbsplogoff";
        document.getElementById("cart").innerHTML = "&nbspcart";
        document.getElementById("order").innerHTML = "order";
    }
}

function getCookie()
{
    return document.cookie.length;
}

function delCookie() {
    document.cookie = "user=";
}