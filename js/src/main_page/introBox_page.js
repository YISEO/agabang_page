// introBox_page.js

(function($){


  var intro  = $('.intro_li');
  var introLi = intro.children('li');

  var btn = $('.intro_btn');
  var nextBtn = btn.children('.next_btn');
  var prevBtn = btn.children('.prev_btn');

  // 오른버튼 클릭
  var num = 0;
  var introLength = introLi.length;

  nextBtn.on('click',function(e){
    e.preventDefault();
    if(num < introLength-1){
      num +=1;
    }
    var i = num * -100 +"%";
    intro.stop().animate({marginLeft:i});
  });
  // 왼쪽버튼
  prevBtn.on('click',function(e){
    e.preventDefault();
    if(num > 0){
      num -=1;
    }
    var i = num * -100 +"%";
    intro.stop().animate({marginLeft:i});
  })


})(jQuery);