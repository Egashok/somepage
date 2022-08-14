$('.tags__slider').slick({

    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true,
    arrows:true,
    prevArrow: '<button id="next" class="ptr"  type="button" ><img src="img/ptr.svg"></button>',
    nextArrow: '<button id="next" class="ntr" type="button" ><img src="img/ntr.svg"></button>',
});
$('.header__menu').on('click',function(){
    $('.rightMenu').removeClass('off')

});
$('.close').on('click',function(){
    $('.rightMenu').addClass('off')
});