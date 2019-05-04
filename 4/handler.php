<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="refresh" content="0;http://localhost/4/admin.php">
</head>
<body>
	<?php
		require 'index.php'; 
		add_news($_POST['name'], $_POST['text']);
	?>
</body>
</html>