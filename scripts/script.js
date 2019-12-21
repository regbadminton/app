var now=new Date();
var midnight=new Date(now.getFullYear(), now.getMonth(), now.getDate(),0,0,0,0);
var midnightTs=midnight.getTime();
var courses=[];

var form='For '+days[courseDate.getDay()]+' '+months[courseDate.getMonth()]+' '+courseDate.getDate()+' '+courseDate.getFullYear()+':'+nl;

if (courses.length==2) form+='Slot A:'+createButtons(courses[0].Barcode)+nl+'Slot B:'+createButtons(courses[1].Barcode)+copySubmit(courses[0].Barcode, courses[1].Barcode);
else if (courses.length==1) form+='Barcode:'+createButtons(courses[0].Barcode);
else if (courses.length==0) form+='No sessions found.';

document.getElementsByTagName("footer")[0].innerHTML='Last Updated:'+nl+now.toLocaleString(LOCALE, localeOptions);
