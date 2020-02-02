if ('serviceWorker' in navigator)
  navigator.serviceWorker.register('/sw.js')
  .then(reg => alert("Service Worker Registered",reg))
  .catch(err => alert(err));

const DATE_FOMRAT = { weekday:'long',year:'numeric',month:'long',day:'numeric' } ;
const UPDATED_FORMAT = { weekday:'short',year:'numeric',month:'short',day:'numeric',
                         hour:'numeric',minute:'numeric',hour12:true };

const button1 = document.querySelector('a');
const searchDomain = 'https://cityofsurrey.perfectmind.com/23615/Menu/BookMe4BookingPages/Classes';
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

fetch('https://regbadminton.com/api/?d=tomorrow').catch(error => console.error(error))
  .then(response => response.json()).then(json => {
    document.querySelector(".spinner-border").classList.add('d-none');
    courses = json.map(obj => new Course(obj));
    switch (courses.length) {
        case 2:
            const button2 = button1.cloneNode();
            button2.className = 'btn btn-light px-5 ml-5';  
            courses[1].addToButton(button2);

            button1.insertAdjacentElement('afterend',button2);
            button1.insertAdjacentElement('afterend',document.createElement('br'));
            button1.className = 'btn btn-light my-3 px-5 ml-5';  
        case 1:
            courses[0].addToButton(button1);
            button1.classList.remove('d-none');
        break;

        default:
            let div = document.createElement('div');
            div.className = "mt-3 ml-5";
            div.textContent = 'No sessions found.';
            button1.insertAdjacentElement('afterend', div);
        break;
    }
    button1.insertAdjacentText('beforebegin',"For " + tomorrow.toLocaleString( 'en-us', DATE_FOMRAT) + ':');
    button1.insertAdjacentElement("beforebegin",document.createElement('br'));

    document.querySelector("footer span").innerHTML = new Date().toLocaleString( 'en-us', UPDATED_FORMAT);
    document.querySelector('footer').classList.remove('d-none');
    document.querySelector('footer #login').href += 'https://cityofsurrey.perfectmind.com/23615/Menu/Contact';
    document.querySelector('footer #search').href = searchDomain +
                                                     '?calendarId=ec6defcd-4317-4bf3-a72e-a9c6b4e5c897'+
                                                     '&widgetId=15f6af07-39c5-473e-b053-96653f77a406'+
                                                     '&embed=False';
  }
);    

class Course{

  constructor(obj){
      this.date = obj.date.replace(/-/g, '');
      this.classID = obj.classID;
      this.locationID = obj.locationID;
      this.session = obj.session;
  }

  addToButton = button => {
    button.textContent = 'Session '+ this.session;
    button.href = `https://cityofsurrey.perfectmind.com/23615/Menu/BookMe4EventParticipants`+
                    `?eventId=${this.classID}`+
                    `&occurrenceDate=${this.date}`+
                    `&widgetId=15f6af07-39c5-473e-b053-96653f77a406`+
                    `&locationId=${this.locationID}`+
                    `&waitListMode=False`;
  }
}
