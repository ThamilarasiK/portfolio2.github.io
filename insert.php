
<?php
$username = $_POST['username'];
$email = $_POST['email'];
$mobileno = $_POST['mobileno'];
$website = $_POST['website'];
$messages = $_POST['messages'];

if (!empty($username) || !empty($email) || !empty($mobileno)) {
    $host = "127.0.0.1";
    $dbUsername = "root";
    $dbPassword = "Tamil@123";
    $dbname = "datas";

    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

    if (mysqli_connect_error()) {
        die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
    }else{
        $SELECT = "SELECT email From register Where email = ? Limit 1";
        $INSERT = "INSERT Into register (username, email, mobileno, website, messages) values(?, ?, ?, ?, ?)";

        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->bind_result($email);
        $stmt->store_result();
        $rnum = $stmt->num_rows();

        if($rnum==0){
            $stmt = $conn->prepare($INSERT);
            $stmt->bind_param("ssiss", $username, $email, $mobileno, $website, $message);
            $stmt->execute();
            echo "New record inserted sucessfully";
        } else {
            echo "Someone already register using this email";
        }
        $stmt->close();
        $conn->close();
    }
}else{
    echo "All fields are required";
    die();
}
?>
