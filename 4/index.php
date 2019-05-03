<?php
    $servername = "localhost"; 
    $username = "root"; 
    $password = ""; 
    $db_name = "db"; 
    $connection = new mysqli($servername, $username, $password, $db_name);

    function add_news($name, $text){ 
        global $connection;
        $query ="INSERT INTO artic VALUES(NULL, '$name', '$text')";
        $result = mysqli_query($connection, $query) or die("Ошибка " . mysqli_error($connection)); 
        if($result){
            echo "Данные добавлены";
        }
    }
    function del_news($id){
        global $connection;
        $query ="DELETE FROM artic WHERE id = $id";
        $result = mysqli_query($connection, $query) or die("Ошибка " . mysqli_error($connection)); 
        if($result) {
            echo "Данные удалены";
        }
    }

    function generate($name, $text){
        echo "<h1>$name</h1>";
        echo "<p>$text</p>";
    }

    function get_news() {
        global $connection;
        $query = "SELECT * FROM artic";
        $result = mysqli_query($connection, $query) or die("Ошибка " . mysqli_error($connection)); 
        if($result) { 
            $rows = mysqli_num_rows($result); 
            for ($i = 0; $i < $rows; $i++) { 
                $row = mysqli_fetch_row($result); 
                generate($row[1], $row[2]); 
            } 
        }
    }
    add_news(111, 1234);
    get_news();
    ?>
