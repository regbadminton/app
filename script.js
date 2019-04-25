var now=new Date();
var midnight=new Date(now.getFullYear(), now.getMonth(), now.getDate(),0,0,0,0);
var midnightTs=midnight.getTime();

var courses=[];
switch (midnight.getDay())
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
        if (now.getTime()<midnightTs+EIGHTEEN_HOURS){
            courses=getCourses(midnightTs);
            document.getElementsByTagName('aside')[0].innerHTML='Barcodes for Sunday will be shown after 6pm on Saturday';
        }
        else {
            midnightTs=midnightTs+ONE_DAY;
            courses=getCourses(midnightTs);
        }
    break;

    default: break;
}

var courseDate=new Date(midnightTs);
var form='For '+days[courseDate.getDay()]+' '+months[courseDate.getMonth()]+' '+courseDate.getDate()+' '+courseDate.getFullYear()+':'+nl;

if (courses.length==2) form+='Slot A:'+createButtons(courses[0].Barcode)+nl+'Slot B:'+createButtons(courses[1].Barcode);
else if (courses.length==1) form+='Barcode:'+createButtons(courses[0].Barcode);
else if (courses.length==0) form+='No barcodes found.';

document.getElementsByTagName("form")[0].innerHTML=form;
document.getElementsByTagName("footer")[0].innerHTML='Last Updated:'+nl+now.toLocaleString(LOCALE, localeOptions);
