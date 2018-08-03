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
  var bBoxli = bBox.children('ul').children('li');
  var timed = 1000;
  
  
  bBox.find('a').attr('target','_blank');


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

  // 하위 메뉴에도 tab 주기

 
  bBoxli.on('click', function(e){
    e.preventDefault();
    
    $(this).addClass('active');
    $(this).siblings('li').removeClass('active');


    var i = $(this).index();
    var brandC1= $('.brand_content_1').children('.brand_img').find('li');
    var logoImg1 = $('.logo_img_1').children('li');
    var brandArea1 = $('.brand_area_1').children('dl');


    var brandC2= $('.brand_content_2').children('.brand_img').find('li');
    var logoImg2 = $('.logo_img_2').children('li');
    var brandArea2 = $('.brand_area_2').children('dl');


    // brandBox_1
    // brand content 영역
    brandC1.eq(i).addClass('active');
    brandC1.eq(i).siblings('li').removeClass('active');

    brandC1.eq(i).fadeIn(timed);
    brandC1.eq(i).siblings('li').fadeOut();

    // logo img 영역 

    logoImg1.eq(i).addClass('active');
    logoImg1.eq(i).siblings('li').removeClass('active');

    logoImg1.eq(i).fadeIn(timed);
    logoImg1.eq(i).siblings('li').fadeOut();

    //  brand area

    brandArea1.eq(i).addClass('active');
    brandArea1.eq(i).siblings('dl').removeClass('active');

    brandArea1.eq(i).fadeIn(timed);
    brandArea1.eq(i).siblings('dl').fadeOut();



    // brandBox_2
    // brand content 영역
    brandC2.eq(i).addClass('active');
    brandC2.eq(i).siblings('li').removeClass('active');

    brandC2.eq(i).fadeIn(timed);
    brandC2.eq(i).siblings('li').fadeOut();

    // logo img 영역 

    logoImg2.eq(i).addClass('active');
    logoImg2.eq(i).siblings('li').removeClass('active');

    logoImg2.eq(i).fadeIn(timed);
    logoImg2.eq(i).siblings('li').fadeOut();

    //  brand area

    brandArea2.eq(i).addClass('active');
    brandArea2.eq(i).siblings('dl').removeClass('active');

    brandArea2.eq(i).fadeIn(timed);
    brandArea2.eq(i).siblings('dl').fadeOut();

  });


  };

  $(window).on('resize',function(){
    var nowW = $(window).outerWidth();
    if(winW !== nowW){
      location.reload();
    };
  });




})(jQuery);