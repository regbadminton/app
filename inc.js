var days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var localeOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',hour: 'numeric', minute: 'numeric', hour12: true  };
var webregAnchor='<a href="https://webreg.surrey.ca/WebReg/Activities/ActivitiesAdvSearch.asp" target="_blank">Surrey WebReg Page</a>';
var locale='en-us';
var nl='<br>';
var ONE_DAY=86400000;
var EIGHTEEN_HOURS=64800000;

function getCourses(timestamp) {
    var total = arr.length;
    var courses=[];
    timestamp=timestamp/1000;
    for (var i = 0; i < total; i++)
        if (arr[i].Timestamp==timestamp) courses.push(arr[i]);
    return courses;
}
