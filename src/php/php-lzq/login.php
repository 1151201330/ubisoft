<?php
  error_reporting(E_ALL ^ E_DEPRECATED);
  $db = mysql_connect("localhost","root","root"); //连接数据库   (地址 用户名 密码)
  mysql_select_db("ubisoft",$db); //选择数据库 数据库名称 连接
  mysql_query("set names utf8");//设置编码格式



  $email = $_REQUEST["email"];
  $pwd = $_REQUEST["pwd"];

  
  $sql2 = "SELECT * FROM `ubisoft_register` WHERE (`reg_email`='$email' AND `reg_pwd`='$pwd')";
  $data = mysql_query($sql2);
  $result = mysql_fetch_array($data); //将查询结果提取成数组
  if ($result) {
    echo "shangchen.html";
} else {
   echo "无效的邮箱或密码";

}
?>