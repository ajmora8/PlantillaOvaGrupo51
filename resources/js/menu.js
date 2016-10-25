jQuery(document).ready(function ($) {
  	/*------ MenuResponsive ------*/
  	var contador = 1;
  	$('.menuBar').click(function(){
		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		}else{
			$('nav').animate({
				left: '-100%'
			});
			contador = 1;
		}
	});

	$('.flProducts').click(function(){
		//$('.caret').toggleClass('icon-minus');
		$('.secondLevelProducts').slideToggle(150);
		$('.secondLevelSearch').slideUp(150);
		$(this).toggleClass('clickButton');
		$('.flSearch').removeClass('clickButton');
		mouseoverSL(4);
	});

	$('.flSearch').click(function(){
		//$('.caret').removeClass('icon-minus');
		$('.secondLevelSearch').slideToggle(150);
		$('.secondLevelProducts').slideUp(150);
		$(this).toggleClass('clickButton');
		$('.flProducts').removeClass('clickButton');
		mouseoverSL(4);
	});

	$('.slIndustries').mouseover(function(){
		mouseoverSL(1);
	});

	$('.slSuites').mouseover(function(){
		mouseoverSL(2);
	});

	$('.slLabs').mouseover(function(){
		mouseoverSL(3);
	});

		/*----- removeClass -----*/
	function mouseoverSL(sl){
		$('.imgInnerPanel').removeClass('borderColorIdentifyIndustries');
		$('.imgInnerPanel').removeClass('borderColorIdentifySuites');
		$('.imgInnerPanel').removeClass('borderColorIdentifyLabs');
		/*----- fadeOut -----*/
		$('.slPanelImageProducts').fadeOut(0);
		$('.slPanelImageIndustries').fadeOut(0);
		$('.slPanelImageSuites').fadeOut(0);
		$('.slPanelImageLabs').fadeOut(0);

		if(sl == 1){/*slIndustries*/
			$('.slPanelImageIndustries').fadeIn(0);
			$('.imgInnerPanel').addClass('borderColorIdentifyIndustries');
		}else if(sl == 2){/*slSuites*/
			$('.slPanelImageSuites').fadeIn(0);
			$('.imgInnerPanel').addClass('borderColorIdentifySuites');
		}else if(sl == 3){/*slLabs*/
			$('.slPanelImageLabs').fadeIn(0);
			$('.imgInnerPanel').addClass('borderColorIdentifyLabs');
		}else if(sl == 4){
			$('.slPanelImageProducts').fadeIn(0);
		}

	}
});