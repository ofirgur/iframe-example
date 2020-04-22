const sendMassageToParent = () => {
    window.top.postMessage({
        message: 'replay',
        type: 'deeplink',
        action: 'withdrawal'
    }, '*');
};