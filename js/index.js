const sendMassageToParent = () => {
    window.top.postMessage({
        message: 'payoneer-plugin',
        type: 'deeplink',
        params: {
            pathname: '/?action=withdrawal'
        }
    }, '*');
};