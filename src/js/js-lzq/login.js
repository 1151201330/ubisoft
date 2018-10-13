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
        // 登录

    $('#enter').on('click', function() {
        // 保存cookie

        $.ajax({
            type: "post",
            url: "../php/php-lzq/login.php",
            data: {
                "email": $('#email').val(),
                "pwd": $('#pwd').val()
            },
            //  dataType: "dataType",
            success: function(data) {
                if (data == "shangchen.html") {
                    location.href = data;
                    // 登录信息保存cookie
                    document.cookie = $("#email").val() + "=" + $("#pwd").val() + "; ";
                    // var uname = document.cookie = $("#email").val()+ "="  + "; "
                    if (remember.checked) {
                        var d = new Date();
                        d.setDate(d.getDate() + 3);
                        document.cookie = $("#email").val() + "=" + $("#pwd").val() + "; " + "expires=" + d;
                    }

                } else {
                    span.innerText = data;
                    var hh = document.createElement('br');
                    $('#span').append(hh);
                }
            }

        });
    })
    $('#create').on('click', function() {
        location.href = "lzq-register.html";
    })

})