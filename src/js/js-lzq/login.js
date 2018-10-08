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
        $.ajax({
            type: "post",
            url: "../php/php-lzq/reg.php",
            data: {
                "email": $(this).val(),
                "pwd": $(this).val()
            },
            //  dataType: "dataType",
            success: function(response) {

            }
        });
    })
    $('#create').on('click', function() {
        location.href = "lzq-register.html"
    })
})