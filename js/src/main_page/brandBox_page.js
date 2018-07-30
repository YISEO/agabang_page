// brandBox_page.js

(function($){

  var btn = $('.brand_btn');
  var prevBtn = btn.children('.prev');
  var nextBtn = btn.children('.next');

  var brand = $('.brand_li');
  var brandLi = brand.children('ul');
  var num=0;
  var brandLength = brandLi.length;

  nextBtn.on('click', function(e){
     e.preventDefault();
    if(num < brandLength-1){
      num +=1;
    }
    var i = num * -100 + "%";
    brand.stop().animate({marginLeft:i});

  });

    prevBtn.on('click', function(e){
     e.preventDefault();
    if(num > 0){
      num -=1;
    }
    var i = num * -100 + "%";
    brand.stop().animate({marginLeft:i});

  });


})(jQuery);