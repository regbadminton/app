<?php
date_default_timezone_set('America/Vancouver');
$getCourses=function($timestamp)
{
    $jstr=file_get_contents('data/webreg.json');
    $objs=json_decode($jstr);
    $courses=array();
    foreach ($objs as $obj)
    {
        if($obj->Timestamp==$timestamp)
            $courses[]=$obj;
    }
    return $courses;
};

$tsMidnight=strtotime(date('D M d Y'));
$w=getdate($tsMidnight)['wday'];
$courses=array();
switch ($w)
{
    case '0'://Sunday
        $courses=$getCourses($tsMidnight);
    break;
    
    case '1'://Monday
        $courses=$getCourses(strtotime('+3 days', $tsMidnight));
    break;
    
    case '2'://Tuesday
        $courses=$getCourses(strtotime('+2 days', $tsMidnight));
    break;
    
    case '3'://Wednesday
        $courses=$getCourses(strtotime('+1 days', $tsMidnight));
    break;
    
    case '4'://Thursday
        $courses=$getCourses($tsMidnight);
    break;
    
    case '5'://Friday
        $courses=$getCourses(strtotime('+1 day', $tsMidnight));
    break;
    
    case '6'://Saturday
        if (time()<strtotime('+18 hours', $tsMidnight))
            $courses=$getCourses(strtotime($tsMidnight));
        else
            $courses=$getCourses(strtotime('+1 day', $tsMidnight));
    break;
    
    default:break;  
}

echo'<!DOCTYPE html><html><head><title>Badminton Registration</title>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head><body><h5 style="margin: 3%; font-weight: normal;">';

if(count($courses)==2)
{
    echo 'For '.date('l F j Y', $courses[0]->Timestamp).':<br/>';
    echo 'Slot A: '. $courses[0]->Barcode.'<br/>';
    echo 'Slot B: '. $courses[1]->Barcode;
}
else if(count($courses)==1)
{
    echo 'For '.date('l F j Y', $course->Timestamp).':<br/>';
    echo 'Barcode: '. $course->Barcode;
    echo '<br>Barcodes for Sunday will be shown after 6pm on Saturday';
}
else echo "<br>No courses found.";
echo '</h5></body></html>';
?>