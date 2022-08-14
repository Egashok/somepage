$(function(){
    $('.slider__inner').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        arrows:false,
        
       
    });


    $('.header__menu').on('click',function(){
        $('.rightMenu').removeClass('off')

    });
    $('.close').on('click',function(){
        $('.rightMenu').addClass('off')
    });
    
})