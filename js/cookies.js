document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptCookies = document.getElementById('acceptCookies');
    const declineCookies = document.getElementById('declineCookies');

    // Check if user has already made a choice
    if (!getCookie('cookieConsent')) {
        cookieConsent.style.display = 'block';
    }

    // Accept cookies
    acceptCookies.addEventListener('click', function() {
        setCookie('cookieConsent', 'accepted', 365);
        cookieConsent.style.display = 'none';
        // You can load your cookies/analytics scripts here
    });

    // Decline cookies
    declineCookies.addEventListener('click', function() {
        setCookie('cookieConsent', 'declined', 365);
        cookieConsent.style.display = 'none';
    });

    // Cookie helper functions
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function getCookie(name) {
        const cookieName = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');
        for(let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(cookieName) === 0) {
                return cookie.substring(cookieName.length, cookie.length);
            }
        }
        return "";
    }
});