$(document).ready(function() {
    $("#main-logo").hover(function () {
        $(".img-icons .img-i-1").show(0.8);
        $(".img-icons .img-i-2").show(0.8);
        $(".img-icons .img-i-3").show(0.8);
        $(".img-icons .img-i-4").show(0.8);
        $(".img-icons .img-i-5").show(0.8);
        $(".img-icons .img-i-6").show(0.8);

        $(".img-icons").fadeIn();

        $(".img-icons .img-i-1").css({
            top: "80px",
            left: "80px",
            transition: "all 0.8s",
        });

        $(".img-icons .img-i-2").css({
            top: "80px",
            left: "-102px",
            transition: "all 0.8s",
        });

        $(".img-icons .img-i-3").css({
            top: "270px",
            left: "190px",
            transition: "all 0.8s",
        });

        $(".img-icons .img-i-4").css({
            top: "270px",
            left: "-207px",
            transition: "all 0.8s",
        });

        $(".img-icons .img-i-5").css({
            top: "440px",
            left: "80px",
            transition: "all 0.8s",
        });

        $(".img-icons .img-i-6").css({
            top: "440px",
            left: "-102px",
            transition: "all 0.8s",
        });

    });

    $(".container").mouseleave(function () {

        $(".img-icons .img-i-1").css({
            top: "224px",
            left: "-26px",
            transition: "all 0.8s",
        });

        $(".img-icons .img-i-2").css({
            top: "224px",
            left: "-26px",
            transition: "all 0.8s",
        });

        $(".img-icons .img-i-3").css({
            top: "224px",
            left: "-26px",
            transition: "all 0.8s",
        });

        $(".img-icons .img-i-4").css({
            top: "224px",
            left: "64px",
            transition: "all 0.8s",
        });

        $(".img-icons .img-i-4").css({
            top: "224px",
            left: "64px",
            transition: "all 0.8s",
        });
        $(".img-icons .img-i-5").css({
            top: "271px",
            left: "-79px",
            transition: "all 0.8s",
        });

        $(".img-icons .img-i-6").css({
            top: "274px",
            left: "74px",
            transition: "all 0.8s",
        });

        $(".img-icons .img-i-1").delay(1).fadeOut();
        $(".img-icons .img-i-2").delay(1).fadeOut();
        $(".img-icons .img-i-3").delay(1).fadeOut();
        $(".img-icons .img-i-4").delay(1).fadeOut();
        $(".img-icons .img-i-5").delay(1).fadeOut();
        $(".img-icons .img-i-6").delay(1).fadeOut();

    });
});
