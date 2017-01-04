$(document).ready(function () {

$('.logo').hover(function() {
    // $('.home-sect').animate({display:'none'}, 1000);
    $('.home-sect').css('display','none');

    $('.menu ul li').animate({height: '20px'}, 1000)
}) 
$('.contact-li').click(function() {
    console.log('hope');
    $('.contact-sect').animate({height: '1000px'}, 1000)
}) 

});
