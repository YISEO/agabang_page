// event_page.js


(function($){

	var eventTab = $('.event_tab');
	var tabLi = eventTab.children('li');
	var tabText = $('.tab_text').children('article');

	tabLi.on('click',function(e){
		e.preventDefault();

		var i = $(this).index();

		tabLi.eq(i).addClass('select');
		tabLi.eq(i).siblings('li').removeClass('select');

		// 내용에도 select 적용

		tabText.eq(i).addClass('select');
		tabText.eq(i).siblings('article').removeClass('select');

	});


})(jQuery);