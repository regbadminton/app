if ('serviceWorker' in navigator)
  navigator.serviceWorker.register('/reg/sw.js')
  .then(reg => console.log("Service Worker Registered",reg))
  .catch(err => console.warn(err));

const DATE_FOMRAT = { weekday:'long',year:'numeric',month:'long',day:'numeric' } ;
const UPDATED_FORMAT = { weekday:'short',year:'numeric',month:'short',day:'numeric',
                         hour:'numeric',minute:'numeric',hour12:true };

const buttons = document.querySelectorAll('main a.btn');

const searchDomain = 'https://cityofsurrey.perfectmind.com/23615/Menu/BookMe4BookingPages/Classes';
document.querySelector('footer #login').href += 'https://cityofsurrey.perfectmind.com/23615/Menu/Contact';
document.querySelector('footer #search').href = searchDomain +
                                                '?calendarId=ec6defcd-4317-4bf3-a72e-a9c6b4e5c897'+
                                                '&widgetId=15f6af07-39c5-473e-b053-96653f77a406'+
                                                '&embed=False';

const toggleVisibility =()=> {
  [document.querySelector('.spinner-border'),
   document.querySelector('header'),
   document.querySelector('main'),
   document.querySelector('footer')
  ].forEach(node => node.classList.toggle('d-none'));
}

const fetchCourses =async()=> {
  toggleVisibility();
  let dates = { today: new Date(), tomorrow: new Date() };
  dates.tomorrow.setDate(dates.tomorrow.getDate() + 1);
  let date = document.querySelector("input[name=dateSelect]:checked").value;
  
  document.querySelector('#date span').innerHTML = dates[date].toLocaleString('en-us', DATE_FOMRAT);
  document.querySelector('#updated').innerHTML = dates.today.toLocaleString('en-us', UPDATED_FORMAT);

  let courses = (await(await fetch('https://regbadminton.com/api/?d='+ date)).json()).map(obj => new Course(obj));
  switch (courses.length) {
    case 2:
      courses[1].createButton();
      buttons[1].classList.remove('d-none');
      buttons[0].className = 'ml-sm-3 mr-sm-2 mx-lg-0 btn btn-light d-none mb-3 col-sm-5 col-lg-12';
    case 1:
      courses[0].createButton();
      buttons[0].classList.remove('d-none');
    break;
  
    default:
      document.querySelector('#none').classList.remove('d-none');
    break;
  }
  toggleVisibility();
}

addEventListener('load',fetchCourses);
document.querySelectorAll('[name=dateSelect]').forEach(radio => radio.addEventListener('change', fetchCourses));


class Course{

  constructor(obj){
      this.date = obj.date.replace(/-/g, '');
      this.classID = obj.classID;
      this.locationID = obj.locationID;
      this.session = obj.session;
  }

  createButton = ()=> {
    buttons[this.session - 1].href = `https://cityofsurrey.perfectmind.com/23615/Menu/BookMe4EventParticipants`+
                    `?eventId=${this.classID}`+
                    `&occurrenceDate=${this.date}`+
                    `&widgetId=15f6af07-39c5-473e-b053-96653f77a406`+
                    `&locationId=${this.locationID}`+
                    `&waitListMode=False`;
  }
}
