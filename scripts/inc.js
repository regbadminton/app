var days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var localeOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',hour: 'numeric', minute: 'numeric', hour12: true  };
var LOCALE='en-us';
var nl='<br>';
var ONE_DAY=86400000;
var EIGHTEEN_HOURS=64800000;

function copySubmit(slotA, slotB) {
    return nl+'<button type="submit" name="cbarcode" value="'+slotA+'" onclick="copyValue('+slotB+');" id="copySubmit" class="btn btn-light btn-sm mt-2" >Copy and Submit</a>';
}

function getCourses(timestamp) {
    var total = arr.length;
    var courses=[];
    timestamp=timestamp/1000;
    for (var i = 0; i < total; i++)
        if (arr[i].Timestamp==timestamp) courses.push(arr[i]);
    return courses;
}

function createButtons(value)
{
    var buttons='<button type="submit" class="btn btn-link" name="cbarcode" value="'+value+'" style="padding: 0px .75rem">'+value+'</button>';
    buttons+='<button type="button" onclick="copyValue('+value+')" class="btn btn-light btn-sm" style="padding: 0px 0.5rem; background-color: #eaedf0; border-color: #cfd8dc;">Copy Barcode</button>';
    buttons+='<span id="c'+value+'"> <span class="badge badge-pill badge-success invisible">Copied!</span></span>';
    return buttons;
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

document.querySelector("#loginForm button").addEventListener("click", function()
//login()
{
    var clientBarcode = document.getElementsByName("ClientBarcode")[0].value;
    var accountPin = document.getElementsByName("AccountPIN")[0].value;
    if  (clientBarcode.trim()===""||accountPin.trim()==="")
            alert("Invalid ID or pin");
    else {
        /* if(document.getElementById("remember").checked)
        {
            var d = new Date();
            d.setTime(d.getTime() + (30*24*60*60*1000));      
            document.cookie = 'barcode='+clientBarcode+'; expires='+d.toUTCString();
            //submitDummyForm(clientBarcode, accountPin);
        } */
        document.getElementById("loginForm").submit();
        alert("Login Sent");
    }
});
