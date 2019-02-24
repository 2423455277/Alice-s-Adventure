<?php

	$name=$_POST["yyy"];
	$time=$_POST["msg"];
	$sorce=$_POST["kkk"];
	
	
	$servername = "cdb-hbffl6x9.gz.tencentcdb.com:10000";
	$username = "root";
	$password = "wuben2423455277";
	$dbname="myDB";
	
	// 创建连接
	$conn = new mysqli($servername, $username, $password,$dbname);
	// 检测连接
	if ($conn->connect_error) {
		die("连接失败: " . $conn->connect_error);
	} 
	
	/*//使用 sql 创建数据表
	$sql = "CREATE TABLE Game (
	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
	name VARCHAR(30),
	time INT(6) NOT NULL,
	sorce INT(6) NOT NULL
	)";
	
	if ($conn->query($sql) === TRUE) {
		echo "Table Game created successfully";
	} else {
		echo "创建数据表错误: " . $conn->error;
	}*/
	
	$sql = "INSERT INTO Game (name, time, sorce)
	VALUES ('$name', '$time', '$sorce')";
	
	if ($conn->query($sql) === TRUE) {
		echo "";
	} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
	
	//数据库查询操作
	$sql3 = "SELECT id, name, time,sorce FROM Game ORDER BY time";
	$result3 = $conn->query($sql3);

	$sql2 = "SELECT id, name, time,sorce FROM Game ORDER BY sorce DESC";
	$result = $conn->query($sql2);
	
	echo '<html>
	<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black" />
	<title>游戏排行榜</title>
	<link rel="stylesheet" href="css/normalize3.0.2.min.css" />
	<link rel="stylesheet" href="css/css.css?v=15" />
	</head>
	<body background="back.png">';
	echo '<section id="ranking"> <span id="ranking_title">天梯榜</span>
					<section id="ranking_list">';
	
	
	
	//存储排名
	$m="999+";
	$i="0";
	if (mysqli_num_rows($result3) >0) {
		// 输出数据
		while($row = mysqli_fetch_assoc($result3)) {
			if($row["sorce"]!=560)
			{
				continue;
			}
			
			$i=$i+1;
			if($i>=11)
			{
				break;
			}
			if($sorce==$row["sorce"])
			{
				$m=$i;
			}
			if($i==1)
			{
				if($m==$i)
				{
					echo '<section class="box">';
				}
				else
				{
					echo '<section class="box">';
				}
				echo '<section class="col_1" title="1">';
				echo $i;
				echo '</section>
					<section class="col_2"><img src="images/woniu.png"  /></section>
					<section class="col_3">';
					echo $row["name"];
					echo '</section>';
					echo '<section class="col_4">';
					$tem=$row["time"]-$row["time"]%60;
					$mi=$tem/60;
					$se=$row["time"]%60;
					echo $mi;
					echo "分";
					echo $se;
					echo "秒";
					echo '</section>';
					echo '<section class="col_4">';
					echo $row["sorce"];
					echo '</section></section>';
			}
			if($i==2)
			{
				if($m==$i)
				{
					echo '<section class="box">';
				}
				else
				{
					echo '<section class="box">';
				}
				echo '<section class="col_1" title="2">';
				echo $i;
				echo '</section>
					<section class="col_2"><img src="images/pig.png"  /></section>
					<section class="col_3">';
					echo $row["name"];
					echo'</section>';
					echo '<section class="col_4">';
					$tem=$row["time"]-$row["time"]%60;
					$mi=$tem/60;
					$se=$row["time"]%60;
					echo $mi;
					echo "分";
					echo $se;
					echo "秒";
					echo '</section>';
					echo'<section class="col_4">';
					echo $row["sorce"];
					echo '</section></section>';
			}
			if($i==3)
			{
				if($m==$i)
				{
					echo '<section class="box">';
				}
				else
				{
					echo '<section class="box">';
				}
				echo '<section class="col_1" title="3">';
				echo $i;
				echo '</section>
					<section class="col_2"><img src="images/dog.png"  /></section>
					<section class="col_3">';
					echo $row["name"];
					echo '</section>';
					echo '<section class="col_4">';
					$tem=$row["time"]-$row["time"]%60;
					$mi=$tem/60;
					$se=$row["time"]%60;
					echo $mi;
					echo "分";
					echo $se;
					echo "秒";
					echo '</section>';
					echo'<section class="col_4">';
					echo $row["sorce"];
					echo '</section></section>';
			}
			if($i>=4)
			{
				if($m==$i)
				{
					echo '<section class="box">';
				}
				else
				{
					echo '<section class="box">';
				}
				echo '<section class="col_1">';
				echo $i;
				echo '</section>
					<section class="col_2"><img src="images/pic.jpg"  /></section>
					<section class="col_3">';
					echo $row["name"];
					echo '</section>';
					echo '<section class="col_4">';
					$tem=$row["time"]-$row["time"]%60;
					$mi=$tem/60;
					$se=$row["time"]%60;
					echo $mi;
					echo "分";
					echo $se;
					echo "秒";
					echo '</section>';
					echo'<section class="col_4">';
					echo $row["sorce"];
					echo '</section></section>';
			}
			
			
		}
	}





	if (mysqli_num_rows($result) >0) {
		// 输出数据
		while($row = mysqli_fetch_assoc($result)) {
			if($row["sorce"]==560)
			{
				continue;
			}
			$i=$i+1;
			if($i>=11)
			{
				break;
			}
			if($sorce==$row["sorce"])
			{
				$m=$i;
			}
			if($i==1)
			{
				if($m==$i)
				{
					echo '<section class="box">';
				}
				else
				{
					echo '<section class="box">';
				}
				echo '<section class="col_1" title="1">';
				echo $i;
				echo '</section>
					<section class="col_2"><img src="images/woniu.png"  /></section>
					<section class="col_3">';
					echo $row["name"];
					echo '</section>';
					echo '<section class="col_4">';
					$tem=$row["time"]-$row["time"]%60;
					$mi=$tem/60;
					$se=$row["time"]%60;
					echo $mi;
					echo "分";
					echo $se;
					echo "秒";
					echo '</section>';
					echo '<section class="col_4">';
					echo $row["sorce"];
					echo '</section></section>';
			}
			if($i==2)
			{
				if($m==$i)
				{
					echo '<section class="box">';
				}
				else
				{
					echo '<section class="box">';
				}
				echo '<section class="col_1" title="2">';
				echo $i;
				echo '</section>
					<section class="col_2"><img src="images/pig.png"  /></section>
					<section class="col_3">';
					echo $row["name"];
					echo'</section>';
					echo '<section class="col_4">';
					$tem=$row["time"]-$row["time"]%60;
					$mi=$tem/60;
					$se=$row["time"]%60;
					echo $mi;
					echo "分";
					echo $se;
					echo "秒";
					echo '</section>';
					echo'<section class="col_4">';
					echo $row["sorce"];
					echo '</section></section>';
			}
			if($i==3)
			{
				if($m==$i)
				{
					echo '<section class="box">';
				}
				else
				{
					echo '<section class="box">';
				}
				echo '<section class="col_1" title="3">';
				echo $i;
				echo '</section>
					<section class="col_2"><img src="images/dog.png"  /></section>
					<section class="col_3">';
					echo $row["name"];
					echo '</section>';
					echo '<section class="col_4">';
					$tem=$row["time"]-$row["time"]%60;
					$mi=$tem/60;
					$se=$row["time"]%60;
					echo $mi;
					echo "分";
					echo $se;
					echo "秒";
					echo '</section>';
					echo'<section class="col_4">';
					echo $row["sorce"];
					echo '</section></section>';
			}
			if($i>=4)
			{
				if($m==$i)
				{
					echo '<section class="box">';
				}
				else
				{
					echo '<section class="box">';
				}
				echo '<section class="col_1">';
				echo $i;
				echo '</section>
					<section class="col_2"><img src="images/pic.jpg"  /></section>
					<section class="col_3">';
					echo $row["name"];
					echo '</section>';
					echo '<section class="col_4">';
					$tem=$row["time"]-$row["time"]%60;
					$mi=$tem/60;
					$se=$row["time"]%60;
					echo $mi;
					echo "分";
					echo $se;
					echo "秒";
					echo '</section>';
					echo'<section class="col_4">';
					echo $row["sorce"];
					echo '</section></section>';
			}
			
			
		}
	}
		
if (mysqli_num_rows($result) >0) {
		// 输出数据
		while($row = mysqli_fetch_assoc($result)) {
			
			$i=$i+1;
			if($sorce==$row["sorce"])
			{
				$m=$i;
			}
			
		}
	}
  echo '</section>
  <a id="play_game" href="index.html" title="开始游戏">重新开始</a> </section>
	<a id="return_back" href="#" title="返回">我的排名：';
	echo $m;
	echo '</a>
</body>
</html>';
	
	
	$conn->close();
?>