

export function acceptAllCookies(){
    Astro.cookies.set('southsideEssential', true, { expires: 28, path: '', sameSite: 'strict'});
    Astro.cookies.set('southsideThirdParty', true, { expires: 28, path: '', sameSite: 'strict'});
    Astro.cookies.set('southsideMarket', true, { expires: 28, path: '', sameSite: 'lax'});
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-THCW64VJYF');
}