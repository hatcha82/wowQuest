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
MI("http://wow.somegate.com","�Ϳ� ����Ʈ",90,"center","","",0,0,"","","","","");

MI("","Ŀ�´�Ƽ",90,"center","","",0,0,"","","","","");
	SP(180,"left","left",0,0,"","","","","","","");
	SI("http://wow.somegate.com/list.php?forum_uid=1","��� �Խ���","","");
	SI("http://wow.somegate.com/list.php?forum_uid=308","����� ����","","");
	SI("http://wow.somegate.com/list.php?forum_uid=150","���� / ���� ��� �Խ���","","");
	SI("http://wow.somegate.com/list.php?forum_uid=136","���� ���� + ������ Tip","","");
	SI("http://wow.somegate.com/list.php?forum_uid=6","���� �Խ���.. ����⵵ OK","","");
	SI("http://wow.somegate.com/list.php?forum_uid=9","������ / ���� �Խ���","","");
	SI("http://wow.somegate.com/list.php?forum_uid=154","���� / ī�� ���� �Խ���","","");
	SI("http://wow.somegate.com/list.php?forum_uid=153","���� / �亯 �Խ���","","");
	SI("http://wow.somegate.com/list.php?forum_uid=127","��ǥ �Խ���","","");
	SI("http://wow.somegate.com/list.php?forum_uid=121","�Ϳ����Ʈ ����Խ���","","");

MI("","���� �Խ���",90,"center","","",0,0,"","","","","");
	SP(180,"left","left",0,0,"","","","","","","");
	SI("http://wow.somegate.com/list.php?forum_uid=309","������ ���","","");
	SI("http://wow.somegate.com/list.php?forum_uid=233","�� ��","","");
	SI("http://wow.somegate.com/list.php?forum_uid=234","������","","");
	SI("http://wow.somegate.com/list.php?forum_uid=235","�� ��","","");
	SI("http://wow.somegate.com/list.php?forum_uid=236","�渶����","","");
	SI("http://wow.somegate.com/list.php?forum_uid=237","�� ��","","");
	SI("http://wow.somegate.com/list.php?forum_uid=238","����̵�","","");
	SI("http://wow.somegate.com/list.php?forum_uid=239","��ɲ�","","");
	SI("http://wow.somegate.com/list.php?forum_uid=240","�ּ���","","");
	SI("http://wow.somegate.com/list.php?forum_uid=241","�����","","");

MI("","�ֵ�� & UI",90,"center","","",0,0,"","","","","");
	SP(180,"left","left",0,0,"","","","","","","");
	SI("http://wow.somegate.com/list.php?forum_uid=134","�ֵ�� �Խ��� (���/����/��û)","","");
	SI("http://wow.somegate.com/list.php?forum_uid=214","�ֵ�� �ڷ��","","");
	SI("http://wow.somegate.com/list.php?forum_uid=297","�ֵ�� ������","","");
	SI("http://wow.somegate.com/list.php?forum_uid=213","�ֵ�� ���ǽ�","","");
	SI("http://wow.somegate.com/list.php?forum_uid=296","������ �Խ���","","");
	SI("http://wow.somegate.com/list.php?forum_uid=294","�� ü���� ����&��û","","");
	SI("http://wow.somegate.com/list.php?forum_uid=307","�� ü���� �ڷ�&����","","");

MI("","���� + ����Ʈ",100,"center","","",0,0,"","","","","");
	SP(220,"left","left",0,0,"","","","","","","");	
	SI("http://wow.somegate.com/list.php?forum_uid=152","����Ʈ ���� �Խ���","","");
	SI("http://wow.somegate.com/topic.php?topic_uid=98258","������ ��� ����Ʈ","","");
	SI("","�ƿ����� ����Ʈ","","");
		CP(120,"left","left",0,0,"","#006600","#003300","","","","");
		CI("http://wow.somegate.com/search.php?mode=title&keyword=[������%20��]&page=1&forum_uid=152","������ ��","","");
		CI("http://wow.somegate.com/search.php?mode=title&keyword=[�����뷡%20��]&page=1&forum_uid=152","�����뷡 ��","","");
		CI("http://wow.somegate.com/search.php?mode=title&keyword=[������%20�ݵ�]&page=1&forum_uid=152","������ �ݵ�","","");
		CI("http://wow.somegate.com/search.php?mode=title&keyword=[�尡��%20������]&page=1&forum_uid=152","�尡�� ������","","");
		CI("http://wow.somegate.com/search.php?mode=title&keyword=[�׷�ī��%20��]&page=1&forum_uid=152","�׷�ī�� ��","","");
		CI("http://wow.somegate.com/search.php?mode=title&keyword=[��Ʈ��]&page=1&forum_uid=152","��Ʈ��","","");
		CI("http://wow.somegate.com/search.php?mode=title&keyword=[���׶���]&page=1&forum_uid=152","���׶���","","");
		CI("http://wow.somegate.com/search.php?mode=title&keyword=[Į��%20���]&page=1&forum_uid=152","Į�����","","");
		CI("http://wow.somegate.com/search.php?mode=title&keyword=[Ȳõ��%20��ǳ]&page=1&forum_uid=152","Ȳõ�� ��ǳ","","");
		CI("http://wow.somegate.com/search.php?mode=title&keyword=[��Ҵ�%20��¥��]&page=1&forum_uid=152","��Ҵ� ��¥��","","");
	
	SI("","�������� ����Ʈ","","");
		CP(140,"left","left",0,0,"","#006600","#003300","","","","");	
		CI("http://wow.somegate.com/page_wow.php?article_uid=61004","������ ���� - ������","_blank","");
		CI("http://wow.somegate.com/list.php?forum_uid=129","������ ���� - �Խ���","","");
		CI("http://wow.somegate.com/list.php?forum_uid=135","����Ʈ - ����̾�","","");
		CI("http://wow.somegate.com/list.php?forum_uid=128","����Ʈ - ȣ��","","");
		CI("http://wow.somegate.com/list.php?forum_uid=141","����Ʈ - �߸�","","");
		CI("http://wow.somegate.com/list.php?forum_uid=148","���� ���� ����Ʈ - ���","","");
		CI("http://wow.somegate.com/list.php?forum_uid=147","���� ���� ����Ʈ - ȣ��","","");
		CI("http://wow.somegate.com/list.php?forum_uid=215","���� ���� ����Ʈ - �߸�","","");

MI("http://wow.somegate.com/wow_save_list.php","<font color=red>New</font> <b>�ַ��� ��������</b>",150,"center","","",0,0,"","","","","");

//DO NOT EDIT THIS BIT *
}//***********************
//************************

