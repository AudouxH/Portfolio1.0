$(document).ready(function() {
    console.log('work js is ready');

    $("#Btn_work").click(function() {
        console.log("click and open work");
        $("#Work").css("display", "block");
        $("#Work").css("position", "absolute");
        $("#menu").css("display", "none");
        $("#header").css("display", "none");
    });
});