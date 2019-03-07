$(document).ready(function(){
    $("#sub1 li").hover(function(){
        $(this).find("ul:first").css({visibility:"visible",display:"none"}).show(800);
    },function(){
        $(this).find("ul:first").css({visibility: "hidden"});
    });
});
