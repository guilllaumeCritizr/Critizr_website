var apn = require('apn');

var apnProvider = new apn.Provider({
    token: {
        key: 'apns.p8',
        keyId: '3K35ZZBR9L',
        teamId: 'RVYNC7UMEC',
    },
    production: false
});

var deviceToken = 'E9C1BD2D9E020BEACE2D57268B9164AABF20607CC4692331345F6F605F1FE8E9';

var notification = new apn.Notification();
notification.topic = 'com.critizr.test.DeepLinkTestFlunch';
notification.expiry = Math.floor(Date.now() / 1000) + 3600 * 48; // 48 hours
notification.badge = 3;
notification.contentAvailable = 1;
notification.sound = 'ping.aiff';
notification.alert = 'Que pensez-vous de votre dernière expérience chez Flunch ? \u270C';
notification.payload = {
    'czlink': 'https://critizr.herokuapp.com/FLUNCH/ABCDEF',
    'content-available': "1"
};

apnProvider.send(notification, deviceToken).then(function(result) {
    console.log(result);
});