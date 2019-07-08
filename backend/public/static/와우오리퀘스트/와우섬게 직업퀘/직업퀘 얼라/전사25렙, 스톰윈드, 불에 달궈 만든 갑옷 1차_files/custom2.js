//UDMv3.8.4
//DO NOT EDIT THIS BIT *
if (!exclude) { //********
//************************
///////////////////////////////////////////////////////////////////////////
//
//  ULTIMATE DROP DOWN MENU VERSION 3.8 by Brothercake
//  http://www.brothercake.com/dropdown/
//
//  Link-wrapping routine by Brendan Armstrong
//  Original KDE modifications by David Joham
//  Opera reload/resize based on a routine by Michael Wallner
//  Select-element hiding routine by Huy Do
//
///////////////////////////////////////////////////////////////////////////
// **POSITIONING AND STYLES *********************************************
var menuALIGN = "center";		// alignment mode
var absLEFT = 	0;		// absolute left or right position (if menu is left or right aligned)
var absTOP = 	141; 		// absolute top position

var staticMENU = false;		// static positioning mode (win/ie5,ie6 and ns4 only)

var stretchMENU = false;	// show empty cells
var showBORDERS = false;	// show empty cell borders

var baseHREF = "resources/";	// base path
var zORDER = 	1000;		// base z-order of nav structure

var mCOLOR = 	"";	// main nav cell color
var rCOLOR = 	"";	// main nav cell rollover color
var bSIZE = 	0;		// main nav border size
var bCOLOR = 	"";	// main nav border color
var aLINK = 	"#FFFFFF";	// main nav link color
var aHOVER = 	"#FFB019";		// main nav link hover-color (dual purpose)
var aDEC = 	"none";		// main nav link decoration
var fFONT = 	"verdana";	// main nav font face
var fSIZE = 	12;		// main nav font size (pixels)
var fWEIGHT = 	"";		// main nav font weight
var tINDENT = 	5;		// main nav text indent (if text is left or right aligned)
var vPADDING = 	11;		// main nav vertical cell padding
var vtOFFSET = 	+1;		// main nav vertical text offset (+/- pixels from middle)

var keepLIT =	true;		// keep rollover color when browsing menu
var vOFFSET = 	2;		// shift the submenus vertically
var hOFFSET = 	0;		// shift the submenus horizontally

var smCOLOR = 	"#101010";	// submenu cell color
var srCOLOR = 	"#000000";	// submenu cell rollover color
var sbSIZE = 	1;		// submenu border size
var sbCOLOR = 	"#7a7a7a";	// submenu border color
var saLINK = 	"#ffffff";	// submenu link color
var saHOVER = 	"#FFB019";	// submenu link hover-color (dual purpose)
var saDEC = 	"none";		// submenu link decoration
var sfFONT = 	"verdana";	// submenu font face
var sfSIZE = 	12;		// submenu font size (pixels)
var sfWEIGHT = 	"normal";	// submenu font weight
var stINDENT = 	5;		// submenu text indent (if text is left or right aligned)
var svPADDING = 4;		// submenu vertical cell padding
var svtOFFSET = +2;		// submenu vertical text offset (+/- pixels from middle)

var shSIZE =	2;		// submenu dropshadow size
var shCOLOR =	"#aaaaaa";	// submenu dropshadow color
var shOPACITY = 90;		// submenu dropshadow opacity (not ie4,ns4 or opera)

var keepSubLIT = true;		// keep submenu rollover color when browsing child menu
var chvOFFSET = 4;		// shift the child menus vertically
var chhOFFSET = -15;		// shift the child menus horizontally

var openTIMER = 1;		// menu opening delay time (not ns4/op5/op6)
var openChildTIMER = 1;	// child-menu opening delay time (not ns4/op5/op6)
var closeTIMER = 10;		// menu closing delay time

var aCURSOR = "hand";		// cursor for active links (not ns4, op5 or op6)
var altDISPLAY = "";		// where to display alt text
var allowRESIZE = mu;		// allow resize/reload

var redGRID = false;		// show a red grid
var gridWIDTH = 760;		// override grid width
var gridHEIGHT = 500;		// override grid height
var documentWIDTH = 0;		// override document width

var hideSELECT = true;		// auto-hide select boxes when menus open (ie only)
var allowForSCALING = false;	// allow for text scaling in gecko browsers
var allowPRINTING = false;	// allow the navbar and menus to print (not ns4)

var arrWIDTH = 13;		//arrow width (not ns4/op5/op6)
var arrHEIGHT = 13;		//arrow height (not ns4/op5/op6)

var arrHOFFSET = -1;		//arrow horizontal offset (not ns4/op5/op6)
var arrVOFFSET = -3;		//arrow vertical offset (not ns4/op5/op6)
var arrVALIGN = "middle";	//arrow vertical align (not ns4/op5/op6)

var arrLEFT = "<";		//left arrow (not ns4/op5/op6)
var arrLEFT_ROLL = "";		//left rollover arrow (not ns4/op5/op6)
var arrRIGHT = ">";		//right arrow (not ns4/op5/op6)
var arrRIGHT_ROLL = "";		//right rollover arrow (not ns4/op5/op6)


//*LINKS ***********************************************************
// add main link item ("url","Link name",width,"text-alignment","_target","alt text",top position,left position,"key trigger","mCOLOR","rCOLOR","aLINK","aHOVER")
MI("http://wow.somegate.com","와우 게이트",90,"center","","",0,0,"","","","","");

MI("","커뮤니티",90,"center","","",0,0,"","","","","");
	SP(180,"left","left",0,0,"","","","","","","");
	SI("http://wow.somegate.com/list.php?forum_uid=1","잡담 게시판","","");
	SI("http://wow.somegate.com/list.php?forum_uid=308","사용자 뉴스","","");
	SI("http://wow.somegate.com/list.php?forum_uid=150","전문 / 보조 기술 게시판","","");
	SI("http://wow.somegate.com/list.php?forum_uid=136","자유 강좌 + 나만의 Tip","","");
	SI("http://wow.somegate.com/list.php?forum_uid=6","스샷 게시판.. 기행기도 OK","","");
	SI("http://wow.somegate.com/list.php?forum_uid=9","동영상 / 음악 게시판","","");
	SI("http://wow.somegate.com/list.php?forum_uid=154","팬픽 / 카툰 연재 게시판","","");
	SI("http://wow.somegate.com/list.php?forum_uid=153","질문 / 답변 게시판","","");
	SI("http://wow.somegate.com/list.php?forum_uid=127","투표 게시판","","");
	SI("http://wow.somegate.com/list.php?forum_uid=121","와우게이트 역사게시판","","");

MI("","직업 게시판",90,"center","","",0,0,"","","","","");
	SP(180,"left","left",0,0,"","","","","","","");
	SI("http://wow.somegate.com/list.php?forum_uid=309","죽음의 기사","","");
	SI("http://wow.somegate.com/list.php?forum_uid=233","전 사","","");
	SI("http://wow.somegate.com/list.php?forum_uid=234","마법사","","");
	SI("http://wow.somegate.com/list.php?forum_uid=235","사 제","","");
	SI("http://wow.somegate.com/list.php?forum_uid=236","흑마법사","","");
	SI("http://wow.somegate.com/list.php?forum_uid=237","도 적","","");
	SI("http://wow.somegate.com/list.php?forum_uid=238","드루이드","","");
	SI("http://wow.somegate.com/list.php?forum_uid=239","사냥꾼","","");
	SI("http://wow.somegate.com/list.php?forum_uid=240","주술사","","");
	SI("http://wow.somegate.com/list.php?forum_uid=241","성기사","","");

MI("","애드온 & UI",90,"center","","",0,0,"","","","","");
	SP(180,"left","left",0,0,"","","","","","","");
	SI("http://wow.somegate.com/list.php?forum_uid=134","애드온 게시판 (잡담/질답/요청)","","");
	SI("http://wow.somegate.com/list.php?forum_uid=214","애드온 자료실","","");
	SI("http://wow.somegate.com/list.php?forum_uid=297","애드온 모음집","","");
	SI("http://wow.somegate.com/list.php?forum_uid=213","애드온 강의실","","");
	SI("http://wow.somegate.com/list.php?forum_uid=296","개발자 게시판","","");
	SI("http://wow.somegate.com/list.php?forum_uid=294","룩 체인지 질문&요청","","");
	SI("http://wow.somegate.com/list.php?forum_uid=307","룩 체인지 자료&강좌","","");

MI("","지도 + 퀘스트",100,"center","","",0,0,"","","","","");
	SP(220,"left","left",0,0,"","","","","","","");	
	SI("http://wow.somegate.com/list.php?forum_uid=152","퀘스트 제보 게시판","","");
	SI("http://wow.somegate.com/topic.php?topic_uid=98258","죽음의 기사 퀘스트","","");
	SI("","아웃랜드 퀘스트","","");
		CP(120,"left","left",0,0,"","#006600","#003300","","","","");
		CI("http://wow.somegate.com/search.php?mode=title&keyword=[유령의%20땅]&page=1&forum_uid=152","유령의 땅","","");
		CI("http://wow.somegate.com/search.php?mode=title&keyword=[영원노래%20숲]&page=1&forum_uid=152","영원노래 숲","","");
		CI("http://wow.somegate.com/search.php?mode=title&keyword=[지옥불%20반도]&page=1&forum_uid=152","지옥불 반도","","");
		CI("http://wow.somegate.com/search.php?mode=title&keyword=[장가르%20습지대]&page=1&forum_uid=152","장가르 습지대","","");
		CI("http://wow.somegate.com/search.php?mode=title&keyword=[테로카르%20숲]&page=1&forum_uid=152","테로카르 숲","","");
		CI("http://wow.somegate.com/search.php?mode=title&keyword=[샤트라스]&page=1&forum_uid=152","샤트라스","","");
		CI("http://wow.somegate.com/search.php?mode=title&keyword=[나그란드]&page=1&forum_uid=152","나그란드","","");
		CI("http://wow.somegate.com/search.php?mode=title&keyword=[칼날%20산맥]&page=1&forum_uid=152","칼날산맥","","");
		CI("http://wow.somegate.com/search.php?mode=title&keyword=[황천의%20폭풍]&page=1&forum_uid=152","황천의 폭풍","","");
		CI("http://wow.somegate.com/search.php?mode=title&keyword=[어둠달%20골짜기]&page=1&forum_uid=152","어둠달 골짜기","","");
	
	SI("","오리지날 퀘스트","","");
		CP(140,"left","left",0,0,"","#006600","#003300","","","","");	
		CI("http://wow.somegate.com/page_wow.php?article_uid=61004","지역별 지도 - 페이지","_blank","");
		CI("http://wow.somegate.com/list.php?forum_uid=129","지역별 지도 - 게시판","","");
		CI("http://wow.somegate.com/list.php?forum_uid=135","퀘스트 - 얼라이언스","","");
		CI("http://wow.somegate.com/list.php?forum_uid=128","퀘스트 - 호드","","");
		CI("http://wow.somegate.com/list.php?forum_uid=141","퀘스트 - 중립","","");
		CI("http://wow.somegate.com/list.php?forum_uid=148","직업 전용 퀘스트 - 얼라","","");
		CI("http://wow.somegate.com/list.php?forum_uid=147","직업 전용 퀘스트 - 호드","","");
		CI("http://wow.somegate.com/list.php?forum_uid=215","직업 전용 퀘스트 - 중립","","");

MI("http://wow.somegate.com/wow_save_list.php","<font color=red>New</font> <b>멀록의 보물상자</b>",150,"center","","",0,0,"","","","","");

//DO NOT EDIT THIS BIT *
}//***********************
//************************

