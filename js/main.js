$(function(){
    $('.present__slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        arrows:false,
       
    });
    var mixer=mixitup('.gallery',{
        load:{
            filter:'.bedroom'
        }
    });
    $('.header__menu').on('click',function(){
        $('.rightMenu').removeClass('off')

    });
    $('.close').on('click',function(){
        $('.rightMenu').addClass('off')
    });
    
})