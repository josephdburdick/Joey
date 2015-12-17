<?php 
include ('projects.php');
$postData = $_GET['project'];
echo json_encode ($projects[$postData]);
?>


