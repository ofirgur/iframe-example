const sendMassageToParent = () => {
    window.top.postMessage({
        message: 'payoneer-plugin',
        type: 'deeplink',
        action: 'withdrawal'
    }, '*');
};