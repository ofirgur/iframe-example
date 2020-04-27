const sendMassageToParent = () => {
    window.top.postMessage({
        message: 'payoneer-plugin',
        type: 'deeplink',
        pathname: '?action=withdrawal'
    }, '*');
};