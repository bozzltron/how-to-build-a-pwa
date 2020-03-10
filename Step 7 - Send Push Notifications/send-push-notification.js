const webpush = require('web-push');

const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/e1zQf8jxKxk:APA91bFtAnB-C_w9BiXp5jDU4FR4_ic43UyREermfgY3NdyrCuB3T1UypvIeMZhRNj-E6iXk-D9zFaMDCfbEfyUiiHTsAnaXMO5kcdPdaAI-_ed6LYlszzVHsp4DxZlI2tlSJ7V_0ydA","expirationTime":null,"keys":{"p256dh":"BHMI_3zJ1Hgg8em_jCL-DwVIpHaxLFZ-qNekVwyKtnXTiSlpWDYukBpicEWjIdGpWJSlHi3n9yT4AkLQjFQv9p8","auth":"cCUF5Nfq6lbw9evObym8fQ"}}
const payload = JSON.stringify({
  "title": "Fortune Cookie",
  "body": "Here is todays fortune!",
  "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKP3dCRybu_8k6HTFnfBRNb88MKVHqTgM3yjKGUh-KFQ237Rzp&s",
  // "image": "",
  // "badge": "",
  // "vibrate": "<Array of Integers>",
  // "sound": "<URL String>",
  // "dir": "<String of 'auto' | 'ltr' | 'rtl'>",

  // "tag": "<String>",
  // "data": "<Anything>",
  // "requireInteraction": "<boolean>",
  // "renotify": "<Boolean>",
  // "silent": "<Boolean>",

  // "actions": "<Array of Strings>",

  // "timestamp": "<Long>"
})

const options = {
  //gcmAPIKey: '< GCM API Key >',
  vapidDetails: {
    subject: 'mailto:support@localhost.com',
    publicKey: 'BJCCEDe3oQK81z7EmlFr09ztJ7emW4mgxhUT4eC-jv4Bl15JoqglMx4PC-CG10X8FDK9_ShYKAJE0csVlJ9OMw8',
    privateKey: 'oMOxO6qadHiHSskoEI589lZXTAvMGjqqpio07LW904M'
  }
}
       
webpush.sendNotification(
        pushSubscription,
        payload,
        options
).catch((err)=>{
  console.log('err', err);
})

