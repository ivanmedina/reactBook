<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require_once('connection.php');
$hoy = date("Y-m-d H:i:s");
error_reporting(E_ALL);
ini_set('display_errors', '1');







$data = json_decode(file_get_contents('php://input'), true);

$post=$data['post'];
$username=$data['username'];
$username='username';
$id='id';
$us=$data[$username];
echo $us. "\n";


$sql = "SELECT id FROM users where username='$us';";
$resultIdU = $conn->query($sql);

$rows = array();

while($r = mysqli_fetch_assoc($resultIdU)) {
    $rows[] = $r;
}
print json_encode($rows);

echo "\n";


if (sizeof($rows) > 0) {





        // inserta el post 

        $idUs= $rows[0][$id];
        echo $idUs;    
        // echo json_encode($rows[0]['id']);
        $sql = "INSERT INTO posts (user_id, posted, post) VALUES ('$idUs', '$hoy', '$post' );";
        if (mysqli_query($conn, $sql)) {
            $data= array("success" =>TRUE,"message" => "Posetd");
            echo json_encode($data);
        } else {
            $data= array("success" =>FALSE,"message" => "Error while publishing");
            echo json_encode($data);
        }        
        

        
}
else{
    $data= array("success" =>FALSE,"message" => "Error while publishing");
    echo json_encode($data);
}
