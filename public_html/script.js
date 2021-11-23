$(document).ready(function () {
    $("#contact").validate({
        debug:true,
        errorClass: "alert alert-danger",
        errorLabelContainer: "#output-area",
        errorElement: "div",

        rules:{
            name: {
                required: true
            } ,
            email: {
                email: true,
                required: true
            },
            message: {
                required: true,
                maxlength: 2000,
            }
        },
        messages:{
            name: {
                required: "Name is a required field"
            },
            email: {
                email: "Please provide a valid email address",
                required: "Email is a required field"
            },
            message: {
                required: "Message is a required field",
                maxlength: "Message is to long"
            }
        },
        submitHandler: (form) => {
            $("#contact").ajaxSubmit({
                type: "POST",
                url: $("#contact").attr('action'),
                success: (ajaxOutput) => {
                    $("#output-area").css("display", "")
                    $("#output-area").html(ajaxOutput)
                    if($(".alert-success" >= 1)) {
                        $("#contact")[0].reset()
                    }
                }
            })
        }
    })
})