
 // адаптивное меню
$(document).ready(function() {
  $('.trigger').click(function() {
    $('.menu ul').slideToggle(500);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 500 ) {			
			$('.menu ul').removeAttr('style');
		 }
	});//end resize
});//end ready



//прилипання меню

    $(document).ready(function () {
        var objToStick = $("nav"); //Получаем нужный объект
        var topOfObjToStick = $(objToStick).offset().top; //Получаем начальное расположение нашего блока

        $(window).scroll(function () {
            var windowScroll = $(window).scrollTop(); //Получаем величину, показывающую на сколько прокручено окно

            if (windowScroll > topOfObjToStick) { // Если прокрутили больше, чем расстояние до блока, то приклеиваем его
                $(objToStick).addClass("topWindow");
            } else {
                $(objToStick).removeClass("topWindow");
            };
        });
    });





