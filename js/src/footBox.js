// footBox.js

(function($){

  var site = $('#site');
  var siteLi;
  var move = $('.move');

  site.on('change',function(e){
    siteLi = $(this).val();
    move.attr({href:siteLi});

  });

})(jQuery);