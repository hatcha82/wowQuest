
function select_all_box() {
	if (document.manage.allbox.checked)
	{
		for(i=0;i< document.manage.length;i++) {
			f=document.manage.elements[i];
			if (f.type=='checkbox' && f.name !='allbox') f.checked = document.manage.allbox.checked;
		}
	} else {
		for(i=0;i< document.manage.length;i++) {
			f=document.manage.elements[i];
			if (f.type=='checkbox' && f.name!='allbox') f.checked = document.manage.allbox.checked;
		}
	}	
	return true;
}

function numChecked() {
	j=0;
	for(i=0;i< document.manage.length;i++) {
		e=document.manage.elements[i];
		if (e.type=='checkbox' && e.name != 'allbox' && e.checked) j++;		
	}
	return j;
}

function subm(action) {
	num = numChecked();
	if (num>0) {
		document.manage.mode.value=action;
		return false;
	} else alert("안건을 선택하지 않았습니다. 원하는 안건을 선택하세요.");
	
	return false;
}

function subm_topic(dest_form,action) {	
	dest_form.mode.value=action;
	return false;	
}

function recommend_window(url)
{aWindow=window.open(url,"simple",'toolbar=0,resizable=0,scrollbars=1, left=100, top=50, width=640,height=480');}

function help_window(url)
{aWindow=window.open(url,"",'toolbar=0,resizable=0,scrollbars=1, left=100, top=50, width=800,height=600');}

function open_window9(url)
{aWindow=window.open(url,"simple",'toolbar=0,resizable=1,scrollbars=1,width=800,height=600');}

function new_win(url, win_name, option)
{window.open(url, win_name, option);}

function displayImage(picName, windowName, windowWidth, windowHeight){
return window.open(picName,windowName,"toolbar=no,scrollbars=no,resizable=no,width=" + (parseInt(windowWidth)+20) + ",height=" + (parseInt(windowHeight)+15)) 
}


var win1Open = null

function winClose(){
if(win1Open != null) win1Open.close() 
}
function doNothing(){}
function displayImage(picName, windowName, windowWidth, windowHeight){
var winHandle = window.open("" ,windowName,"toolbar=no,scrollbars=no,resizable=no,width=" + windowWidth + ",height=" + windowHeight)
if(winHandle != null){
var htmlString = "<html><head><title> 섬게이트,SomeGate :: World of warcraft,WOW</title></head>" 
htmlString += "<body leftmargin=0 topmargin=0 marginwidth=0 marginheight=0>"
htmlString += "<a href=javascript:window.close()><img src=" + picName + " border=0 alt=닫기></a>"
htmlString += "</body></html>"
winHandle.document.open()
winHandle.document.write(htmlString)
winHandle.document.close()
} 
if(winHandle != null) winHandle.focus()
return winHandle
}
