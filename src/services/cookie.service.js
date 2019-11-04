const setCookie = function (cname, cvalue, time) {
    var de;
    if (!time) {
        de = new Date();
        de.setFullYear(2030, 0, 1);
    } else {
        de = new Date();
        de.setFullYear(time);
    }
    var d = new Date();
    d.setTime(d.getTime() + de.getTime());
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};
const getCookie = function (cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};
const checkCookie = function (cookie_name) {
    var cookie = getCookie(cookie_name);
    if (cookie !== "") {
        return true;
    } else {
        return false;
    }
};
const deleteCookie = function (cookie_name) {
    document.cookie = cookie_name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};

export { setCookie, getCookie, checkCookie, deleteCookie };
