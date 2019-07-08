var ieCheckHere = navigator.userAgent.toLowerCase().indexOf('msie');
var banner1;
banner1 = '<div id="FloatLayer1">';
banner1 += '<object ';
if(ieCheckHere !=-1){
	banner1 += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" ';
} else {
	banner1 += 'type="application/x-shockwave-flash" data="http://image.playforum.net/banner/dragona/110124_dra_r.swf?clickthru=http://ads1.playforum.net:8080/click.kti/Playforum/forum@box?ads_no=4424&cmp_no=1076&img_no=4454"';
}
banner1 += 'id="fx_ad" width="300" height="200">';
banner1 += '<param name="allowScriptAccess" value="always">'
banner1 += '<param name="movie" value="http://image.playforum.net/banner/dragona/110124_dra_r.swf?clickthru=http://ads1.playforum.net:8080/click.kti/Playforum/forum@box?ads_no=4424&cmp_no=1076&img_no=4454">';
banner1 += '<param name="quality" value="high">';
banner1 += '<param name="wmode" value="transparent">';
banner1 += '<param name="bgcolor" value="#FFFFFF">';
banner1 += '</object>';
banner1 += '</div>';
document.write(banner1);

$(function() {
	var banner2;
	banner2 = '<div id="FloatLayer2" style="width:350px;height:300px;z-index:10;position:absolute;display:none;">';	banner2 += '<object ';
	if(ieCheckHere !=-1){
		banner2 += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" ';
	} else {
		banner2 += 'type="application/x-shockwave-flash" data="http://image.playforum.net/banner/dragona/110124_dra_ti.swf?clickthru=http://ads1.playforum.net:8080/click.kti/Playforum/forum@box?ads_no=4424&cmp_no=1076&img_no=4454"';
	}
	banner2 += 'id="fx_ex" width="350" height="300">';
	banner2 += '<param name="allowScriptAccess" value="always">'
	banner2 += '<param name="movie" value="http://image.playforum.net/banner/dragona/110124_dra_ti.swf?clickthru=http://ads1.playforum.net:8080/click.kti/Playforum/forum@box?ads_no=4424&cmp_no=1076&img_no=4454">';
	banner2 += '<param name="quality" value="high">';
	banner2 += '<param name="wmode" value="transparent">';
	banner2 += '<param name="bgcolor" value="#FFFFFF">';
	banner2 += '</object>';
	banner2 += '</div>';

$(banner2).appendTo(document.body);
 var bigADpos = $.extend({}, $('#FloatLayer1').offset());
 $('#FloatLayer2').css({top:  bigADpos.top , left: bigADpos.left});
 $("#FloatLayer2").show();
});

function _PF_EX () {
	if(ieCheckHere !=-1){
		var sendText = "GO_ex";
		document.getElementById('fx_ex').SetVariable("checkValue_ex", sendText);
	} else {}
	$("#FloatLayer1").css('visibility','hidden');
	var floatLayer2pos = $.extend({}, $('#FloatLayer1').offset());
	$('#FloatLayer2').css({top: floatLayer2pos.top , left:floatLayer2pos.left});
	$("#FloatLayer2").show();
}

function _PF_EX_HD () {
	if(ieCheckHere !=-1){
		var sendText = "GO";
		document.getElementById('fx_ad').SetVariable("checkValue", sendText);
	} else {}
	$("#FloatLayer1").css('visibility','visible');
	$("#FloatLayer2").hide();
}
