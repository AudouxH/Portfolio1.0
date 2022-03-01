$(document).ready(function() {
    console.log('Rates js is ready');

    $("#Btn_rates").click(function() {
        console.log("click and open about");
        $("#Rates").css("display", "block");
        $("#Rates").css("position", "absolute");
        $("#menu").css("display", "none");
        $("#header").css("display", "none");
    });
});