$(function() {
    // 邮箱验证
    $('#email').blur(function() {
            var myReg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;　　
            if (myReg.test(this.value)) {　} else {　　　　
                myspan.innerText = "邮箱地址无效。";
                var hh = document.createElement('br');
                $('#myspan').append(hh);
                $('#email').css({
                    "border-color": "red",
                    "background-color": "pink"
                })

            }
            $('#email').keyup(function() {
                var myReg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;　　
                if (myReg.test(this.value)) {　
                    myspan.innerText = "";　
                    $('#email').css({
                        "border-color": "",
                        "background-color": ""
                    })　　
                } else {　　　　
                    myspan.innerText = "邮箱地址无效。";　
                    var hh = document.createElement('br');
                    $('#myspan').append(hh);　　
                    $('#email').css({
                        "border-color": "red",
                        "background-color": "pink"
                    })

                }
            })
        })
        // 确认邮箱
    $('#again').blur(function() {
            var myReg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;　　
            if (this.value === email.value) {
                tagain.innerText = "";　
                $('#again').css({
                    "border-color": "",
                    "background-color": ""
                })　　　
            } else if (!myReg.test(this.value)) {
                tagain.innerText = "邮箱地址无效。";　
                var hh = document.createElement('br');
                $('#tagain').append(hh);
                $('#again').css({
                    "border-color": "red",
                    "background-color": "pink"
                })　　
            } else if (this.value !== $('#email').value) {
                tagain.innerText = "邮箱地址不一致。";　
                var hh = document.createElement('br');
                $('#tagain').append(hh);　
                $('#again').css({
                    "border-color": "red",
                    "background-color": "pink"
                })　
            }

            $('#again').keyup(function() {
                var myReg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;　　
                if (this.value === email.value) {
                    tagain.innerText = "";　
                    $('#again').css({
                        "border-color": "",
                        "background-color": ""
                    })　　　
                } else if (!myReg.test(this.value)) {
                    tagain.innerText = "邮箱地址无效。";　
                    var hh = document.createElement('br');
                    $('#tagain').append(hh);
                    $('#again').css({
                        "border-color": "red",
                        "background-color": "pink"
                    })　　

                } else if (this.value !== $('#email').value) {
                    tagain.innerText = "邮箱地址不一致。";　
                    var hh = document.createElement('br');
                    $('#tagain').append(hh);　
                    $('#again').css({
                        "border-color": "red",
                        "background-color": "pink"
                    })　
                }
            })

        })
        // 验证密码

    $('#pwd').keyup(function() {
        var reg = /.{8,16}/;
        if (reg.test(this.value)) {
            checkpwd.innerText = "";
            $('#pwd').css({
                "border-color": "",
                "background-color": ""
            })　
        } else if (this.value === "") {
            checkpwd.innerText = "需要密码";
        } else {
            checkpwd.innerText = "密码不可用";
            var hh = document.createElement('br');
            $('#checkpwd').append(hh);　
            $('#pwd').css({
                "border-color": "red",
                "background-color": "pink"
            })　
        }
    })

    // 注册
    $('#create').on('click', function() {
        // if ($('#check' == "checked")) {
        //     $('#check').css("boder-color", "red");

        // }
        $.ajax({
            type: "post",
            url: "../php/php-lzq/reg.php",
            data: {
                "email": $('#email').val(),
                "pwd": $('#pwd').val(),
                "uname": $('#uname').val(),
                "birthday": $('#year').val() + $('#month').val() + $('#day').val()
            },
            // dataType: "dataType",
            success: function(data) {
                if (data == "lzq-login.html") {
                    location.href = data;
                } else {
                    myspan.innerText = data;
                    var hh = document.createElement('br');
                    $('#myspan').append(hh);
                }
            }
        });

    })






})