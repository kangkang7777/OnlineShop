function createCookie(key, value, expires) {
    let cookieText = encodeURIComponent(key) + '=' + encodeURIComponent(value) + ';path=/';
    if (typeof expires == 'number') {
        let date = new Date();
        date.setDate(date.getDate() + expires);
        cookieText += ';expires=' + date;
    }
    document.cookie = cookieText;
}

function getCookie(key) {
    var arr = document.cookie.split('; ');
    for (var i = 0, len = arr.length; i < len; i++) {
        var list = arr[i].split('=');
        if (encodeURIComponent(key) === list[0]) {
            return decodeURIComponent(list[1]);
        }
    }
}
