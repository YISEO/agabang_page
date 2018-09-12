// introBox_page.js

(function($){


//배너 변수선언
var introLi = $('.intro_box');
var introUl = introLi.children('.intro_li');

var indi =introLi.children('.indicator');
var indiLi = indi.children('li');
var indiLiLen = indiLi.length-1;


//== 첫 배너를 마지막 위치에 복제 ==//
var introLiClone = introLi.find('li').eq(0).clone();
introUl.append(introLiClone);
var introLiLen = introUl.find('li').length;
console.log(introLiLen);
  introUl.css({width:introLiLen* 100 + '%'});


//== 배너의 값주기 ==//

var i = 0;
var move = function(a){

  indiLi.eq(i).addClass('active');
  indiLi.eq(i).siblings('li').removeClass('active');

  var per = a * -100 + '%';

  introUl.stop().animate({marginLeft:per});
};

move(i);


//== indicator ==//
//indicator 클릭시 배너 이미지 이동

indiLi.on('click',function(e){
  e.preventDefault();
  i = $(this).index();
  move(i);

});
  

//=== 배너가 자동으로 움직이게 하기 ===//

//배너의 갯수를 파악해서 마지막갯수가 되면 처음으로 오게 만들기

var introBanner = function(i){ 
var num = i * -100 +'%';

  if (i < introLiLen-1){
    introUl.stop().animate({marginLeft:num});
  }else {
      i = 0;
      introUl.stop().animate({marginLeft:num}, function(){
      $(this).css({marginLeft:0});
    });
  };

  indiLi.eq(i).addClass('active');
  indiLi.eq(i).siblings('li').removeClass('active');

};

  introBanner(i);

  //----

  indiLi.on('click',function(e){

  e.preventDefault();
  i = $(this).index();

    adBanner(i);

  });

//--배너가 일정한 시간이 되면 자동으로 이동하게 하기 

    //(setInterval : 일정시간마다 반복실행하는 함수) 
    //(clearInterval : 일정시간마다 반복실행하는 함수 정지시켜라)

  var timed = 3500;
  var autoStart;

 
  var StartSlide = function(){

      autoStart = setInterval(function(){
        (i < introLiLen-1) ? i+=1 : i=1;
          introBanner(i);}, timed); };

 

  var StopSlide = function(){ clearInterval(autoStart); };

 
  StartSlide();
  $(document).on({'mouseenter':StopSlide , 'mouseleave':StartSlide});


 

})(jQuery);


 

