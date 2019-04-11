function getCourses(timestamp)
{
    var jsonStr='[{"Barcode":4653593,"Date":"Thu Apr 11 2019","Slot":"a","Timestamp":"1554966000","Weekday":"4"},{"Barcode":4653594,"Date":"Thu Apr 18 2019","Slot":"a","Timestamp":"1555570800","Weekday":"4"},{"Barcode":4653595,"Date":"Thu Apr 25 2019","Slot":"a","Timestamp":"1556175600","Weekday":"4"},{"Barcode":4653596,"Date":"Thu May 02 2019","Slot":"a","Timestamp":"1556780400","Weekday":"4"},{"Barcode":4653597,"Date":"Thu May 09 2019","Slot":"a","Timestamp":"1557385200","Weekday":"4"},{"Barcode":4653598,"Date":"Thu May 16 2019","Slot":"a","Timestamp":"1557990000","Weekday":"4"},{"Barcode":4653599,"Date":"Thu May 23 2019","Slot":"a","Timestamp":"1558594800","Weekday":"4"},{"Barcode":4653600,"Date":"Thu May 30 2019","Slot":"a","Timestamp":"1559199600","Weekday":"4"},{"Barcode":4653601,"Date":"Thu Jun 06 2019","Slot":"a","Timestamp":"1559804400","Weekday":"4"},{"Barcode":4653602,"Date":"Thu Jun 13 2019","Slot":"a","Timestamp":"1560409200","Weekday":"4"},{"Barcode":4653603,"Date":"Thu Jun 20 2019","Slot":"a","Timestamp":"1561014000","Weekday":"4"},{"Barcode":4653604,"Date":"Thu Jun 27 2019","Slot":"a","Timestamp":"1561618800","Weekday":"4"},{"Barcode":4653617,"Date":"Thu Jun 27 2019","Slot":"b","Timestamp":"1561618800","Weekday":"4"},{"Barcode":4653616,"Date":"Thu Jun 20 2019","Slot":"b","Timestamp":"1561014000","Weekday":"4"},{"Barcode":4653615,"Date":"Thu Jun 13 2019","Slot":"b","Timestamp":"1560409200","Weekday":"4"},{"Barcode":4653614,"Date":"Thu Jun 06 2019","Slot":"b","Timestamp":"1559804400","Weekday":"4"},{"Barcode":4653613,"Date":"Thu May 30 2019","Slot":"b","Timestamp":"1559199600","Weekday":"4"},{"Barcode":4653612,"Date":"Thu May 23 2019","Slot":"b","Timestamp":"1558594800","Weekday":"4"},{"Barcode":4653611,"Date":"Thu May 16 2019","Slot":"b","Timestamp":"1557990000","Weekday":"4"},{"Barcode":4653610,"Date":"Thu May 09 2019","Slot":"b","Timestamp":"1557385200","Weekday":"4"},{"Barcode":4653609,"Date":"Thu May 02 2019","Slot":"b","Timestamp":"1556780400","Weekday":"4"},{"Barcode":4653608,"Date":"Thu Apr 25 2019","Slot":"b","Timestamp":"1556175600","Weekday":"4"},{"Barcode":4653607,"Date":"Thu Apr 18 2019","Slot":"b","Timestamp":"1555570800","Weekday":"4"},{"Barcode":4653606,"Date":"Thu Apr 11 2019","Slot":"b","Timestamp":"1554966000","Weekday":"4"},{"Barcode":4653619,"Date":"Sat Apr 13 2019","Slot":"n","Timestamp":"1555138800","Weekday":"6"},{"Barcode":4640645,"Date":"Sat Apr 20 2019","Slot":"n","Timestamp":"1555743600","Weekday":"6"},{"Barcode":4653620,"Date":"Sat Apr 27 2019","Slot":"n","Timestamp":"1556348400","Weekday":"6"},{"Barcode":4640646,"Date":"Sat May 11 2019","Slot":"n","Timestamp":"1557558000","Weekday":"6"},{"Barcode":4640647,"Date":"Sat May 18 2019","Slot":"n","Timestamp":"1558162800","Weekday":"6"},{"Barcode":4640648,"Date":"Sat May 25 2019","Slot":"n","Timestamp":"1558767600","Weekday":"6"},{"Barcode":4640649,"Date":"Sat Jun 01 2019","Slot":"n","Timestamp":"1559372400","Weekday":"6"},{"Barcode":4640650,"Date":"Sat Jun 08 2019","Slot":"n","Timestamp":"1559977200","Weekday":"6"},{"Barcode":4640651,"Date":"Sat Jun 15 2019","Slot":"n","Timestamp":"1560582000","Weekday":"6"},{"Barcode":4640652,"Date":"Sat Jun 29 2019","Slot":"n","Timestamp":"1561791600","Weekday":"6"},{"Barcode":4653622,"Date":"Sun Apr 14 2019","Slot":"a","Timestamp":"1555225200","Weekday":"0"},{"Barcode":4653623,"Date":"Sun Apr 21 2019","Slot":"a","Timestamp":"1555830000","Weekday":"0"},{"Barcode":4653624,"Date":"Sun Apr 28 2019","Slot":"a","Timestamp":"1556434800","Weekday":"0"},{"Barcode":4653625,"Date":"Sun May 05 2019","Slot":"a","Timestamp":"1557039600","Weekday":"0"},{"Barcode":4653626,"Date":"Sun May 12 2019","Slot":"a","Timestamp":"1557644400","Weekday":"0"},{"Barcode":4653627,"Date":"Sun May 19 2019","Slot":"a","Timestamp":"1558249200","Weekday":"0"},{"Barcode":4653628,"Date":"Sun May 26 2019","Slot":"a","Timestamp":"1558854000","Weekday":"0"},{"Barcode":4653629,"Date":"Sun Jun 02 2019","Slot":"a","Timestamp":"1559458800","Weekday":"0"},{"Barcode":4653630,"Date":"Sun Jun 09 2019","Slot":"a","Timestamp":"1560063600","Weekday":"0"},{"Barcode":4653631,"Date":"Sun Jun 16 2019","Slot":"a","Timestamp":"1560668400","Weekday":"0"},{"Barcode":4653632,"Date":"Sun Jun 23 2019","Slot":"a","Timestamp":"1561273200","Weekday":"0"},{"Barcode":4653633,"Date":"Sun Jun 30 2019","Slot":"a","Timestamp":"1561878000","Weekday":"0"},{"Barcode":4653650,"Date":"Sun Jun 30 2019","Slot":"b","Timestamp":"1561878000","Weekday":"0"},{"Barcode":4653649,"Date":"Sun Jun 23 2019","Slot":"b","Timestamp":"1561273200","Weekday":"0"},{"Barcode":4653648,"Date":"Sun Jun 16 2019","Slot":"b","Timestamp":"1560668400","Weekday":"0"},{"Barcode":4653647,"Date":"Sun Jun 09 2019","Slot":"b","Timestamp":"1560063600","Weekday":"0"},{"Barcode":4653646,"Date":"Sun Jun 02 2019","Slot":"b","Timestamp":"1559458800","Weekday":"0"},{"Barcode":4653645,"Date":"Sun May 26 2019","Slot":"b","Timestamp":"1558854000","Weekday":"0"},{"Barcode":4653644,"Date":"Sun May 19 2019","Slot":"b","Timestamp":"1558249200","Weekday":"0"},{"Barcode":4653643,"Date":"Sun May 12 2019","Slot":"b","Timestamp":"1557644400","Weekday":"0"},{"Barcode":4653642,"Date":"Sun May 05 2019","Slot":"b","Timestamp":"1557039600","Weekday":"0"},{"Barcode":4653641,"Date":"Sun Apr 28 2019","Slot":"b","Timestamp":"1556434800","Weekday":"0"},{"Barcode":4653640,"Date":"Sun Apr 21 2019","Slot":"b","Timestamp":"1555830000","Weekday":"0"},{"Barcode":4653639,"Date":"Sun Apr 14 2019","Slot":"b","Timestamp":"1555225200","Weekday":"0"}]';
    var arr=JSON.parse(jsonStr);
    var total = arr.length;
    var courses=[];
    for (var i = 0; i < total; i++)
    {
        if (arr[i].Timestamp==timestamp)
        {
            courses.push(arr[i]);
        }
    }
    return courses;
}

