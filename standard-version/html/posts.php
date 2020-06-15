<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once('connection.php');

$hoy = date("Y-m-d H:i:s");

$data=array();

$sql="SELECT posts.id, users.username, posts.posted, posts.post
FROM posts
INNER JOIN users ON posts.user_id=users.id
ORDER BY posts.id DESC
;";

$result = $conn->query($sql);

$rows = array();

while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}
print json_encode($rows);




// echo $hoy;
