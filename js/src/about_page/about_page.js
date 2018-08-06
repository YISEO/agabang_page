// about_page.js

(function($){

  var aboutUl       = $('.about_li');
  var aboutLi       = aboutUl.children('li');
  var aboutList     = aboutLi.children('a');

  var aboutLILen    = aboutList.length;
  // var aboutLILen = aboutList.attr('href');
  var aboutTop      = [];
  var i             = 0;

  for(; i<aboutLILen; i++){
    var samplpDiv = aboutList.eq(i).attr('href');
     aboutTop[i]  = $(samplpDiv).offset().top-100;
  }

  // console.log( aboutTop);

// -------------------------------------------

// 스크롤시 해당 메뉴 .active 설정되게 
  $(window).on('scroll',function(){
    var nowTop = $(window).scrollTop();
    var j = 0, k;
    for(; j <= aboutLILen; j++){
      (j >= aboutLILen) ? k = j : k = j+1;
      if(nowTop >= aboutTop[j] && nowTop < aboutTop[k]){
        aboutLi.eq(j).siblings('li').removeClass('active');
        aboutLi.eq(j).addClass('active');
      }
      if(nowTop >= aboutTop[aboutLILen-1]){
        samplpDiv = aboutList.eq(j).attr('href');
        aboutLi.eq(aboutLILen-1).siblings('li').removeClass('active');
        aboutLi.eq(aboutLILen-1).addClass('active');
      }
    }
  });
  
// ---------------------------------------
  // class 부여
  // about_li 클릭시 해당 위치 이동
  aboutLi.on('click',function(e){
    // e.preventDefault();
    var _thisH = $(this).children('a').attr('href');
    var linkOffset = $(_thisH).offset().top;
    $('html, body').stop().animate({scrollTop: linkOffset});

    $(this).addClass('active');
    $(this).siblings('li').removeClass('active');
  });
  

  var area     = $('.area');
  var areaLeng = area.length;
  var areaTop  = [];

  i            = 0;
  for(; i < areaLeng; i++){
    areaTop[i]  = area.eq(i).offset().top;
  }
  // console.log(area.length);
  // console.log(areaTop);
  area.eq(0).addClass('ani');
  $(window).on('scroll',function(){
    var nowTop = $(window).scrollTop();
    var l = 0, m;
   for(; l < areaLeng; l++){
     (l >= areaLeng) ? m = areaLeng : m= l;
    if(nowTop >= areaTop[l]-900){
       area.eq(m).addClass('ani');
        // console.log(m);
        // areaTop[l].parentsUntil().siblings().find('.area').removeClass('ani');
     }
    }

  
  });




/*
  var ceoBoxOffset = $('#ceoBox').offset().top;
  var ceoArea = $('.ceo_area');
  var introArea = $('.intro_area');
  var nowTop = $(window).scrollTop();

  // console.log(ceoBoxOffset);
 var OffsetView = function(){
  if( nowTop >= ceoBoxOffset ){
      ceoArea.addClass('ani');
      introArea.addClass('ani');
    }else{
      ceoArea.removeClass('ani');
      introArea.removeClass('ani');
    };



   };

  // console.log(aboutLi.length);


  // for (var i=0; i<5; i++1){

  // }

OffsetView(nowTop);

$(window).on('scroll', function(){
  nowTop = $(window).scrollTop();
  OffsetView(nowTop);
});


*/

})(jQuery);