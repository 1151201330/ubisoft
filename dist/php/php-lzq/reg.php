<?php
    header("Content-type:text/html;charset=utf-8");
     error_reporting(E_ALL ^ E_DEPRECATED);
     $db = mysql_connect("localhost","root","root"); //连接数据库   (地址 用户名 密码)
     mysql_select_db("ubisoft",$db); //选择数据库 数据库名称 连接
     mysql_query("set names utf8");//设置编码格式

     $email = $_REQUEST["email"];
     $pwd = $_REQUEST["pwd"];
     $uname= $_REQUEST["uname"];
     $birthday= $_REQUEST["birthday"];

     $sql2 = "SELECT * FROM `ubisoft_register` WHERE (`reg_email`='$email')";  //查询前台传入的用户名
     $data = mysql_query($sql2);

    $result = mysql_fetch_array($data); //将查询结果提取成数组
    if($result){
        echo '该邮箱地址已经被其他 Ubisoft 账号使用。';
    }else{
        $sql3 = "INSERT INTO `ubisoft_register`(`reg_id`, `reg_name`, `reg_email`, `reg_pwd`, `reg_birthday`) VALUES (NULL,'$uname','$email','$pwd','$birthday')";
        $count = mysql_query($sql3); // 增加 删除 修改 返回受影响的行数
        if($count==1){
            echo 'shangchen.html';
        }
    }
?>