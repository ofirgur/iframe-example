const sendMassageToParent = type => {
    window.top.postMessage({
        message: 'payoneer-plugin',
        type,
        params: type === 'deeplink' ? {
            pathname: '/?action=withdrawal'
        } : {
            
        }
    }, '*');
};