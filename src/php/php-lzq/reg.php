<?php
  error_reporting(E_ALL ^ E_DEPRECATED);
  $db = mysql_connect("localhost","root","root"); //连接数据库   (地址 用户名 密码)
  mysql_select_db("ubisoft",$db); //选择数据库 数据库名称 连接
  mysql_query("set names utf8");//设置编码格式


  $email = $_REQUEST["email"];
  $upwd = $_REQUEST["password"];

  $sql2 = "SELECT * FROM `ubisolt_register` WHERE (`reg_email`='$email')";  //查询前台传入的用户名
  $data = mysql_query($sql2);

 $result = mysql_fetch_array($data); //将查询结果提取成数组
 if($result){
     echo '{"status":200,"msg":"用户名已存在","res":false}';
 }else{
     $sql3 = "INSERT INTO `baidu_user`(`u_id`, `u_username`, `u_password`, `u_sex`) VALUES (NULL,'$uname','$upwd',0)";
     $count = mysql_query($sql3); // 增加 删除 修改 返回受影响的行数
     if($count==1){
         echo '{"status":200,"msg":"注册成功","res":true}';
     }
 }
?>