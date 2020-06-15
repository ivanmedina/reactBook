<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: multipart/form-data; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");



// require_once('connection.php');
$username=$password="";
$username= $_POST["username"];
$password= $_POST["password"];
// $date=getdate();
// $created= $date['mday']."-".$date['mon']."-".$date['year']; //crear logs


//     if (!empty($username) && !empty($password)){
//         // REVISAR QUE EL USERNAME EXISTA
//         $sql = "SELECT username FROM users where username='$username';";
//         $result = $conn->query($sql);
//         $row = mysqli_fetch_array($result);   
//         if (isset($row)) {    
//             // REVISAR QUE COINCIDA EL PASSWORD
//             $sql = "SELECT passw FROM users where username='$username';";
//             $result = $conn->query($sql);
//             $row = mysqli_fetch_array($result);
//             if ($row[0] == $password) {
//                 $data= array('access' => 'successful','message' => 'Welcome '.$username,'user' => $username);
//                 echo json_encode($data);   
//             }
//             else{
//                 $data= array('access' => 'denied','message' => 'Invalid Password');
//                 echo json_encode($data);
                
//             }
//         }
//         else {
//             $data= array('access' => 'denied','message' => 'User does not exists');
//             echo json_encode($data);
    
//         }
//     }
//     else
//     {
//         $data= array('access' => 'denied','message' => 'Pleas fill all fields');
//         echo json_encode($data);
//     }

      
//     $conn->close();

$data= array('access' => $password ,'message' => 'Welcome '.$username, 'user' => $username);
echo json_encode($data); 

?>
