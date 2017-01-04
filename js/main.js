$(document).ready(function () {

$('.logo').click(function() {
    // $('.home-sect').animate({display:'none'}, 1000);
    $('.home-sect').css('display','none');
    $('.menu ul li').animate({height: '20px'}, 1000)
    $('.contact-sect').css('display', 'none');
}) 


$('.contact-li').click(function() {
    console.log('hope');
     $('.contact-sect').css('display', 'block');
    $('.contact-sect').animate({height: '1000px'}, 1000)
    $('.menu ul li').animate({height: '0px'}, 1000)
}) 

});
