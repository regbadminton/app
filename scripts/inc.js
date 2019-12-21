var localeOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',hour: 'numeric', minute: 'numeric', hour12: true  };
var DATE_FORMAT = { year: 'numeric', month: 'numeric', day: 'numeric' };
var LOCALE='en-us';

displayButton=(button,course,i)=>{
    button.href=course.getURL();
    button.textContent='Session '+i;
}

createButtons=(json)=>{
    courses=json.map(obj=>new Course(obj));
    console.log(courses.length);
    switch (courses.length) {
        case 2:
            button2=button1.cloneNode();
            button1.insertAdjacentElement('afterend',button2);
            button1.insertAdjacentElement('afterend',document.createElement('br'));
            displayButton(button2,courses[1],2);
            button1.className='btn btn-light my-3 px-5 ml-5';
            button2.className='btn btn-light px-5 ml-5';

        case 1:
            displayButton(button1,courses[0],1);
            button1.classList.remove('d-none');
        break;

        default:
            button1.insertAdjacentHTML('afterend','<div class="mt-3 ml-5">No sessions found.</div>');
        break;
    }
    button1.insertAdjacentText('beforebegin',"For "+tomorrow.toLocaleString(LOCALE,{weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})+':');
    button1.insertAdjacentElement("beforebegin",document.createElement('br'));
    document.querySelector("footer span").innerHTML=new Date().toLocaleString(LOCALE, localeOptions);
    document.querySelector('footer').classList.remove('d-none');
}