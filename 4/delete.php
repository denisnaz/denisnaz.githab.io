<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="refresh" content="0;http://localhost/4/admin.php">
</head>
<body>
	<?php 
		$id = (int)$_GET['id'];
		require 'index.php';
		del_news($id);
	?>
</body>
</html>

