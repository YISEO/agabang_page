// membership_page.js

(function($){

  var memberTab = $('.membership_tab');
  var mtabLi = memberTab.children('li');
  var mtabText = $('.m_tab_text').children('article');

  mtabLi.on('click', function(e){
    e.preventDefault();

    var i = $(this).index();

    mtabLi.eq(i).addClass('select');
    mtabLi.eq(i).siblings('li').removeClass('select');

    mtabText.eq(i).addClass('select');
    mtabText.eq(i).siblings('article').removeClass('select');

  });

})(jQuery);