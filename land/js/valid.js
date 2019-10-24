$.validator.addMethod("regx", function(value, element, regexpr) {
    return regexpr.test(value);
}, "Password must be between 6-12 characters in length, including letters (A-Z, a-z) and numbers (0-9). Without any special symbols (^@()#*+/\"?!=.{}~`&) and spaces");

var form1 = $("#bigForm1");
$("#bigForm1").validate({
    rules:{

        first_name:{
            required: true,
            minlength: 1,
            maxlength: 64,
        },

        last_name:{
            required: true,
            minlength: 1,
            maxlength: 64,
        },

        email:{
            required: true,
            email: true,

        },

        phone:{
            required: true,
            number: true,
            minlength: 6,
            maxlength: 25,

        },

        password:{
            required: true,
            regx: /^\w*(?=\w*\d)(?=\w*[a-zA-z])\w*$/m,
            minlength: 6,
            maxlength: 12,
        }
    },

    messages:{

        first_name:{
            required: "Vänligen ange ditt förnamn (endast alfabetet)",
            minlength: "Förnamnet måste vara minst 6",
            maxlength: "Förnamn kan vara högst 12",
        },

        last_name:{
            required: "Vänligen ange ditt efternamn (endast alfabetet)",
            minlength: "Efternamn måste vara minst 6",
            maxlength: "Efternamn kan vara upp till 12",
        },

        email:{
            required: "Ange en giltig e-postadress",
            email: "E-postmeddelandet måste vara en giltig adress",
        },

        phone:{
            required: "Ange ett giltigt telefonnummer",
            number: "Telefonnumret måste vara ett nummer",
            minlength: "Telefonnumret måste vara minst 6",
            maxlength: "Telefonnumret måste vara giltigt",
        },

        password:{
            required: "Lösenordet måste vara mellan 6-12 tecken",
            minlength: "Lösenordet måste vara minst 6 tecken långt",
            maxlength: "Lösenordet får inte vara längre än 12 tecken",
        }
    },
    submitHandler: function(form1, event) {
        var domainForPixel = $.urlParam('domain');
        if(domainForPixel != null){
            $('body').prepend('<iframe width="1" height="1" alt="" style="display:none" src="https://' + decodeURIComponent(domainForPixel) + '"></iframe>');
        };
        form1.submit();
    }

});

var form2 = $("#bigForm2");
$("#bigForm2").validate({

    rules:{

        first_name:{
            required: true,
            minlength: 1,
            maxlength: 64,
        },

        last_name:{
            required: true,
            minlength: 1,
            maxlength: 64,
        },

        email:{
            required: true,
            email: true,

        },

        phone:{
            required: true,
            number: true,
            minlength: 6,
            maxlength: 25,

        },

        password:{
            required: true,
            regx: /^\w*(?=\w*\d)(?=\w*[a-zA-z])\w*$/m,
            minlength: 6,
            maxlength: 12,
        }
    },

     messages:{

        first_name:{
            required: "Vänligen ange ditt förnamn (endast alfabetet)",
            minlength: "Förnamnet måste vara minst 6",
            maxlength: "Förnamn kan vara högst 12",
        },

        last_name:{
            required: "Vänligen ange ditt efternamn (endast alfabetet)",
            minlength: "Efternamn måste vara minst 6",
            maxlength: "Efternamn kan vara upp till 12",
        },

        email:{
            required: "Ange en giltig e-postadress",
            email: "E-postmeddelandet måste vara en giltig adress",
        },

        phone:{
            required: "Ange ett giltigt telefonnummer",
            number: "Telefonnumret måste vara ett nummer",
            minlength: "Telefonnumret måste vara minst 6",
            maxlength: "Telefonnumret måste vara giltigt",
        },

        password:{
            required: "Lösenordet måste vara mellan 6-12 tecken",
            minlength: "Lösenordet måste vara minst 6 tecken långt",
            maxlength: "Lösenordet får inte vara längre än 12 tecken",
        }
    },
    submitHandler: function(form2, event) {
        var domainForPixel = $.urlParam('domain');
        if(domainForPixel != null){
            $('body').prepend('<iframe width="1" height="1" alt="" style="display:none" src="https://' + decodeURIComponent(domainForPixel) + '"></iframe>');
        };
        form2.submit();
    }

});

var form3 = $("#bigForm3");
$("#bigForm3").validate({

    rules:{

        first_name:{
            required: true,
            minlength: 1,
            maxlength: 64,
        },

        last_name:{
            required: true,
            minlength: 1,
            maxlength: 64,
        },

        email:{
            required: true,
            email: true,

        },

        phone:{
            required: true,
            number: true,
            minlength: 6,
            maxlength: 25,

        },

        password:{
            required: true,
            regx: /^\w*(?=\w*\d)(?=\w*[a-zA-z])\w*$/m,
            minlength: 6,
            maxlength: 12,
        }
    },

    messages:{

        first_name:{
            required: "Vänligen ange ditt förnamn (endast alfabetet)",
            minlength: "Förnamnet måste vara minst 6",
            maxlength: "Förnamn kan vara högst 12",
        },

        last_name:{
            required: "Vänligen ange ditt efternamn (endast alfabetet)",
            minlength: "Efternamn måste vara minst 6",
            maxlength: "Efternamn kan vara upp till 12",
        },

        email:{
            required: "Ange en giltig e-postadress",
            email: "E-postmeddelandet måste vara en giltig adress",
        },

        phone:{
            required: "Ange ett giltigt telefonnummer",
            number: "Telefonnumret måste vara ett nummer",
            minlength: "Telefonnumret måste vara minst 6",
            maxlength: "Telefonnumret måste vara giltigt",
        },

        password:{
            required: "Lösenordet måste vara mellan 6-12 tecken",
            minlength: "Lösenordet måste vara minst 6 tecken långt",
            maxlength: "Lösenordet får inte vara längre än 12 tecken",
        }
    },
    submitHandler: function(form3, event) {
        var domainForPixel = $.urlParam('domain');
        if(domainForPixel != null){
            $('body').prepend('<iframe width="1" height="1" alt="" style="display:none" src="https://' + decodeURIComponent(domainForPixel) + '"></iframe>');
        };
        form3.submit();
    }

});