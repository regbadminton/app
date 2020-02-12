document.querySelector('footer #login').href += 'https://cityofsurrey.perfectmind.com/23615/Menu/Contact';
document.querySelector('footer #search').href = 'https://cityofsurrey.perfectmind.com' +
                                                '/23615/Menu/BookMe4BookingPages/Classes' +
                                                '?calendarId=ec6defcd-4317-4bf3-a72e-a9c6b4e5c897' +
                                                '&widgetId=15f6af07-39c5-473e-b053-96653f77a406' +
                                                '&embed=False';

addEventListener('load', Course.fetchCourses);
document.querySelectorAll('[name=dateSelect]').forEach(radio => radio.addEventListener('change', Course.fetchCourses));

if ('serviceWorker' in navigator)( async()=> {
  console.log('Registering Service Worker...');
  const swReg = await navigator.serviceWorker.register('/app/sw.js');//NOT DEBUG
  // const swReg = await navigator.serviceWorker.register('/sw.js');//DEBUG
  console.log('Service Worker Registered...', swReg);
  
  console.log('Subscribing...');
  const subscription = await swReg.pushManager.subscribe({ 
    userVisibleOnly: true,
    applicationServerKey:'BDeetZQiM4kcemNhlUzxQq4MpX-zzVL9pWUbyQNMWjlLASgYFodiKZugM-tRef8NMmHHA_3l-o4Bnx49MQkd8iQ'
  });
  console.log('Subscribed...', JSON.stringify(subscription));

  console.log('Sending...');
  await fetch("https://regbadminton.com/push/", {
    method: "POST",
    body: JSON.stringify(subscription),
    headers: { "content-type": "application/json" }
  });
  console.log('Sent.');
  
})().catch(err => console.warn(err));
