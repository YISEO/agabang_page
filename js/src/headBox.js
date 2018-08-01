// headBox.js

(function($){

var gnbBtn = $('.gnb_btn');
var gnb = $('.gnb');
var gnbA = $('.gnb_a');
var gnbLi = gnb.find('ul').children('li').children('a');
var gnbMenu = $('.gnb_menu');
var timed = 500;
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

  gnbLi.on('click', function(e){
  e.preventDefault();


  var view = gnbMenu.css('display');
  gnbMenu.slideUp();
  gnbA.slideUp();

  if (view === 'none'){
     gnbMenu.stop().slideDown(); 
     gnbA.stop().slideDown(); 
   };
 
});

$(window).on('resize',function(e){
  var nowW = $(window).outerWidth();
  if (winW !== nowW){
    location.reload();
  };
});

};

})(jQuery);