(() => {
    console.log('Hello world!');
    setTimeout(() => {
        sendMassageToParent('ready');
    }, 5000);
})();

const sendMassageToParent = type => {
    const params = {
        pathname: type === 'deeplinks' && 'http://localhost:8080/?action=withdrawal',
        successMsg: type === 'toast' && 'Success toast!!!'
    };
    
    window.top.postMessage({
        message: 'payoneer-plugin',
        type,
        params
    }, '*');
};
