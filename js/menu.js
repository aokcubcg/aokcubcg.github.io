$(function(){
	$.ajax({
		type: "GET",
		url: "http://aokcub.net/menu.html",
		dataType: "html",
		success: function(html){
			$("header > nav").html(html);
		}, 
		error: function(msg){
			// エラー発生時
			$("header > nav").html("メニューの取得に失敗").css("color", "#884444");
		}
	});
});