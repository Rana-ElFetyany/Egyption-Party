
// !====> Open Menu <==== //

$(".openNav").click(function () {
    $(".leftMenu").animate({ width: '250px' }, 50)
    $("#home-content").animate({ marginLeft: '250px' }, 50)
})


$(".closebtn").click(function () {
    $("#leftMenu").animate({ width: '0px' }, 50)
    $("#home-content").animate({ marginLeft: '0px' }, 50)
})


// !====> Scroll <==== //
$("#leftMenu a").click(function(){
    
    var secID= $(this).attr("href");
    
    var positionOfSection = $(secID).offset().top;
    
    $("html , body").animate({scrollTop:positionOfSection},1000);
    
})



// !====> slider <==== //

$('#sliderDown .slider').click(function () {
    $('.content').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});




// !====> Count Down <==== //

window.onload = function () {

    countDownToTime("15 january 2025 12:00:00");
}

function countDownToTime(countTo) {

    let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime() / 1000);

    let now = new Date();
    now = (now.getTime() / 1000);

    timeDifference = (futureDate - now);

    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - (days * (24 * 60 * 60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
    let secs = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $('.seconds').html(`${secs} s`)


    setInterval(function () { countDownToTime(countTo); }, 1000);
}



// !====> TextArea <==== //

var maxLength = 100;
$('textarea').keyup(function () {
    var length = $(this).val().length;
    var AmountLeft = maxLength - length;
    if (AmountLeft <= 0) {
        $(".numremain").text("your available character finished");
        $(".areastring").text("");

    }
    else {

        $(".numremain").text(AmountLeft);
    }
});
