//タグ表示
if(location.search){
	var m = location.search.match(/\?mode=([a-zA-Z-0-9]+)\&code=(.+)/);
	var mode=m[1];
	var codex=m[2];
	if(mode=="tag"){
        var acct_id=localStorage.getItem("main");
		tl('tag',decodeURI(codex),acct_id,'add');
	}
}
//よく使うタグ
function tagShow(tag){
	$("[data-tag="+decodeURI(tag)+"]").toggleClass("hide");
}
//タグ追加
function tagPin(tag){
    var tags = localStorage.getItem("tag");
    if(!tags){
        var obj=[];
    }else{
        var obj = JSON.parse(tags);
    }
    var can;
    Object.keys(obj).forEach(function(key) {
        var tagT = obj[key];
        if(tagT==tag){
            can=true;
        }else{
            can=false;
        }
    });
    if(!can){
        obj.push(tag);
    }
    var json = JSON.stringify(obj);
    localStorage.setItem("tag", json);
    favTag();
}
//タグ削除
function tagRemove(key) {
    var tags = localStorage.getItem("tag");
    var obj = JSON.parse(tags);
    obj.splice(key, 1);
    var json = JSON.stringify(obj);
    localStorage.setItem("tag", json);
    favTag();
}
function favTag(){
    $("#taglist").html("");
    var tagarr = localStorage.getItem("tag");
    if(!tagarr){
        var obj=[];
    }else{
        var obj = JSON.parse(tagarr);
    }
    var tags="";
    Object.keys(obj).forEach(function(key) {
        var tag = obj[key];
        tags = tags + '<a onclick="tagShow(\'' + tag + '\')" class="pointer">#' + tag + '</a><span class="hide" data-tag="' + tag + '">　<a onclick="tagTL(\'tag\',\'' + tag + '\',false,\'add\')" class="pointer" title="#' + tag + 'のタイムライン">TL</a>　<a onclick="brInsert(\'#' + tag + '\')" class="pointer" title="#' + tag + 'でトゥート">Toot</a>　'+
            '<a onclick="tagRemove(\'' + key + '\')" class="pointer" title="#' + tag + 'をよく使うタグから削除">Unpin</a></span> ';
    });
    if(obj.length>0){
        $("#taglist").append("My Tags:" + tags);
    }else{
        $("#taglist").append("");
    }
}
function trendTag(){
    $(".trendtag").remove();
    var domain="imastodon.net"
    var at = localStorage.getItem("acct_"+ acct_id + "_at");
    var start = "https://" + domain + "/api/v1/trend_tags"
	console.log(start)
	fetch(start, {
		method: 'GET',
		headers: {
			'content-type': 'application/json',
			'Authorization': 'Bearer ' + at
		},
	}).then(function(response) {
		return response.json();
	}).catch(function(error) {
		todo(error);
		console.error(error);
	}).then(function(json) {
		if (json) {
            var tags="";
            json=json.score;
            Object.keys(json).forEach(function(tag) {
                tags = tags + '<a onclick="tagShow(\'' + tag + '\')" class="pointer">#' + tag + '</a><span class="hide" data-tag="' + tag + '">　<a onclick="tagTL(\'tag\',\'' + tag + '\',false,\'add\')" class="pointer" title="#' + tag + 'のタイムライン">TL</a>　<a onclick="brInsert(\'#' + tag + '\')" class="pointer" title="#' + tag + 'でトゥート">Toot</a></span> ';
             });
             $("#taglist").append('<span class="trendtag">トレンドタグ<i class="material-icons pointer" onclick="trendTag()" style="font-size:12px">refresh</i>:' + tags+'</span>');
             trendintervalset()
        }else{
            $("#taglist").html("");
        }
    });
    
}

function trendintervalset(){
    setTimeout(trendTag, 6000000);

}
function tagTL(a,b,c,d){
    var acct_id = $("#post-acct-sel").val();
    tl(a,b,acct_id,d);
}