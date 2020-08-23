
export const initCookies = ()=> {
    const message = document.querySelector('.cookies-message__container');
   function createCookie(name, value, days) {
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        let expires = "; expires=" + date.toGMTString();
        document.cookie = name+"="+value+expires+"; path=/";
    }
    function readCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for(let i=0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    };

    function closeCookiesWindow() {
        createCookie('cookies_accepted', 'T', 365);
        message.classList.remove('cookies-message__container--active');
    }
    
    function checkCookies() {
       if (readCookie('cookies_accepted') != 'T') {
            message.classList.add('cookies-message__container--active');
            document.querySelector('#accept-cookies-checkbox').addEventListener('click', ()=>closeCookiesWindow());
        }else {
            message.style.transition = 'transform 0s';
        }
    };
    
    const init = ()=> {
        checkCookies();
    };
    return init();
};

export const handleCookieInfo = ()=> {
    const cookieInfoWindow = document.querySelector('.cookies');
    cookieInfoWindow.classList.toggle('cookies--active');
};
