$(document).ready(function () {
    
    $(".close").click(function () {
        $(".alert").fadeOut();
    });

    $("#firstButton").click(function () {
        $(".collapse1").slideToggle("slow");
    });

    $(".collapsed").click(function () {

        let target = $($(this).data("target"));
    
        if (target.is(":visible")) {
            target.slideUp();
        } else {
            $(".collapse").slideUp();
            target.slideToggle("slow");
        }
    });

});