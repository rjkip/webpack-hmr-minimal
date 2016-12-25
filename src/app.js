// Change this file and the application reloads

const { message } = require('./message.js');
document.body.innerHTML = message;

if (module.hot) {
    module.hot.accept('./message', () => {
        // How to replace the old module with the new module in your app is up to you
        const { message } = require('./message.js');
        document.body.innerHTML = message;
    });
}
