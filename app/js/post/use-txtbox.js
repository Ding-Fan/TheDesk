/*リプライ*/
function re(id,at,acct_id,mode){
	show();
	$("#reply").val(id);
	var te=$("#textarea").val();
	$("#textarea").val("@"+at+" "+te);
	$("#rec").text("はい");
	$("#post-acct-sel").val(acct_id);
	$('select').material_select();
	$("#textarea").attr("placeholder","返信モードです。クリアするときはCtrl+Shift+Cを押してください。");
	$("#textarea").focus();
	vis(mode);
}
function reEx(id){
	$('#tootmodal').modal('close');
	var at=$("#tootmodal").attr("data-user");
	var acct_id = $("#status-acct-sel").val();
	var mode=$("#tootmodal .vis-data").attr("data-vis");
	re(id,at,acct_id,mode);
}
//引用
function qt(id,acct_id,at,url){
	var qt = localStorage.getItem("quote");
	if(!qt){
		var qt="simple";
	}
	if(qt=="simple"){
		show();
		$("#textarea").val("\n"+url);
	}else if(qt=="mention"){
		show();
		$("#textarea").val("\n"+url+" From:@"+at);
	}else if(qt=="full"){
		show();
		var html=$("[toot-id="+id+"] .toot").html();
		html = html.match(/^<p>(.+)<\/p>$/)[1];
		html = html.replace(/<br\s?\/?>/, "\n");
		html = html.replace(/<p>/, "\n");
		html = html.replace(/<\/p>/, "\n");
		html=$.strip_tags(html);
		$("#textarea").val("\n"+"@"+at+" "+html+"\n"+url);
	}
	$("#textarea").focus();
	$("#post-acct-sel").val(acct_id);
	$('select').material_select();
}