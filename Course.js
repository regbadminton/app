class Course{

    constructor(obj){
        this.date = obj.date.replace(/-/g, '');
        this.classID = obj.classID;
        this.locationID = obj.locationID;
        this.session = obj.session;
    }
  
    createButton(){
      buttons[this.session - 1].classList.remove('d-none');
      buttons[this.session - 1].href = `https://cityofsurrey.perfectmind.com/23615/Menu/BookMe4EventParticipants`+
                      `?eventId=${this.classID}`+
                      `&occurrenceDate=${this.date}`+
                      `&widgetId=15f6af07-39c5-473e-b053-96653f77a406`+
                      `&locationId=${this.locationID}`+
                      `&waitListMode=False`;
    }
  
    static async fetchCourses(){
      const visibleElements = document.querySelectorAll('header, footer, .spinner-border');
      visibleElements.forEach(node => node.classList.toggle('d-none'));
      document.querySelectorAll('main #row>*').forEach(element => element.classList.add('d-none'));
      
      let dates = { today: new Date(), tomorrow: new Date() };
      dates.tomorrow.setDate(dates.today.getDate() + 1);
      let date = document.querySelector("input[name=dateSelect]:checked").value;
      
      document.querySelector('#date span').innerHTML = dates[date].toLocaleString('en-us', DATE_FOMRAT);
      document.querySelector('#updated').innerHTML = dates.today.toLocaleString('en-us', UPDATED_FORMAT);
  
      let courses = (await(await fetch('https://regbadminton.com/api/?d='+ date)).json()).map(obj => new Course(obj));
      switch (courses.length) {
        case 2:
          courses[1].createButton();
          buttons[0].className = 'ml-sm-3 mr-sm-2 mx-lg-0 btn btn-light d-none mb-3 col-sm-5 col-lg-12';
        case 1:
          courses[0].createButton();
        break;
      
        default:
          document.querySelector('#none').classList.remove('d-none');
        break;
      }
      visibleElements.forEach(node => node.classList.toggle('d-none'));
    }
  }