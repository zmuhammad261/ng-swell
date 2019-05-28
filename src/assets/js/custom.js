var $item = $('.banner .slide .slide-wrap');
var $wHeight = $(window).height();

$item.height($wHeight);
$item.addClass('full-screen');

$('.banner .slide img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

var $feat_item = $('.featured-section .featured-wrap .img-wrap');
var $feat_sm_item = $('.featured-section .featured-wrap .img-wrap.half');
var $feat_wHeight = $(window).height();

$feat_item.height($feat_wHeight);
$feat_sm_item.height($feat_wHeight/2);
$feat_item.addClass('full-screen');


$('.featured-section img').each(function() {
	var $src = $(this).attr('src');
	$(this).parent().css({
		'background-image': 'url('+ $src +')'
	});
	$(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.featured-section .img-wrap').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 16);
    var amountMovedY = (e.pageY * -1 / 16);
    $(this).css(
      {
        "-webkit-transform":"-webkit-translate(amountMovedX + 'px ',amountMovedY + 'px')"
      }
      );
});



// Products
