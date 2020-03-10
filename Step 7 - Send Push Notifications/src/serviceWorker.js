// Check that service workers are supported
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
    .then(function(reg) { 
      console.log('Service Worker Registered'); 
      registeredServiceWorker = reg;

      if(reg.pushManager) {

        reg.pushManager.getSubscription().then(function(sub) {
          if (sub === null) {
            if(Notification.permission == "granted") {
              subscribeUser();
            }
          } else {
            // We have a subscription, update the database
            updateSubscriptionOnServer(sub);
          }
        })
        .catch(function(e){
          console.log(e);
        });
  
      }

    });

  });

}

var registeredServiceWorker = null;

function urlB64ToUint8Array(base64String) {

  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

function subscribeUser() {
  const applicationServerKey = urlB64ToUint8Array(window.PUSH_PUBLIC_KEY);
  registeredServiceWorker.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: applicationServerKey
  })
  .then(function(subscription) {
    console.log('User is subscribed.');

    updateSubscriptionOnServer(subscription);
  
  })
  .catch(function(err) {
    console.log('Failed to subscribe the user: ', err);
  });
}

function updateSubscriptionOnServer(subscription, callback) {
  console.log("persist to server", JSON.stringify(subscription));
  // var request = new XMLHttpRequest();
  // request.open('POST', '/subscriptions', true);
  // request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  
  // request.onload = function() {
  //   if (request.status >= 200 && request.status < 400) {
  //     // Success!
  //     var data = JSON.parse(request.responseText);
  //     if(callback) callback(request, data);
  //   } else {
  //     // We reached our target server, but it returned an error
  //     if(callback) callback(request, null);
  //   }
  // };

  // request.onerror = function(err) {
  //   // There was a connection error of some sort
  //   if(callback) callback(request, null, err);
  // };
  
  // request.send(JSON.stringify(subscription));
}