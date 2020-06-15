<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once('connection.php');
$names=$surnames=$username=$email=$password="";

$names= $_POST["names"];
$surnames= $_POST["surnames"];
$username= $_POST["username"];
$email= $_POST["email"];
$password= $_POST["password"];

$date=getdate();
$created= $date['mday']."-".$date['mon']."-".$date['year'];

 

    if (!empty($names)  && !empty($surnames) && !empty($username) && !empty($email) && !empty($password))
    {

        // REVISAR QUE EL MAIL NO ESTE REGISTRADO

        $sql = "SELECT email FROM users where email='$email';";
        $result = $conn->query($sql);
          
        if ($result->num_rows > 0) {
            $data= array('success' => FALSE,'message' => 'mail has already been registered');
            echo json_encode($data);
    
        }
        else
        {

            // REVISAR QUE EL USUARIO NO ESTE REGISTRADOS

            $sql = "SELECT username FROM users where username='$username';";
            $result = $conn->query($sql);
            
            if ($result->num_rows > 0) {
                $data= array('success' => FALSE,'message' => 'username not available');
                echo json_encode($data);
        
            }
            else
            {

                // GUARDAR TODO

                $sql = "INSERT INTO users (names, surnames, username, email, created, passw) VALUES ('$names', '$surnames', '$username', '$email', '$created', '$password' );";

                if (mysqli_query($conn, $sql)) {
                    $data= array("success" =>TRUE,"message" => "New user created successfully");
                    echo json_encode($data);
                } else {
                    $data= array('success' => FALSE,"message" => "An error have been ocurred");
                    echo json_encode($data);
                }   
            }
        }

    }


    else
    {

        $data= array('success' => FALSE,'message' => 'Pleas fill all fields');
        echo json_encode($data);
    }

      
    $conn->close();


?>
