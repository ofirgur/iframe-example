(() => {
    console.log('Hello world!');
    setTimeout(() => {
        sendMassageToParent('ready');
    }, 5000);
})();

const sendMassageToParent = type => {
    window.top.postMessage({
        message: 'payoneer-plugin',
        type,
        params: type === 'deeplink' ? {
            pathname: 'http://localhost:8080/?action=withdrawal'
        } : {}
    }, '*');
};
