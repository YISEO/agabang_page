// headBox.js

(function($){

var gnbBtn = $('.gnb_btn');
var gnb = $('.gnb');
var gnbA = $('.gnb_a');
var gnbLi = gnb.find('ul').children('li').children('a');
var gnbMenu = $('.gnb_menu');
var winW = $(window).outerWidth();


// gnb버튼 클릭시 메뉴보이게

if (winW <= 768) {
gnbBtn.on('click',function(e){
  e.preventDefault();
  // console.log('!!!');
  var gnbView = $(this).siblings('.gnb').css('display');
  
  gnb.slideUp();

  if (gnbView === 'none'){
    gnb.stop().slideDown();
  } 


  });

// gnb menu 클릭시 list들 보이게

gnbLi.on('click', function(e){
  e.preventDefault();


  var view = $(this).next(gnbMenu).css('display');
  gnbMenu.slideUp();

  if (view === 'none'){
     $(this).next(gnbMenu).stop().slideDown(); 
   } 
 
});

} else if (winW > 768){

var gnbWrap = $('.gnb_wrap');
var gnbWrapTop = gnbWrap.offset().top;

$(window).on('scroll',function(){

  var wScroll = $(window).scrollTop()
    
      if( wScroll > gnbWrapTop ){
    gnbWrap.css('position','fixed');
      }else{
    gnbWrap.removeAttr('style');
      }

});

  var firstA = gnbLi.eq(0).attr('href');
  gnbLi.on('click', function(e){
  e.preventDefault();
  var nowHref = $(this).attr('href');
  if(nowHref == firstA){
    window.location = nowHref;
  }


  var view = gnbMenu.css('display');
  gnbMenu.slideUp();
  gnbA.slideUp();

  if (view === 'none'){
     gnbMenu.stop().slideDown(); 
     gnbA.stop().slideDown(); 
   };
 
});


};

$(window).on('resize',function(e){
  var nowW = $(window).outerWidth();
  if (winW !== nowW){
    location.reload();
  };
});

})(jQuery);