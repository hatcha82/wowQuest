function showSkill(kor_class,skill_name) {
	var url = "http://wow.somegate.com/info_skill_small.php?class="+kor_class+"&skill_name="+skill_name;
	window.open(url, "simple",'toolbar=0,resizable=0,scrollbars=1, left=100, top=50, width=640,height=480');
}