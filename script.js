document.querySelector('footer #login').href += 'https://cityofsurrey.perfectmind.com/23615/Menu/Contact';
document.querySelector('footer #search').href = 'https://cityofsurrey.perfectmind.com' +
                                                '/23615/Menu/BookMe4BookingPages/Classes' +
                                                '?calendarId=ec6defcd-4317-4bf3-a72e-a9c6b4e5c897' +
                                                '&widgetId=15f6af07-39c5-473e-b053-96653f77a406' +
                                                '&embed=False';

addEventListener('load', Course.fetchCourses);
document.querySelectorAll('[name=dateSelect]').forEach(radio => radio.addEventListener('change', Course.fetchCourses));

if ('serviceWorker' in navigator)
  navigator.serviceWorker.register('/app/sw.js')
  .then(reg => console.log("Service Worker Registered",reg))
  .catch(err => console.warn(err));
