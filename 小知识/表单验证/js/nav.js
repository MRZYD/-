

//移动导航栏效果
$(function(){
	$('.slide-wrapper').on('touchstart', 'li', function(e){
		$(this).addClass('current').siblings('li').removeClass('current');
	});

	$('.slide-menu').on('click', function(e){
		var wh = $('window').height();
		$('.slide-mask').css('height', wh).show();
		$('.slide-wrapper').css('height', wh).addClass('moved');
	});

	$('.slide-mask').on('click', function(){
		$('.slide-mask').hide();
		$('.slide-wrapper').removeClass('moved');
	});

  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  };

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this);
      $next = $this.next();

    $next.slideToggle();
    $this.parent().addClass('open').siblings().removeClass('open');

    if (!e.data.multiple) {
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    };

  };



  var accordion = new Accordion($('#accordion'), false);
  $('.submenu li').click(function () {
    $(this).addClass('current').siblings('li').removeClass('current');
  });

});
