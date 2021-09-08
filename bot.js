const fetch = require('node-fetch');
const { URLSearchParams } = require('url');

exports('SendMessageToDiscord', (id, message) => {
    let params = new URLSearchParams();
    params.append('channelID', id);
    params.append('type', 'message');
    params.append('message', message);
    fetch('http://127.0.0.1:36180/futureillogs', {
        method: 'post',
        body: params
    })
});

exports('SendEmbedToDiscord', (id, title, message, footer, color) => {
    let params = new URLSearchParams();
    params.append('channelID', id);
    params.append('type', 'embed');
    params.append('embed', JSON.stringify({ title: title, message: message, footer: footer, color: color }));
    fetch('http://127.0.0.1:36180/futureillogs', {
        method: 'post',
        body: params
    })
});

exports('SendImageToDiscord', (id, image) => {
    let params = new URLSearchParams();
    params.append('channelID', id);
    params.append('type', 'image');
    params.append('imageBase64', image);
    fetch('http://127.0.0.1:36180/futureillogs', {
        method: 'post',
        body: params
    })
});

exports('SendVideoToDiscord', (id, image) => {
    let params = new URLSearchParams();
    params.append('channelID', id);
    params.append('type', 'video');
    params.append('videoBase64', image);
    fetch('http://127.0.0.1:36180/futureillogs', {
        method: 'post',
        body: params
    })
});