var now=new Date(Date.now());
var midnight=new Date(now.getFullYear(), now.getMonth(), now.getDate(),0,0,0,0);
var displayDate=midnight.getTime();
var midnightTs=(displayDate/1000);
var weekday=midnight.getDay();
var courses=[];

switch (weekday)
{
    case 0://Sunday
        courses=getCourses(midnightTs);
    break;

    case 1://Monday
        courses=getCourses(midnightTs+86400*3);
        displayDate=displayDate+86400000*3;
    break;

    case 2://Tuesday
        courses=getCourses(midnightTs+86400*2);
        displayDate=displayDate+86400000*2;
    break;

    case 3://Wednesday
        courses=getCourses(midnightTs+86400);
        displayDate=displayDate+86400000;
    break;

    case 4://Thursday
        courses=getCourses(midnightTs);
    break;

    case 5://Friday
        courses=getCourses(midnightTs+86400);
        displayDate=displayDate+86400000;
    break;

    case 6://Saturday
        if (now.getTime/1000<midnightTs+3600*18)
        {
            courses=getCourses(midnightTs);
        }
        else
        {
            courses=getCourses(midnightTs+86400); 
            displayDate=displayDate+86400000;
        }
    break;

    default: break;
}

var h5='';
strWeekday=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
strMonth=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

courseDate=new Date(displayDate);
dateString=strWeekday[courseDate.getDay()]+' '+strMonth[courseDate.getMonth()]+' '+courseDate.getDate()+' '+courseDate.getFullYear();

if (courses.length==2)
    h5='For '+dateString+':<br/>Slot A: '+courses[0].Barcode+'<br/>Slot B: '+courses[1].Barcode;
else if(courses.length==1)
    h5='For '+dateString+':<br/>Barcode '+courses[0].Barcode+'<br/>Barcodes for Sunday will be shown after 6pm on Saturday';
else h5='<br>No courses found.';

document.getElementsByTagName("h5")[0].innerHTML=h5;
