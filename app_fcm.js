/**
 * Created by guillaumeboufflers on 28/02/2017.
 */

//Token dad6zVmM8ho:APA91bH2FCzEdJw_k7PW99vl-6jf2ldSLXDgvcH8duTbuvUBEpi7v26qr9JCIoaWMQ8_Q8cx2d-BMfcuMHhvDEHz9fOT6Fu5Rjtgyn521BDe4HpQdR1wPPqvhKZeNZKoVLMjfuGqmjnn

var FCM = require('fcm-push');

var serverKey = 'AAAA_HtaS_A:APA91bE5ZL604LvCy7Lhw9zaw9nmhDDDmVdnUU_yZljmUt8SFMdC01Q0k_Ovh2Xgik0n895TcY5NcrmtxPB4kk4sbZEGephkS8v1vsr62hyTjdWQtzSlVZ83PrciNarFMmbkzTqNVPh6';
var fcm = new FCM(serverKey);

var message = {
    to: 'dad6zVmM8ho:APA91bH2FCzEdJw_k7PW99vl-6jf2ldSLXDgvcH8duTbuvUBEpi7v26qr9JCIoaWMQ8_Q8cx2d-BMfcuMHhvDEHz9fOT6Fu5Rjtgyn521BDe4HpQdR1wPPqvhKZeNZKoVLMjfuGqmjnn',
    data: {
        'czlink': 'https://critizr.herokuapp.com/FLUNCH/ABCDEF'
    },
    notification: {
        'title': 'Flunch',
        'body': 'Que pensez-vous de votre dernière expérience chez Flunch ?'
    }
};

fcm.send(message)
    .then(function(response){
        console.log("Successfully sent with response: ", response);
    })
    .catch(function(err){
        console.log("Something has gone wrong!");
        console.error(err);
    })