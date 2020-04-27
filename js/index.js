const sendMassageToParent = () => {
    window.top.postMessage({
        message: 'payoneer-plugin',
        type: 'deeplink',
        pathname: '/?action=withdrawal',
        params: {
            p1: 'p1',
            p2: 'p2'
        }
    }, '*');
};