$(document).ready(function(){

    $("form").validate({
        lang: 'de',
        rules: {
            name:{
                minlength: 3,
                maxlength: 30,
                required: true
            },
            email:{
                minlength: 3,
                maxlength: 20,
                required: true,
                email: true
            },
            telefon:{
                number: true
            }
        },
        highlight: function (element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error')
            $(element).parent().find('.form-control-feedback').removeClass('glyphicon-ok').addClass('glyphicon-remove');
        },
        unhighlight: function (element) {
            $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
            $(element).parent().find('.form-control-feedback').removeClass('glyphicon-remove').addClass('glyphicon-ok');
        },
        errorClass: 'help-block',
        errorPlacement: function (error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        },
        submitHandler: function() {
            var data = $("#contact").serialize();

            $.ajax({
                type	  : "POST",
                url 	  : "ajax/email.php",
                data    : data,
                success : function(q)
                {
                    $("#ContactFormDiv").html(q);
                }
            });
        }
    });

    $('#cancel').on('click', function () {
        $("#contact").validate().resetForm();
        $("#contact").find(".has-error, .has-success, .glyphicon-ok, .glyphicon-remove").removeClass("has-error has-success glyphicon-ok glyphicon-remove");
    });

});