// about_page.js

(function($){

  var aboutUl = $('.about_li');
  var aboutLi = aboutUl.children('li');
  var aboutList = aboutLi.children('a');

 

  // class 부여

  aboutLi.on('click',function(e){
    // e.preventDefault();
    var _thisH = $(this).children('a').attr('href');
    var linkOffset = $(_thisH).offset().top;
    $('html, body').stop().animate({scrollTop: linkOffset});

    $(this).addClass('active');
    $(this).siblings('li').removeClass('active');


  });
  
  var ceoBoxOffset = $('#ceoBox').offset().top;
  var ceoArea = $('.ceo_area');
  var introArea = $('.intro_area');
  var nowTop = $(window).scrollTop();

  console.log(ceoBoxOffset);
 var OffsetView = function(){
  if( nowTop >= ceoBoxOffset ){
      ceoArea.addClass('ani');
      introArea.addClass('ani');
    }else{
      ceoArea.removeClass('ani');
      introArea.removeClass('ani');
    };


 };

OffsetView(nowTop);

$(window).on('scroll', function(){
  nowTop = $(window).scrollTop();
  OffsetView(nowTop);
});



})(jQuery);