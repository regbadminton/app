let tomorrow=new Date();
let courses=[];
const button1=document.querySelector('a');

tomorrow.setDate(tomorrow.getDate()+1);
strTomorrow=tomorrow.toLocaleString('ja-JP',DATE_FORMAT).split('/').reduce((holder,value)=>holder+=value);

fetch('https://regbadminton.com/api/?d='+strTomorrow)
    .then(response=>response.json())
    .then(createButtons)
    .catch(error=>console.error(error))
;
