var d = new Date();
document.getElementById("data").innerHTML = d.getHours() + ":" + d.getMinutes()
+ " " + d.getDate() + "." + Number(d.getMonth() + 1) + "." + d.getFullYear();

$(document).ready(function(){
    $("header").on("click", function() {
        $(this).css("color", "white");
    });

    $("img").on("mouseenter", function() {
        if($(window).width() >= 768){
            $(this).css({
                "width": "100%",
                "padding-bottom": "250px"
            });
            $(this).siblings().css("display", "none");
            $(this).parentsUntil("body").css("background", "black");
            $("header, nav, footer").css("visibility", "hidden");
            $("aside").css("display", "none");
      }
    });

    $("img").on("mouseleave", function(){
        if($(window).width() >= 768){
            $(this).css({
                "width": "50%",
                "padding": "2px"
            });
            $(this).siblings().css("display", "block");
            $(this).parentsUntil("body").css("background", "initial");
            $("header, nav, footer").css("visibility", "initial");
            $("aside").css("display", "initial");
        }
    });
});
