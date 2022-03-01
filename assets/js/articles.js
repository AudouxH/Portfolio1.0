$(document).ready(function() {
    console.log('articles is ready');

    $(".btncross").click(function() {
        console.log("click to close intro");
        $("#Work").css("display", "none");
        $("#About").css("display", "none");
        $("#Rates").css("display", "none");
        $("#Contact").css("display", "none");
        $("#menu").css("display", "block");
        $("#header").css("display", "block");
        $('#header').css("animation", "none");
    });
});