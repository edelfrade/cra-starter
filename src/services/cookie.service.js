const setCookie = (cname, cvalue, time) => {
  let de;
  if (!time) {
    de = new Date();
    de.setFullYear(2030, 0, 1);
  } else {
    de = new Date();
    de.setFullYear(time);
  }
  const d = new Date();
  d.setTime(d.getTime() + de.getTime());
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
};
const getCookie = function (cname) {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};
const checkCookie = function (cookie_name) {
  const cookie = getCookie(cookie_name);
  if (cookie !== '') {
    return true;
  }
  return false;
};
const deleteCookie = function (cookie_name) {
  document.cookie = `${cookie_name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};

export {
  setCookie, getCookie, checkCookie, deleteCookie,
};
