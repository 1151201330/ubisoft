<?php
  error_reporting(E_ALL ^ E_DEPRECATED);
  $db = mysql_connect("localhost","root","root"); //连接数据库   (地址 用户名 密码)
  mysql_select_db("ubisoft",$db); //选择数据库 数据库名称 连接
  mysql_query("set names utf8");//设置编码格式

?>