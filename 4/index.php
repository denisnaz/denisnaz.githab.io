<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <h1>Новостная лента</h1>
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
    function get_news_admin() {
        global $connection;
        $query = "SELECT * FROM artic";
        $result = mysqli_query($connection, $query) or die("Ошибка " . mysqli_error($connection)); 
        if($result) { 
            $rows = mysqli_num_rows($result); 
            for ($i = 0; $i < $rows; $i++) { 
                $row = mysqli_fetch_row($result); 
                generate($row[1], $row[2]); 
                echo "<a href = 'delete.php?id=$row[0]'>del</a>";
            } 
        }
    }
    ?>
    </body>
</html>
