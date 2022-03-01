$(document).ready(function() {
    console.log('contact js is ready');

    $("#Btn_contact").click(function() {
        console.log("click and open contact");
        $("#Contact").css("display", "block");
        $("#Contact").css("position", "absolute");
        $("#menu").css("display", "none");
        $("#header").css("display", "none");
    });
});