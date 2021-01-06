(() => {
    setTimeout(() => {
        sendMassageToParent('ready');
    }, 5000);
    
    const onMessage = e => {
        if(e.message == 'payoneer-plugin') {
            console.log('helloooooooooooooooooo: ', e.data.type);
        }
    };
    
    window.addEventListener('message', onMessage);
})();

const sendMassageToParent = type => {
    console.log('sendMassageToParent: ', type);
    
    const params = {
        pathname: type === 'deeplink' && 'http://localhost:8080/?action=withdrawal',
        successMsg: type === 'toast' && 'Success toast!!!'
    };
    
    window.postMessage({
        message: 'payoneer-plugin',
        type,
        params
    }, '*');
};
