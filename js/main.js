$(document).ready(function () {

$('.logo').click(function() {
    // $('.home-sect').animate({display:'none'}, 1000);
    $('.home-sect').css('display','none');
    $('.menu ul li').animate({height: '20px'}, 1000)
    $('.contact-sect').css('display', 'none');
    $('.about-sect').css('display', 'none');
    $('.dev-sect').css('display', 'none');
    $('.art-sect').css('display', 'none');
}) 

//display contact section and retract
$('.contact-li').click(function() {
    console.log('hope');
     $('.contact-sect').css('display', 'block');
    $('.contact-sect').animate({height: '1000px'}, 1000)
    $('.menu ul li').animate({height: '0px'}, 1000)
}) 

//display about me section and retract
$('.about-li').click(function() {
    console.log('hope');
     $('.about-sect').css('display', 'block');
    $('.about-sect').animate({height: '1000px'}, 1000)
    $('.menu ul li').animate({height: '0px'}, 1000)
})

//display development section and retract
$('.dev-li').click(function() {
    console.log('hope');
     $('.dev-sect').css('display', 'block');
    $('.dev-sect').animate({height: '1000px'}, 1000)
    $('.dev-sect').css('margin-top', '90px');
    $('.menu ul li').animate({height: '0px'}, 1000)
}) 

//display art section and retract
$('.art-li').click(function() {
    console.log('hope');
     $('.art-sect').css('display', 'block');
    $('.art-sect').animate({height: '4500px'}, 1000)
    $('.art-sect').css('margin-top', '90px');
    $('.menu ul li').animate({height: '0px'}, 1000)
}) 


});
