$(document).ready(function() {

    //Adding Axception For the Mobile Mode
    $('#intro-video')[0].play();

    var movementStrength = 10;

    //Hiding Div's
    $(".div1").hide();
    $(".div2").hide();
    $(".div3").hide();
    $(".div4").hide();

    var height = (movementStrength - 8) / $(window).height();
    var width = (movementStrength + 5) / $(window).width();

    $(".scene-1").mousemove(function(e) {

        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX;
        var newvalueY = height * pageY;

        $('.scene-1').css('transform', 'translate3d(' + newvalueX + 'px' + ',' + newvalueY + 'px' + ',0px)');

    });

    $(window).scroll(function() {

        //Calling Event When Scrolling the page

        // console.log($('.scene-2').position().top);
        if ($(window).scrollTop() >= $('.scene-2').position().top + 45) {
            $(".div1").fadeIn(600); //reached the desired point -- show div
        }
        if ($(window).scrollTop() >= $('.scene-3').position().top + 45) {
            $(".div2").fadeIn(600); //reached the desired point -- show div
        }
        if ($(window).scrollTop() >= $('.scene-4').position().top + 45) {
            $(".div3").fadeIn(600); //reached the desired point -- show div
        }
        if ($(window).scrollTop() >= $('.scene-5').position().top + 45) {
            $(".div4").fadeIn(600); //reached the desired point --show div
        }

    });


    $('.cross-button').click(function() {

        // Calling Event When clicked on cross button 
        $('#intro-video')[0].pause();
        $('#intro').fadeOut(600);

    });

    //Before navigating scroll to top
    $(window).on('beforeunload', function() {
        $(window).scrollTop(0);
    });

    $("#intro-video").bind("ended", function() {
        // console.log("video has ended");
        $('#intro').fadeOut(400);
    });

});


// console.log("Scene-2:: " + $('.scene-2').position().top);
// console.log("Scene-3:: " + $('.scene-3').position().top);
// console.log("Scene-4:: " + $('.scene-4').position().top);
// console.log("Scene-5:: " + $('.scene-5').position().top);
