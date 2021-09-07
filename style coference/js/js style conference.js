$(function() { //$(document).ready(function(){})
    $("section").hide().fadeIN(1000);
    $("a").click(function(e){
        e.preventDefault();
        $link = $(this).attr("href");
        $("section").fadeOut(1000, function(){
            window.location = $link
        });
    });

    $(windo).scroll(function();
    if($(this).scrollTop()){
        $("#toTop").fadeIn();
    }else {
        $("#stoTop").fadeOut();
    });

    $("#toTop").click(function(){
        $("html,body").animate({scrolTop: 0 }.1000)
    });

})

//what do we use to represent as element that was effect by and Event
