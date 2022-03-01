$(document).ready(function() {
    console.log('about js is ready');

    $("#Btn_about").click(function() {
        console.log("click to open about");
        $("#About").css("display", "block");
        $("#About").css("position", "absolute");
        $("#menu").css("display", "none");
        $("#header").css("display", "none");
    });

    $("#Studies").click(function() {
        $("#Picture_profile").toggleClass("hidden");
        $("#content_studies").toggleClass("hidden");
        $("#Experiences").toggleClass("hidden");
        $("#Competences").toggleClass("hidden");
        $("#Hobbies").toggleClass("hidden");
        $(".up_arrow").toggleClass("hidden");
        $(".down_arrow").toggleClass("hidden");
    });

    $("#Experiences").click(function() {
        $("#Picture_profile").toggleClass("hidden");
        $("#content_experiences").toggleClass("hidden");
        $("#Studies").toggleClass("hidden");
        $("#Competences").toggleClass("hidden");
        $("#Hobbies").toggleClass("hidden");
        $(".up_arrow").toggleClass("hidden");
        $(".down_arrow").toggleClass("hidden");
    });

    $("#Competences").click(function() {
        $("#Picture_profile").toggleClass("hidden");
        $("#content_competences").toggleClass("hidden");
        $("#Experiences").toggleClass("hidden");
        $("#Studies").toggleClass("hidden");
        $("#Hobbies").toggleClass("hidden");
        $(".up_arrow").toggleClass("hidden");
        $(".down_arrow").toggleClass("hidden");
    });

    $("#Hobbies").click(function() {
        $("#Picture_profile").toggleClass("hidden");
        $("#content_hobbies").toggleClass("hidden");
        $("#Experiences").toggleClass("hidden");
        $("#Competences").toggleClass("hidden");
        $("#Studies").toggleClass("hidden");
        $(".up_arrow").toggleClass("hidden");
        $(".down_arrow").toggleClass("hidden");
    });
});