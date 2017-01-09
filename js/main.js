$(document).ready(function () {

$('.fa-bars').click(function() {
    // $('.home-sect').animate({display:'none'}, 1000);
    $('.home-sect').css('display','none');
    $('.menu ul li').animate({height: '20px'}, 1000)
    $('.contact-sect').css('display', 'none');
    $('.about-sect').css('display', 'none');
    $('.dev-sect').css('display', 'none');
    $('.des-sect').css('display', 'none');
    $('.art-sect').css('display', 'none');
    $('.photo-sect').css('display', 'none');
    $('.resume-sect').css('display', 'none');
    
}) 

$('.home-li' && '.name').click(function() {
    // $('.home-sect').animate({display:'none'}, 1000);
    $('.home-sect').css('display','block');
    $('.menu ul li').animate({height: '0px'}, 1000)
    $('.contact-sect').css('display', 'none');
    $('.about-sect').css('display', 'none');
    $('.dev-sect').css('display', 'none');
    $('.des-sect').css('display', 'none');
    $('.art-sect').css('display', 'none');
    $('.photo-sect').css('display', 'none');
    $('.resume-sect').css('display', 'none');
    
}) 

$('.description').click(function() {
    // $('.home-sect').animate({display:'none'}, 1000);
    $('.home-sect').css('display','none');
    $('.menu ul li').animate({height: '20px'}, 1000)
 
}) 
//display contact section and retract
$('.contact-li').click(function() {
   
     $('.contact-sect').css('display', 'block');
    $('.contact-sect').animate({height: '500px'}, 1000)
    $('.menu ul li').animate({height: '0px'}, 1000)
}) 

$('.description-contact').click(function() {
    $('.about-sect').css('display', 'none');
    $('.photo-sect').css('display', 'none');
      $('.contact-sect').css('display', 'block');
    $('.contact-sect').animate({height: '500px'}, 1000)

   
}) 

//display about me section and retract
$('.about-li').click(function() {
 
     $('.about-sect').css('display', 'block');
    $('.about-sect').animate({height: '1300px'}, 1000)
    $('.menu ul li').animate({height: '0px'}, 1000)
})

//display development section and retract
$('.dev-li').click(function() {
    
     $('.dev-sect').css('display', 'block');
    $('.dev-sect').animate({height: '1800px'}, 1000)
    // $('.dev-sect').css('margin-top', '90px');
    $('.menu ul li').animate({height: '0px'}, 1000)
}) 

//display art section and retract
$('.art-li').click(function() {

     $('.art-sect').css('display', 'block');
    $('.art-sect').animate({height: '4500px'}, 1000)
    // $('.art-sect').css('margin-top', '90px');
    $('.menu ul li').animate({height: '0px'}, 1000)
}) 

//display design section and retract
$('.design-li').click(function() {

     $('.des-sect').css('display', 'block');
    $('.des-sect').animate({height: '1500px'}, 1000)
    // $('.des-sect').css('margin-top', '90px');
    $('.menu ul li').animate({height: '0px'}, 1000)
}) 

//display photography section and retract
$('.photo-li').click(function() {

     $('.photo-sect').css('display', 'block');
    $('.photo-sect').animate({height: '4500px'}, 1000)
    // $('.photo-sect').css('margin-top', '90px');
    $('.menu ul li').animate({height: '0px'}, 1000)
}) 

//display photography section and retract
$('.resume-li').click(function() {

     $('.resume-sect').css('display', 'block');
    $('.resume-sect').animate({height: '4500px'}, 1000)
    // $('.photo-sect').css('margin-top', '90px');
    $('.menu ul li').animate({height: '0px'}, 1000)
}) 

//display content of catagories on description click


$('.description-des').click(function() {
     $('html, body').animate({scrollTop: '+=550px'}, 800);
    
})

$('.description-about').click(function() {
     $('html, body').animate({scrollTop: '+=550px'}, 800);
  
    
})

$('.description-photo').click(function() {
     $('html, body').animate({scrollTop: '+=550px'}, 800);

    
})

$('.description-art').click(function() {
     $('html, body').animate({scrollTop: '+=550px'}, 800);

})

$('.description-dev').click(function() {
     $('html, body').animate({scrollTop: '+=550px'}, 800);
    
})


});


//popup gallery

$('.photo-work1').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {enabled:true}

});