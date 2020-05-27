let flag = 0
let Array = [];
isLogin();
getOrder();
let logoff = document.getElementById("logoff");
logoff.addEventListener('click',function(){
    delCookie();
},false)
let next = document.getElementById("next");
next.addEventListener('click',function(){
    Array = Array.slice(5,Array.length);
    showOrder(Array);
},false)

function getOrder() {
    let xhr=new XMLHttpRequest();
    let url = "http://127.0.0.1:8086/user/getOrder";
    let data = "account=";
    for(let i = 5;i<document.cookie.length;i++)
        data+=document.cookie[i];
    xhr.onreadystatechange=function()
    {
        if (xhr.readyState===4)
        {
            if(xhr.response !== "") {
                let arr = xhr.response.split("],[")
                arr[0] = arr[0].replace("[[", "");
                arr[arr.length - 1] = arr[arr.length - 1].replace("]]", "");
                Array = arr;
                if(arr!=='[]')
                    showOrder(arr);
            }
            else
                alert("获取购订单失败");
        }
    }
    xhr.open("POST",url+"?"+data,true);
    xhr.send();
}

function showOrder(arr) {
        if (arr.length - flag < 5)
        {
            for(let i =4;i>=arr.length;i--)
            {
                document.getElementById("goods-" + i).style.display = "none";
            }
            document.getElementById("next").style.display = "none";
        }

        for (let i = flag; i < 5, i < arr.length - flag; i++) {
            let text = "";
            let name = ["限定主机", "典藏游戏", "T恤", "PS4版游戏", "XBOX版游戏", "PC版游戏", "STEAM版游戏"];
            let price = [2999, 999, 99, 369, 369, 298, 298];
            let totalPrice = 0;
            for (let j = 0; j < 7; j++) {
                if (parseInt(arr[i][2 * j], 10) !== 0) {
                    totalPrice += price[j] * parseInt(arr[i][2 * j], 10);
                    text += name[j] + "*" + parseInt(arr[i][2 * j], 10) + " ";
                }
            }

            if (arr[i] !== "" && arr[i] !== "0,0,0,0,0,0,0") {
                text += "  <br/> 总计：" + totalPrice + "元";
                document.getElementById("goods-" + i).innerHTML = text;
            }
        }

}

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