const DATE_FORMAT = { year:'numeric',month:'numeric',day:'numeric'};
const HEADER_FORMAT={weekday:'long',year:'numeric',month:'long',day:'numeric'};
const UPDATED_FORMAT = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',hour: 'numeric', minute: 'numeric', hour12: true  };
const LOCALE='en-us';
const tomorrow=new Date();
const button1=document.querySelector('a');

let courses=[];
tomorrow.setDate(tomorrow.getDate()+1);
let strTomorrow=tomorrow.toLocaleString('ja-JP',DATE_FORMAT).split('/').reduce((holder,value)=>holder+=value);

(async function(){
    courses=(await(await fetch('https://regbadminton.com/api/?d='+strTomorrow)).json()).map(obj=>new Course(obj));
    switch (courses.length) {
        case 2:
            const button2=button1.cloneNode();
            button2.className='btn btn-light px-5 ml-5';  
            courses[1].displayButton(button2,2);

            button1.insertAdjacentElement('afterend',button2);
            button1.insertAdjacentElement('afterend',document.createElement('br'));
            button1.className='btn btn-light my-3 px-5 ml-5';  
        case 1:
            courses[0].displayButton(button1,1);
            button1.classList.remove('d-none');
        break;

        default:
            let div=document.createElement('div');
            div.className="mt-3 ml-5";
            div.textContent='No sessions found.';
            button1.insertAdjacentElement('afterend',div);
        break;
    }
    button1.insertAdjacentText('beforebegin',"For "+tomorrow.toLocaleString(LOCALE,HEADER_FORMAT)+':');
    button1.insertAdjacentElement("beforebegin",document.createElement('br'));

    document.querySelector("footer span").innerHTML=new Date().toLocaleString(LOCALE,UPDATED_FORMAT);
    document.querySelector('footer a').href='https://cityofsurrey.perfectmind.com/23615/Menu/BookMe4BookingPages/Classes?calendarId=ec6defcd-4317-4bf3-a72e-a9c6b4e5c897&widgetId=15f6af07-39c5-473e-b053-96653f77a406&embed=False';
    document.querySelector('footer').classList.remove('d-none');
})();

class Course{
    constructor(obj){
        this.date=obj.date.split('-').reduce((holder,value)=>holder+=value);
        this.classID=obj.classID;
        this.locationID=obj.locationID;
    }
    getURL(){
        return `https://cityofsurrey.perfectmind.com/23615/Menu/BookMe4EventParticipants?eventId=${this.classID}&occurrenceDate=${this.date}&widgetId=15f6af07-39c5-473e-b053-96653f77a406&locationId=${this.locationID}&waitListMode=False`;
    }
    displayButton=(button,i)=>{
        button.href=this.getURL();
        button.textContent='Session '+i;
    }
}
