$(function(){
    $('.blog__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        arrows:true,
        prevArrow: '<button id="next" class="parr"  type="button" ><img src="img/narr.png"></button>',
        nextArrow: '<button id="next" class="narr" type="button" ><img src="img/parr.svg"></button>',
    });

})