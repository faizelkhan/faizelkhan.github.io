// Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Ram Hare Ram Ram Ram Hare Hare

$(document).ready(function() {
	var head_h=$(".header_bg").height();
	var fin_head_h= (head_h)-30;
	var head_w=$(".header_bg").width();
	var head_opt_2=$(".header_opt").width();
	var fin_head_w= (head_w - head_opt_2)/2;
	$(".header_opt").css('top',fin_head_h);
	$(".header_opt").css('left',fin_head_w);	
	
	$(window).resize(function(){
		var head_h=$(".header_bg").height();
		var fin_head_h= (head_h)-30;
		var head_w=$(".header_bg").width();
		var head_opt_2=$(".header_opt").width();
		var fin_head_w= (head_w - head_opt_2)/2;
		$(".header_opt").css('top',fin_head_h);
		$(".header_opt").css('left',fin_head_w);	
		});
});