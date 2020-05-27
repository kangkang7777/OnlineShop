isLogin();
getCart();

let logoff = document.getElementById("logoff");
logoff.addEventListener('click',function(){
    delCookie();
},false)

let pay = document.getElementById("pay");
pay.addEventListener('click',function(){
    payment();
},false)

function getCart()
{
    let xhr=new XMLHttpRequest();
    let url = "http://127.0.0.1:8086/user/getCart";
    let data = "account=";
    for(let i = 5;i<document.cookie.length;i++)
        data+=document.cookie[i];
    xhr.onreadystatechange=function()
    {
        if (xhr.readyState===4)
        {
            if(xhr.response !== "") {
                let test3 = xhr.responseType;
                showCart(xhr.responseText);
            }
            else
                alert("获取购物车失败");
        }
    }
    xhr.open("POST",url+"?"+data,true);
    xhr.send();
}

function payment() {
    let xhr=new XMLHttpRequest();
    let url = "http://127.0.0.1:8086/user/pay";
    let data = "account=";
    for(let i = 5;i<document.cookie.length;i++)
        data+=document.cookie[i];
    xhr.onreadystatechange=function()
    {
        if (xhr.readyState===4)
        {
            if(xhr.response === "true") {
                alert("结算成功");
                window.location.href="index.html"
            }
            else
                alert("结算失败");
        }
    }
    xhr.open("POST",url+"?"+data,true);
    xhr.send();
}

function showCart(array)
{
    let totalPrice =0;
    let price = [2999,999,99,369,369,298,298];
    for(let i =0;i<7;i++)
    {
        if(parseInt(array[2*i+1],10)===0)
        {
            document.getElementById("goods-"+i).style.display = 'none';
        }
        else
        {
            document.getElementById("count-"+i).innerHTML = "×"+array[2*i+1];
            totalPrice+=price[i]*parseInt(array[2*i+1]);
        }
    }
    document.getElementById("price").innerHTML = "总计："+totalPrice+"元";
}

function isLogin()
{
    if(getCookie()>5)
    {
        document.getElementById("login").innerHTML = "";
        document.getElementById("logoff").innerHTML = "&nbsplogoff";
        document.getElementById("order").innerHTML = "order";
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
