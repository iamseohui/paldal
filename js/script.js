/* image swiper fraction pagination */
var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
	
	
/* tab menu	 */
var contentBoard=$('.content_board');
	contentBoard.find('ul>li>ul').hide();
	contentBoard.find('ul>li.active>ul').show();
	
	contentBoard.find('ul>li>a').on('click', function(e){
		e.preventDefault();
		var $this=$(this);
		
		$this.next('ul').show().parent('li').addClass('active').siblings('li').removeClass('active').find('ul').hide();
	});
	
/* bxSlider */
var slider=$('.bxslider').bxSlider({
		mode: 'fade',
		captions: true,
		auto:true,
		speed:1000,
		autoControls: true,
	});

/* weather */
$.getJSON('http://api.openweathermap.org/data/2.5/weather?id=1835553&appid=c0af4197be6b64077cc9e24022c1a1c6&units=metric&lang=kr', function(data){
	var $temp=data.main.temp;
	var $main=data.weather[0].description;
	$('.ctemp').append('수원시 현재 날씨 '+$temp+'&deg;C');
});