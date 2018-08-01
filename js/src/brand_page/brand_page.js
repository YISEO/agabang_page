// brand_page.js

(function($){

  var bh3 = $('.brandBox').children('h3');
  var bBtn = bh3.find('button');
  var bBtnText = bBtn.text();
  var winW = $(window).outerWidth();

  
  if( winW <= 768 ){
  console.log(bBtnText);
    $.each(bh3, function(i,v){
      var bBtn = $(this).find('button');
      var bBtnText = bBtn.text();
      $(this).append(bBtnText);
      bBtn.remove();
    });
  }else if( winW > 768 ){

  var brandTab = $('.brand_tab');
  var btabLi = brandTab.children('li');
  var btabText = $('.b_tab_text').children('article');
  var bBox = $('.brandBox');
  var bBox1 = $('#brandBox_1');
  var timed = 1000;

  $(window).on('load', function(e){

    e.preventDefault();
    bBox1.stop().hide();
    bBox1.stop().fadeIn(timed);

  });

  btabLi.on('click',function(e){
    e.preventDefault();

    var i = $(this).index();

    btabLi.eq(i).addClass('select');
    btabLi.eq(i).siblings('li').removeClass('select');

    // 내용에도 select 적용


    bBox.stop().hide();

    btabText.eq(i).addClass('select');
    btabText.eq(i).siblings('article').removeClass('select');

    $('.select').stop().fadeIn(timed);

  });


  };


  $(window).on('resize',function(){
    var nowW = $(window).outerWidth();
    if(winW !== nowW){
      location.reload();
    };
  });



})(jQuery);