class Course{
    constructor(obj){
        this.date = obj.date.replace(/-/g, '');
        this.classID = obj.classID;
        this.locationID = obj.locationID;
        this.session = obj.session;
        this.button = document.querySelectorAll('main a.btn')[this.session - 1];
    }
  
    createButton(){
      this.button.classList.remove('d-none');
      this.button.href = `https://cityofsurrey.perfectmind.com/23615/Menu/BookMe4EventParticipants`+
                      `?eventId=${this.classID}`+
                      `&occurrenceDate=${this.date}`+
                      `&widgetId=15f6af07-39c5-473e-b053-96653f77a406`+
                      `&locationId=${this.locationID}`+
                      `&waitListMode=False`;
    }
  
    static async fetchCourses() {
      document.querySelectorAll('header, main, footer').forEach(element => element.classList.add('invisible'));
      document.querySelectorAll('main #row > *').forEach(element => element.classList.add('d-none'));
      const spinner = document.querySelector('.spinner-border');
      spinner.classList.remove('d-none');
      
      let dates = { today: new Date(), tomorrow: new Date() };
      dates.tomorrow.setDate(dates.today.getDate() + 1);
      let date = document.querySelector("input[name=dateSelect]:checked").value;
      
      document.querySelector('#date span').innerHTML = dates[date].toLocaleString(
        'en-us', { weekday:'long',year:'numeric',month:'long',day:'numeric' });
        
      document.querySelector('#updated').innerHTML = dates.today.toLocaleString(
        'en-us', { weekday:'short',year:'numeric',month:'short',day:'numeric',
        hour:'numeric',minute:'numeric',hour12:true });
  
      let courses = (await(await fetch('https://regbadminton.com/api/?d='+ date)).json()).map(obj => new Course(obj));
      switch (courses.length) {
        case 2:
          courses[1].createButton();
          courses[0].button.className = 'ml-sm-3 mr-sm-2 mx-lg-0 btn btn-light mb-3 col-sm-5 col-lg-12';
        case 1:
          courses[0].createButton();
        break;
      
        default:
          document.querySelector('#none').classList.remove('d-none');
        break;
      }
      spinner.classList.add('d-none');
      document.querySelectorAll('header, main, footer').forEach(element => element.classList.remove('invisible'));
    }
  }
