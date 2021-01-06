(() => {
    setTimeout(() => {
        sendMassageToParent('ready');
    }, 5000);
    
    const onMessage = e => {
        const { message, type } = e.data;
        if(message == 'payoneer-plugin') {
            console.log('helloooooooooooooooooo: ', type);
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
    
    window.top.postMessage({
        message: 'payoneer-plugin',
        type,
        params
    }, '*');
};
