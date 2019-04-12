var days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var localeOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',hour: 'numeric', minute: 'numeric', hour12: true  };
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

function createControls(value)
{
    var controls='<a onclick="copyValue('+value+');" href="https://webreg.surrey.ca/WebReg/Activities/ActivitiesAdvSearch.asp" target="_blank">'+value+'</a> ';
    controls+='<button value="'+value+'" onclick="copyValue('+value+');" class="btn btn-light btn-sm" style="padding: 0px 0.5rem; background-color: #eaedf0; border-color: #cfd8dc;">Copy Barcode</button>';
    controls+='<span id="c'+value+'"></span>';
    return controls;
}

function copyValue(value)
{
    document.getElementById('c'+value).innerHTML=' <span class="badge badge-pill badge-success fade">Copied!</span>';
    var tmp = document.createElement('input');
    tmp.value = value;
    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand('copy');
    tmp.remove();
}
