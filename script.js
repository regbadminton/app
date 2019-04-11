var now=new Date(Date.now());
var midnight=new Date(now.getFullYear(), now.getMonth(), now.getDate(),0,0,0,0);
var midnightTs=midnight.getTime();
var weekday=midnight.getDay();

var courses=[];
switch (weekday)
{
    case 0://Sunday
        courses=getCourses(midnightTs);
    break;

    case 1://Monday
        midnightTs=midnightTs+3*ONE_DAY;
        courses=getCourses(midnightTs);
    break;

    case 2://Tuesday
        midnightTs=midnightTs+2*ONE_DAY;
        courses=getCourses(midnightTs);
    break;

    case 3://Wednesday
        midnightTs=midnightTs+ONE_DAY;
        courses=getCourses(midnightTs);
    break;

    case 4://Thursday
        courses=getCourses(midnightTs);
    break;

    case 5://Friday
        midnightTs=midnightTs+ONE_DAY;
        courses=getCourses(midnightTs);
    break;

    case 6://Saturday
        if (now.getTime<midnightTs+EIGHTEEN_HOURS) courses=getCourses(midnightTs);
        else {midnightTs=midnightTs+ONE_DAY; courses=getCourses(midnightTs);}
    break;

    default: break;
}

var courseDate=new Date(midnightTs);
var main='For '+days[courseDate.getDay()]+' '+months[courseDate.getMonth()]+' '+courseDate.getDate()+' '+courseDate.getFullYear()+':'+nl;

if (courses.length==2) main+='Slot A: '+courses[0].Barcode+nl+'Slot B: '+courses[1].Barcode;
else if (courses.length==1) main+='Barcode '+courses[0].Barcode+nl+'Barcodes for Sunday will be shown after 6pm on Saturday';
else if (courses.length==0) main+='No barcodes found.';

document.getElementsByTagName("main")[0].innerHTML=main;
document.getElementsByTagName("footer")[0].innerHTML='Last Updated:'+nl+now.toLocaleString(locale, localeOptions)+nl+webregAnchor;
