//UDMv3.8.4
var u0,u1,u2,u3;
u0=mI.length;
for (var f=0;f<u0;f++){
if(typeof sP[f]=="undefined"){sP[f]=[mI[f][2],mI[f][3],mI[f][3],0,0,"","","","","","",""];}
if(typeof cP[f]=="undefined"){cP[f]=[];}
if(typeof sI[f]=="undefined"){sI[f]=[];}
if(typeof cI[f]=="undefined"){cI[f]=[];}
u2=sI[f].length;
for (var sf=0;sf<u2;sf++){
if(typeof cP[f][sf]=="undefined"){cP[f][sf]=[];}
if(typeof cI[f][sf]=="undefined"){cI[f][sf]=[];}
}}
var u4=absTOP; if(u4<0){u4=0;}
var u5=absLEFT; if(u5<0){u5=0;}
if(vPADDING<0){vPADDING=0;}
if(svPADDING<0){svPADDING=0;}
if(aHOVER==""){aHOVER=aLINK;}
if(saHOVER==""){saHOVER=saLINK;}
if(aCURSOR=="hand"){aCURSOR="pointer";}
if(kde||op7){allowForSCALING=0;}
var u6=remoteTRIGGERING;
if(u6){
staticMENU=0;
}
cellCLICK=1;
var u7;
var u8=".gif";
var u9=[mCOLOR,bCOLOR,rCOLOR,smCOLOR,sbCOLOR,srCOLOR,shCOLOR];
var u10=[];
var u11=[0,0,0,0,0,0];
if(u9[2]==""){u9[2]=mCOLOR;}
if(u9[5]==""){u9[5]=u9[3];}
u1=u9.length;
var u12=0;
for (var b=0;b<u1;b++){
if(u9[b]==""){u9[b]="";}
if((u9[b].indexOf('.gif') != -1)||(u9[b].indexOf('.jpg') != -1)){
u11[b]=1;
u7=u9[b];
u9[b]=new Image;
u9[b].src=baseHREF+u7;
u10[b]='background-image:url('+u9[b].src+')\;';
u12++;
}
else{
(u9[b]=="")?u10[b]='background-color:transparent\;':u10[b]='background-color:'+u9[b]+'\;';
}
}
if(u12==0){u8="";}
if(u11[2]&&!u11[0]){u10[0]+='background-image:url('+u8+')\;';}
if(u11[0]&&!u11[2]){u10[2]+='background-image:url('+u8+')\;';}
if(u11[5]&&!u11[3]){u10[3]+='background-image:url('+u8+')\;';}
if(u11[3]&&!u11[5]){u10[5]+='background-image:url('+u8+')\;';}
var u13=[];
var u14=[];
var u15=[];
var u16=[];
for(i=0;i<u0;i++){
u13[i]=[u9[0],u9[1],u9[2],u9[3],u9[4],u9[5],u9[6]];
u14[i]=[u10[0],u10[1],u10[2],u10[3],u10[4],u10[5],u10[6]];
if(mI[i][9]!=""){
u13[i][0]=mI[i][9];
u14[i][0]='background-color:'+mI[i][9]+'\;';
}
if(mI[i][10]!=""){
u13[i][2]=mI[i][10];
u14[i][2]='background-color:'+mI[i][10]+'\;';
}
u13[i][9]=aLINK;
u13[i][10]=aHOVER;
if(mI[i][11]!=""){u13[i][9]=mI[i][11];}
if(mI[i][12]!=""){u13[i][10]=mI[i][12];}
if(sP[i][6]!=""){
u13[i][3]=sP[i][6];
u14[i][3]='background-color:'+sP[i][6]+'\;';
}
if(sP[i][7]!=""){u13[i][5]=sP[i][7];}
if(sP[i][8]!=""){u14[i][4]='background-color:'+sP[i][8]+'\;';}
if(sP[i][9]!=""){u14[i][6]='background-color:'+sP[i][9]+'\;';}
u13[i][7]=saLINK;
u13[i][8]=saHOVER;
if(sP[i][10]!=""){u13[i][7]=sP[i][10];}
if(sP[i][11]!=""){u13[i][8]=sP[i][11];}
u15[i]=[];
u16[i]=[];
u1=sI[i].length;
if(u1>0){
for(j=0;j<u1;j++){
u15[i][j]=[u9[0],u9[1],u9[2],u9[3],u9[4],u9[5],u9[6]];
u16[i][j]=[u10[0],u10[1],u10[2],u10[3],u10[4],u10[5],u10[6]];
if(cI[i][j].length>0){
if(cP[i][j][6]!=""){
u15[i][j][3]=cP[i][j][6];
u16[i][j][3]='background-color:'+cP[i][j][6]+'\;';
}
if(cP[i][j][7]!=""){u15[i][j][5]=cP[i][j][7];}
if(cP[i][j][8]!=""){u16[i][j][4]='background-color:'+cP[i][j][8]+'\;';}
if(cP[i][j][9]!=""){u16[i][j][6]='background-color:'+cP[i][j][9]+'\;';}
u15[i][j][7]=saLINK;
u15[i][j][8]=saHOVER;
if(cP[i][j][10]!=""){u15[i][j][7]=cP[i][j][10];}
if(cP[i][j][11]!=""){u15[i][j][8]=cP[i][j][11];}
}
}
}
}
var u17="";
if(arrWIDTH>0&&arrHEIGHT>0){
var u18=[];
u18[0]=arrWIDTH;
u18[1]=arrHEIGHT;
if(arrLEFT.indexOf(".gif")!=-1||arrLEFT.indexOf(".jpg")!=-1){
u17="img";
var u19=[];
u18[2]=arrLEFT;
u19[1]=new Image;
u19[1].src=baseHREF+u18[2];
u18[3]=arrRIGHT;
u19[0]=new Image;
u19[0].src=baseHREF+u18[3];
if(arrLEFT_ROLL!=""){
u18[4]=arrLEFT_ROLL;
u19[3]=new Image;
u19[3].src=baseHREF+u18[4];
}
if(arrRIGHT_ROLL!=""){
u18[5]=arrRIGHT_ROLL;
u19[2]=new Image;
u19[2].src=baseHREF+u18[5];
}
}
else if(arrLEFT!=""){
u17="txt";
u18[3]=arrLEFT;
u18[2]=arrRIGHT;
}
}
if(arrHOFFSET>0){
if(arrHOFFSET>stINDENT){arrHOFFSET=stINDENT;}
}
else if(arrHOFFSET<0){
if((0-arrHOFFSET)>stINDENT){arrHOFFSET=0-stINDENT;}
}
function doNothing(){}
var u20=window.innerWidth;
var u21=window.innerHeight;
var u22;
u22=14;
if(!kde&&!saf){
if(ns7){u22=15;}
if(mac&&(mz7&&ns6)){u22=16;}
if((mz7&&ns6)&&(agt.indexOf("rc1")!=-1||agt.indexOf("rv:1.2")!=-1)){u22=19;}
if((mz7&&mac)||(ns6&&!mz7)){
if(((mz7&&ns6)&&win&&(agt.indexOf("windows nt 5.1")!=-1))||mac||ns6){
if(document.width<=(innerWidth-30)){u20-=u22;}
}
}
else if((mz7&&ns6)&&win&&(agt.indexOf("windows nt 5.0")!=-1)){if(document.width<=(innerWidth-16)){u20-=16;}}
else if(win){if(document.width<=(innerWidth-17)){u20-=17;}}
if(lin){if(document.width<=(innerWidth-17)){u20-=17;}}
if(agt.indexOf("mac os x")!=-1){u20+=1;}
if(menuALIGN=="free"||u6||(!showBORDERS&&!stretchMENU)){u20-=u22;}
}
if(saf){
u20-=15;
u21-=15;
}
if(op7){
u20=document.body.clientWidth;
u21=document.body.clientHeight;
}
if((kde||saf)&&u6){u20-=16;}
if(documentWIDTH>0){u20=documentWIDTH;}
var u23=fSIZE+5+vPADDING;
if (fSIZE<13){u23+=(13-fSIZE);}
var u24=u23;
var u25=[];var u26=[];
for(var i=0;i<u0;i++){
var u27=mI[i][1];
var u28=u27.split('<br>');
u25[i]=u28.length;
u26[i]=u25[i];
}
function cFun(a,b){return b-a;}
u25.sort(cFun);
u23=u23*u25[0];
var u29=[];
for(i=0;i<u0;i++){
(menuALIGN=="free")?u29[i]=u24*u26[i]:u29[i]=u23;
}
var u30=sfSIZE+5+svPADDING;
if (sfSIZE<13){u30+=(13-sfSIZE);}
var u31=0;
var u32=0;
for (var j=0;j<u0;j++){
if(mI[j][2]==""){mI[j][2]=10;}
if(mI[j][1]==""){mI[j][1]='&nbsp;';}
u32+=mI[j][2]+bSIZE;
}
u32+=bSIZE;
u31=u20-u32;
var u33=0;
if(menuALIGN=="right"){
u33=1;
u5=u31-u5;
if(u5<0){u5=0;}
}
var u34=0;
if(menuALIGN=="center"){
u34=1;
u5=u31 / 2;
if(u5<0){u5=0;}
}
var u35=0;
if(menuALIGN=="left"){
u35=1;
}
var u36=0;
var u37;
if(typeof shSIZE=="number"){
if(shSIZE<0){shSIZE=0;}
u36-=shSIZE;
u37="number";
}
if(typeof shSIZE=="string"){
shSIZE=parseInt(shSIZE);
u36+=shSIZE;
u37="string";
}
var u38,u39,u40,u41,u42,u43,u44,u45,u46,u47,u48,u49,u50,u51,u52,u53,u54,u55,u56,u57,u58,u59,u60,u61,u62,u63,u64,u65,u66,u67,u68,u69;
var u70;
function showGrid(){
u70=u42.style.visibility;
if(u70=="hidden"){u42.style.visibility="visible";}
}
function hideGrid(){
u70=u42.style.visibility;
if(u70=="visible"){u42.style.visibility="hidden";}
}
function writeStatus(u71){
window.status=u71;
return 1;
}
function clearChildMenus(){
u69=u48.childNodes.length;
for(i=0;i<u69;i++){
u48.removeChild(u48.childNodes[i]);
}
u72=[u72[0],-1,-1];
}
var u72=[-1,-1,-1];
var u73=[-1,-1,-1];
var u74=[-1,-1,-1];
var u75=0;
var u76=0;
function clearSubMenus(){
if(u72[0]>-1){
for(i=0;i<u0;i++){
u44=document.getElementById("maincell-"+i);
u44.style.zIndex=zORDER+3;
}
u44=document.getElementById("maincell-"+u72[0]);
if(typeof u44 != "undefined"){
if(mI[u72[0]][9]!=""){
u44.style.backgroundImage='url('+u8+')';
u44.style.backgroundColor=u13[u72[0]][0];
}
else{
if(u11[2]){
(u11[0])?u44.style.backgroundImage='url('+u9[0].src+')':u44.style.backgroundImage='url('+u8+')';
}
else{
(u11[0])?u44.style.backgroundImage='url('+u9[0].src+')':u44.style.backgroundColor=u9[0];
}
}
u44.firstChild.firstChild.firstChild.firstChild.firstChild.style.color=u13[u72[0]][9];
}
u61=u45.childNodes.length;
for(i=0;i<u61;i++){
u45.removeChild(u45.childNodes[i]);
}
clearChildMenus();
}
writeStatus('');
u72=[-1,-1,-1];
u74=[-1,-1,-1];
hideGrid();
clearTimeout(u75);
u76=0;
}
function gridClearMenus(){
if(u76){
clearTimeout(u75);
clearSubMenus();
if(typeof menuClosingFunction=="function"){menuClosingFunction();}
}
else{
u76=1;
u75=setTimeout("gridClearMenus()",closeTIMER);
}
}
var u78=[];
var u79=0;
function goToUrl(u80,u81){
if(u80=="~"||u80=="#"){return 0;}
if(u80.indexOf("mailto:")!=-1){document.location=u80;}
else if(u80!=""){
if(u81=="_self"){self.document.location=u80;}
else if(u81=="_top"){top.document.location=u80;}
else if(u81=="_parent"){parent.document.location=u80;}
else if(u81=="_blank"){
u78[u79]=open(u80,"","status=yes,scrollbars=yes,scrolling=yes,toolbar=yes,menubar=yes,location=yes,resizable=yes");
u79++;
}
else{
(top[u81])?top[u81].document.location=u80:document.location=u80;
}
}
return 1;
}
function mainRollover(u82){
for(i=0;i<u0;i++){
u44=document.getElementById("maincell-"+i);
u44.style.zIndex=zORDER+20;
}
u44=document.getElementById("maincell-"+u82);
if(mI[u82][10]!=""){
u44.style.backgroundImage='url('+u8+')';
u44.style.backgroundColor=u13[u82][2];
}
else{
if(u11[2]){
u44.style.backgroundImage='url('+u9[2].src+')';
}
else{
u44.style.backgroundImage='url('+u8+')';
u44.style.backgroundColor=u9[2];
}
}
u44.firstChild.firstChild.firstChild.firstChild.firstChild.style.color=u13[u82][10];
if(altDISPLAY=="status"){
writeStatus(mI[u82][5]);
}
else{
u38=mI[u82][0];
if(u38=="#"||u38=="~"){u38="";}
writeStatus(u38);
}
}
var u83,u84,u85,u86,u87;
var u88=0;
function opT(u89,u90,u91,u92){
if(u92==0){u88=1;}
u84=u89;
u85=u90;
u86=u91;
if(!u88){
if(u86=="x"){u83=setInterval("opT("+u84+","+u85+",'x',1)",u92);}
else if(u86=="c"){clearChildMenus();u83=setInterval("opT("+u84+","+u85+",'c',1)",u92);}
u88=1;
}
else{
copT();
if(u86=="x"){mainCell(u84,u85);}
else if(u86=="c"){openChildMenu(u84,u85,'c');}
}
}
function copT(){
clearInterval(u83);
u88=0;
}
var u93=-1;
var u94=0;
var u95=0;
function mainCell(u96,u97){
if(typeof mI[u96]=="undefined"){return 0;}
u72=u73;
clearSubMenus();
u72=[u96,-1,-1];
u73=u72;
u74=u72;
mainRollover(u96);
if(sI[u96].length>0){openSubMenu(u96);}
if(u97){showGrid();} 
return u72;
}
function partialMainCell(u96){
clearTimeout(u75);
u76=0;
mainRollover(u96);
if(sI[u96].length>0){
if(u73[1]>-1){
clearCell(document.getElementById("subcell-"+u96+"-"+u73[1]));
}
}
}
var u98,u99,ua0,ua1,ua2,ua3,ua4,ua5,ua6,ua7,ua8,ua9,ub0,ub1;
var ub2=[];
var ub3=0;
var ub4='-moz-opacity:'+(shOPACITY/100);
if(!win){ub4='';}
var ub5,ub6,ub7,ub8,ub9,uc0;
function openSubMenu(uc1){
u51=document.createElement("div");
document.getElementById("manch").appendChild(u51);
ub2[uc1]=[];
u98='';
ub7='width:auto;min-width:'+sP[uc1][0]+'px\;white-space:nowrap\;';
if(kde||saf||(op7&&u37=="string")){ub7='width:'+sP[uc1][0]+'px\;';}
u98+='<div class="printhide" id="subtable-'+uc1+'" style="'+ub7+'-moz-opacity:1\;position:relative\;left:'+u36+'px\;top:'+u36+'px\;'+u14[uc1][4]+'"><table cellpadding=0 cellspacing='+sbSIZE+' border=0>';
ua0=[];
ua1=[];
u1=sI[uc1].length;
for(i=0;i<u1;i++){
u98+='<tr>';
ud3='';
if(sI[uc1][i][0]!=""&&sI[uc1][i][0]!="#"&&sI[uc1][i][0]!="~"){ud3=' cursor:'+aCURSOR+'\;';}
ud4=' cursor:default\;';
if(sI[uc1][i][0]!=""&&sI[uc1][i][0]!="#"&&sI[uc1][i][0]!="~"){ud4=' cursor:'+aCURSOR+'\;';}
ua0[i]=u30;
var u27=sI[uc1][i][1];
var u28=u27.split('<br>');
var uc2=u28.length;
if (uc2>1){ua0[i]=(u30*uc2)-(svPADDING*(uc2-1));}
u39=""; if(altDISPLAY=="title"){u39=sI[uc1][i][3];}
ub6='width:auto;min-width:'+(sP[uc1][0]-(2*sbSIZE))+'px\;height:auto;min-';
if(!allowForSCALING||kde||saf||op7){ub6='width:'+(sP[uc1][0]-(2*sbSIZE))+'px\;';}
u98+='<td style="'+ud3+'" align='+sP[uc1][2]+'>';
u98+='<div title="'+u39+'" class="SUBmTD" onfocus="subCell('+uc1+','+i+')" onmouseover="u53=document.getElementById(\'childmenu-'+uc1+'-'+i+'\')\;if(!u53){subCell('+uc1+','+i+')}else{partialSubCell('+uc1+','+i+')}" onclick="goToUrl(sI['+uc1+']['+i+'][0],sI['+uc1+']['+i+'][2])" id="subcell-'+uc1+'-'+i+'" style="'+u14[uc1][3]+''+ub6+'height:'+ua0[i]+'px\;white-space:nowrap;">';
u98+='<div class="linkspan" onmouseout="event.stopPropagation()" id="subtext-'+uc1+'-'+i+'" style="'+ud4+'position:relative\;font:'+sfSIZE+'px '+sfFONT+'\;font-weight:'+sfWEIGHT+'\;">';
u98+='<span class="linkspan" style="color:'+u13[uc1][7]+'\;font:'+sfSIZE+' '+sfFONT+'\;font-weight:'+sfWEIGHT+'\;">';
ub0='';
if(u17!=""&&cI[uc1][i].length>0){
if(cP[uc1][i][1]=="left"&&sP[uc1][2]=="right"){
ub0='margin-right:'+(u18[0]+stINDENT)+'px\;';
}
if(cP[uc1][i][1]=="right"&&sP[uc1][2]=="left"){
ub0='margin-left:'+(u18[0]+stINDENT)+'px\;';
}
}
u98+='<div class="linkspan" style="color:'+u13[uc1][7]+'\;'+ub0+'\;font-weight:'+sfWEIGHT+'\;font-size:'+sfSIZE+'px\;font-family:'+sfFONT+'\;text-decoration:'+saDEC+'\;">'+sI[uc1][i][1]+'</div>';
u98+='</span>';
u98+='</div>';
(i==0)?ub9=sbSIZE:ub9+=ua0[(i-1)]+sbSIZE;
if(u17!=""){
if(cI[uc1][i].length>0){
ub1 =(ub9+parseInt(ua0[i]/2)-parseInt(u18[1]/2)+arrVOFFSET);
if(arrVALIGN=="top"){ub1=ub9+arrVOFFSET;}
if(arrVALIGN=="bottom"){ub1=ub9+ua0[i]-u18[1]+arrVOFFSET;}
if(u17=="img"){
(cP[uc1][i][1]=="left")?ua8=u19[0].src:ua8=u19[1].src;
u98+='<img class="linkspan" id="subarr-'+uc1+'-'+i+'" style="'+ud4+'\;position:absolute\;left:0px\;top:'+ub1+'px\;" src="'+ua8+'" width="'+u18[0]+'" height="'+u18[1]+'" alt="" border="0">';
}
else{
if(cP[uc1][i][1]=="left"){ua9="right";ua8=u18[2];}
else{ua9="left";ua8=u18[3];}
u98+='<div class="linkspan" id="subarr-'+uc1+'-'+i+'" style="'+ud4+'\;text-align:'+ua9+';position:absolute\;left:0px\;top:'+ub1+'px\;overflow:hidden\;width:'+(u18[0])+'px\;height:'+(u18[1])+'px\;font:'+srSize+' '+sfFONT+'\;font-weight:'+sfWEIGHT+'\;color:'+u13[uc1][7]+'">'+ua8+'</div>';
}
}
}
u98+='</div>';
u98+='</td>';
u98+='</tr>';
}
u98+='</table></div>';
u58=parseInt(u44.style.top)+u29[uc1];
if(vOFFSET<0){u58+=vOFFSET;}if(sP[uc1][3]<0){u58+=sP[uc1][3];}
if(u37=="string"){u58-=(shSIZE*2);}
u59=bSIZE;
if(vOFFSET>0){u59+=vOFFSET;}
if(sP[uc1][3]>0){u59+=sP[uc1][3];}
u59+=shSIZE;
u55=parseInt(u44.style.left);
if(u37=="string"){u55-=(shSIZE*2);}
ua2=sbSIZE;ua3=0;
if(u37=="string"){
ua2=(2*shSIZE)+sbSIZE;
ua3=(2*shSIZE);
}
u56=0;
u57=0;
if(sP[uc1][1]=="left"){
ua6=0;
if((parseInt(u44.style.top)+u29[uc1])>u58&&(u55<(hOFFSET+sP[uc1][4]+mI[uc1][2]))){ua6=1; u55+=mI[uc1][2];}
if(hOFFSET>0){u56+=hOFFSET;}
if(sP[uc1][4]>0){u56+=sP[uc1][4];}
if(hOFFSET<0){u55+=hOFFSET;}
if(sP[uc1][4]<0){u55+=sP[uc1][4];}
if(ua6){
if(u56>mI[uc1][2]){u56-=mI[uc1][2];}
else{u55-=(mI[uc1][2]-u56); u56=0;}
}
}
if(sP[uc1][1]=="right"){
u60=0;
if(hOFFSET>0){u57+=hOFFSET; u60+=u57;}
if(sP[uc1][4]>0){u57+=sP[uc1][4]; u60+=u57;}
if(hOFFSET<0){u55-=hOFFSET;}
if(sP[uc1][4]<0){u55-=sP[uc1][4];}
u55-=(sP[uc1][0]-mI[uc1][2]+u60);
}
u56+=shSIZE;
ub7='width:auto;min-width:'+(sP[uc1][0]+u56)+'px\;white-space:nowrap\;';
if(kde||saf){ub7='width:'+(sP[uc1][0]+u56)+'px\;';}
ub8='width:auto;min-width:'+(sP[uc1][0]+ua2-sbSIZE)+'px\;white-space:nowrap\;';
if(kde||saf){ub8='width:'+(sP[uc1][0]+ua2-sbSIZE)+'px\;';}
u51.parentNode.innerHTML='<div onmouseover="showGrid()" id="submenu-'+uc1+'" style="'+ub7+'visibility:hidden\;position:absolute\;left:'+u55+'px\;top:'+u58+'px\;z-index:'+(zORDER+40)+'\;"><div id="subshadow-'+uc1+'" style="'+ub4+'\;margin-top:'+u59+'px\;margin-left:'+u56+'px\;margin-right:'+u57+'px\;'+u14[uc1][6]+'z-index:'+(zORDER+41)+'\;'+ub8+'height:1px\;">'+u98+'</div></div>';
clearTimeout(u75);
u76=0;
u1=sI[uc1].length;
for(i=0;i<u1;i++){
u99=document.getElementById('subtext-'+uc1+'-'+i);
ub5=((u99.parentNode.offsetHeight/2)-(u99.offsetHeight/2)+svtOFFSET)+"px";
u99.style.top=ub5;
if(sP[uc1][2]=="left"){u99.style.left=stINDENT+"px";}
if(sP[uc1][2]=="right"){u99.style.left=(0-stINDENT)+"px";}
if(u17!=""){
ub2[uc1][i]=document.getElementById('subarr-'+uc1+'-'+i);
ua7=sP[uc1][0]-(sbSIZE*2);
if(ub2[uc1][i]!=null){
uc0=0;
if(cP[uc1][i][1]=="left"){
uc0=sbSIZE+ua7-u18[0]-stINDENT+arrHOFFSET;
}
if(cP[uc1][i][1]=="right"){
uc0=sbSIZE+stINDENT-arrHOFFSET;
}
ub2[uc1][i].style.left=uc0+"px";
}
}
}
u54=document.getElementById('subshadow-'+uc1);
u54.style.height=(document.getElementById('subtable-'+uc1).offsetHeight+ua3)+"px";
u46=document.getElementById('submenu-'+uc1);
if(!u6){u46.style.visibility="visible";}
return u46;
}
var uc3;
function clearSubRollover(u82,uc4){
if(!keepLIT){
uc3=u44.id.replace("maincell-","");
u44.firstChild.firstChild.firstChild.firstChild.firstChild.style.color=u13[uc3][9];
if(mI[uc3][9]!=""){
u44.style.backgroundImage='url('+u8+')';
u44.style.backgroundColor=u13[uc3][0];
}
else{
if(u11[2]){
(u11[0])?u44.style.backgroundImage='url('+u9[0].src+')':u44.style.backgroundImage='url('+u8+')';
}
else{
(u11[0])?u44.style.backgroundImage='url('+u9[0].src+')':u44.style.backgroundColor=u9[0];
}
}
}
if(u73[1]>-1){
u43=document.getElementById('subcell-'+u73[0]+'-'+u73[1]);
if(sP[u73[0]][6]!=""){
u43.style.backgroundColor=u13[u73[0]][3];
u43.style.backgroundImage='url('+u8+')';
}
else{
if(u11[5]){
(u11[3])?u43.style.backgroundImage='url('+u9[3].src+')':u43.style.backgroundImage='url('+u8+')';
}
else{
(u11[3])?u43.style.backgroundImage='url('+u9[3].src+')':u43.style.backgroundColor=u9[3];
}
}
u43.firstChild.firstChild.firstChild.style.color=u13[u73[0]][7];
if(ub2[u73[0]][u73[1]]!=null){
if(u17=="img"){
if(cP[u73[0]][u73[1]][1]=="left"){
ub2[u73[0]][u73[1]].src=u19[0].src;
}
if(cP[u73[0]][u73[1]][1]=="right"){
ub2[u73[0]][u73[1]].src=u19[1].src;
}
}
else if(u17=="txt"){
ub2[u73[0]][u73[1]].style.color=u13[u73[0]][7];
}
}
}
}
function subRollover(u82,uc4){
if(sI[u82][uc4][0]!="~"){
if(sI[u82][uc4][4]){
if(sP[u82][7]!=""){
u47.style.backgroundImage='url('+u8+')';
u47.style.backgroundColor=u13[u82][5];
}
else{
if(u11[5]){
u47.style.backgroundImage='url('+u9[5].src+')';
}
else{
u47.style.backgroundImage='url('+u8+')';
u47.style.backgroundColor=u9[5];
}
}
}
u47.firstChild.firstChild.firstChild.style.color=u13[u82][8];
if(ub2[u82][uc4]!=null){
if(u17=="img"){
if(cP[u82][uc4][1]=="left"&&typeof u19[2]!="undefined"){
ub2[u82][uc4].src=u19[2].src;
}
if(cP[u82][uc4][1]=="right"&&typeof u19[3]!="undefined"){
ub2[u82][uc4].src=u19[3].src;
}
}
else if(u17=="txt"){
ub2[u82][uc4].style.color=u13[u82][8];
}
}
}
if(altDISPLAY=="status"){
writeStatus(sI[u82][uc4][3]);
}
else{
u38=sI[u82][uc4][0];
if(u38=="#"||u38=="~"){u38="";}
writeStatus(u38);
}
}
var ud2,ctj;
function subCell(u96,uc5){
clearTimeout(u75);
u76=0;
clearSubRollover();
u72=[u96,uc5,-1];
u73=u72;
u74=u72;
u47=document.getElementById('subcell-'+u96+'-'+uc5);
if(typeof u47!="undefined"){subRollover(u96,uc5);}
copT();
if(cI[u96][uc5].length>0){
opT(u96,uc5,"c",openChildTIMER);
}
else{
copT();
clearChildMenus();
}
showGrid();
}
function partialSubCell(u96,uc5){
clearTimeout(u75);
u76=0;
clearSubRollover();
subRollover(u96,uc5);
if(cI[u96][uc5].length>0){
if(u73[2]>-1){clearCell(document.getElementById("childcell-"+u96+"-"+uc5+"-"+u73[2]));}
}
}
var uc6;
var uc7,uc8,uc9,ud0;
function openChildMenu(uc1,ud1){
clearChildMenus();
if(cI[uc1][ud1].length<=0){return 0;}
u62=document.createElement("div");
document.getElementById("canch").appendChild(u62);
ud2='';
ub7='width:auto;min-width:'+cP[uc1][ud1][0]+'px\;white-space:nowrap;';
if(kde||saf||(op7&&u37=="string")){ub7='width:'+cP[uc1][ud1][0]+'px\;';}
ud2+='<div class="printhide" id="childtable-'+uc1+'-'+ud1+'" style="'+ub7+'-moz-opacity:1\;position:relative\;left:'+u36+'px\;top:'+u36+'px\;'+u16[uc1][ud1][4]+'"><table cellpadding=0 cellspacing='+sbSIZE+' border=0>';
ua1[uc1]=[];
u1=cI[uc1][ud1].length;
for(i=0;i<u1;i++){
ud2+='<tr>';
ud3='';
if(cI[uc1][ud1][i][0]!=""&&cI[uc1][ud1][i][0]!="#"&&cI[uc1][ud1][i][0]!="~"){ud3=' cursor:'+aCURSOR+'\;';}
ud4=' cursor:default\;';
if(cI[uc1][ud1][i][0]!=""&&cI[uc1][ud1][i][0]!="#"&&cI[uc1][ud1][i][0]!="~"){ud4=' cursor:'+aCURSOR+'\;';}
ua1[uc1][i]=u30;
var u27=cI[uc1][ud1][i][1];
var u28=u27.split('<br>');
var uc2=u28.length;
if (uc2>1){ua1[uc1][i]=(u30*uc2)-(svPADDING*(uc2-1));}
u39=""; if(altDISPLAY=="title"){u39=cI[uc1][ud1][i][3];}
ub6='width:auto;min-width:'+(cP[uc1][ud1][0]-(sbSIZE*2))+'px\;height:auto;min-';
if(!allowForSCALING||kde||saf||op7){ub6='width:'+(cP[uc1][ud1][0]-(sbSIZE*2))+'px\;';}
ud2+='<td style="'+ud3+'" align='+cP[uc1][ud1][2]+'><div title="'+u39+'" class=SUBmTD onfocus="childCell('+uc1+','+ud1+','+i+')" onblur="clearCell(this)" onmouseover="childCell('+uc1+','+ud1+','+i+')" onclick="goToUrl(cI['+uc1+']['+ud1+']['+i+'][0],cI['+uc1+']['+ud1+']['+i+'][2])" id="childcell-'+uc1+'-'+ud1+'-'+i+'" style="'+u16[uc1][ud1][3]+''+ub6+'height:'+ua1[uc1][i]+'px\;white-space:nowrap;"><div onmouseout="event.stopPropagation()" id="childtext-'+uc1+'-'+ud1+'-'+i+'" style="'+ud4+'position:relative\;font:'+sfSIZE+' '+sfFONT+'\;font-weight:'+sfWEIGHT+'\;"><span style="color:'+u15[uc1][ud1][7]+'\;font:'+sfSIZE+' '+sfFONT+'\;font-weight:'+sfWEIGHT+'\;">'+cI[uc1][ud1][i][1]+'</span></div></div></td>';
ud2+='</tr>';
}
ud2+='</table></div>';
u64=u55+u56-shSIZE;
u65=0;
u66=0;
if(cP[uc1][ud1][1]=="left"){
if(chhOFFSET>0){u65+=chhOFFSET;}
if(cP[uc1][ud1][4]>0){u65+=cP[uc1][ud1][4];}
if(chhOFFSET<0){u64+=chhOFFSET;}
if(cP[uc1][ud1][4]<0){u64+=cP[uc1][ud1][4];}
u64+=sP[uc1][0];
}
if(cP[uc1][ud1][1]=="right"){
u60=0;
if(chhOFFSET>0){u66+=chhOFFSET; u60+=u66;}
if(cP[uc1][ud1][4]>0){u66+=cP[uc1][ud1][4]; u60+=u66;}
if(chhOFFSET<0){u64-=chhOFFSET;}
if(cP[uc1][ud1][4]<0){u64-=cP[uc1][ud1][4];}
u64-=cP[uc1][ud1][0]+u60;
}
u65+=shSIZE;
u67=u58+u59-shSIZE;
for(i=0;i<ud1;i++){
u67+=ua0[i]+sbSIZE;
}
if(chvOFFSET<0){u67+=chvOFFSET;}if(cP[uc1][ud1][3]<0){u67+=cP[uc1][ud1][3];}
u68=sbSIZE;
if(chvOFFSET>0){u68+=chvOFFSET;}
if(cP[uc1][ud1][3]>0){u68+=cP[uc1][ud1][3];}
u68+=shSIZE;
ub7='width:auto;min-width:'+(cP[uc1][ud1][0]+u65)+'px\;white-space:nowrap;';
if(kde||saf){ub7='width:'+(cP[uc1][ud1][0]+u65)+'px\;';}
ub8='width:auto;min-width:'+(cP[uc1][ud1][0]+ua2-sbSIZE)+'px\;white-space:nowrap;';
if(kde||saf){ub8='width:'+(cP[uc1][ud1][0]+ua2-sbSIZE)+'px\;';}
u62.parentNode.innerHTML='<div onmouseover="showGrid()" id="childmenu-'+uc1+'-'+ud1+'" style="visibility:hidden\;position:absolute\;left:'+u64+'px\;top:'+u67+'px\;z-index:'+(zORDER+60)+'\;"><div id="childshadow-'+uc1+'-'+ud1+'" style="'+ub4+'\;margin-top:'+u68+'px\;margin-left:'+u65+'px\;margin-right:'+u66+'px\;'+u16[uc1][ud1][6]+'z-index:'+(zORDER+61)+'\;'+ub8+'height:1px\;">'+ud2+'</div></div>';
u1=cI[uc1][ud1].length;
for(i=0;i<u1;i++){
ctj=document.getElementById('childtext-'+uc1+'-'+ud1+'-'+i);
uc6=((ctj.parentNode.offsetHeight/2)-(ctj.offsetHeight/2)+svtOFFSET)+"px";
 ctj.style.top=uc6;
if(cP[uc1][ud1][2]=="left"){ctj.style.left=stINDENT+"px";}
if(cP[uc1][ud1][2]=="right"){ctj.style.left=(0-stINDENT)+"px";}
}
u63=document.getElementById('childshadow-'+uc1+'-'+ud1);
u63.style.height=(document.getElementById('childtable-'+uc1+'-'+ud1).offsetHeight+ua3)+"px";
u49=document.getElementById('childmenu-'+uc1+'-'+ud1);
if(u6&&!uf9){
uc7=parseInt(u49.style.top);
uc8=u49.offsetHeight;
uc9=window.pageYOffset;
 if((uc7+uc8)>(u21+uc9)){
ud0=uc7-((uc7+uc8)-(u21+uc9));
u49.style.top=(ud0)+"px";
}
  }
u49.style.visibility="visible";
return u49;
}
var ud5,ud6;
function clearCell(u50){
ud6=1;
u50.firstChild.firstChild.firstChild.style.color=saLINK;
if(u50.id.indexOf("subcell-")!=-1){
ud5=u50.id.replace("subcell-","");
ud5=parseInt(ud5);
if(sP[ud5][6]!=""){
u50.style.backgroundColor=u13[ud5][3];
u50.style.backgroundImage='url('+u8+')';
ud6=0;
}
if(sP[ud5][10]!=""){
u50.firstChild.firstChild.firstChild.style.color=u13[ud5][7];
}
if(ub2[ud5][0]!=null){
if(u17=="img"){
if(cP[ud5][0][1]=="left"){
ub2[ud5][0].src=u19[0].src;
}
if(cP[ud5][0][1]=="right"){
ub2[ud5][0].src=u19[1].src;
}
}
else if(u17=="txt"){
ub2[ud5][0].style.color=u13[ud5][7];
}
}
}
if(u50.id.indexOf("childcell-")!=-1){
ud5=u50.id.replace("childcell-","");
ud5=ud5.split("-");
if(cP[ud5[0]][ud5[1]][6]!=""){
u50.style.backgroundColor=u15[ud5[0]][ud5[1]][3];
u50.style.backgroundImage='url('+u8+')';
ud6=0;
}
if(cP[ud5[0]][ud5[1]][10]!=""){
u50.firstChild.firstChild.style.color=u15[ud5[0]][ud5[1]][7];
}
}
if(ud6){
if(u11[5]){
(u11[3])?u50.style.backgroundImage='url('+u9[3].src+')':u50.style.backgroundImage='url('+u8+')';
}
else{
(u11[3])?u50.style.backgroundImage='url('+u9[3].src+')':u50.style.backgroundColor=u9[3];
}
}
}
function childCell(u96,uc5,ud7){
clearTimeout(u75);
u76=0;
if(!keepSubLIT){
u47.firstChild.firstChild.firstChild.style.color=u13[u96][7];
if(sP[u96][6]!=""){
u47.style.backgroundColor=u13[u96][3];
u47.style.backgroundImage='url('+u8+')';
}
else{
if(u11[5]){
(u11[3])?u47.style.backgroundImage='url('+u9[3].src+')':u47.style.backgroundImage='url('+u8+')';
}
else{
(u11[3])?u47.style.backgroundImage='url('+u9[3].src+')':u47.style.backgroundColor=u9[3];
}
}
if(ub2[u96][uc5]!=null){
if(u17=="img"){
if(cP[u96][uc5][1]=="left"){
ub2[u96][uc5].src=u19[0].src;
}
if(cP[u96][uc5][1]=="right"){
ub2[u96][uc5].src=u19[1].src;
}
}
else if(u17=="txt"){
ub2[u96][uc5].style.color=u13[u96][7];
}
}
}
if(u73[2]>-1){
u43=document.getElementById('childcell-'+u73[0]+'-'+u73[1]+'-'+u73[2]);
u43.firstChild.firstChild.style.color=u15[u73[0]][u73[1]][7];
if(cP[u73[0]][u73[1]][6]!=""){
u43.style.backgroundColor=u15[u73[0]][u73[1]][3];
u43.style.backgroundImage='url('+u8+')';
}
else{
if(u11[5]){
(u11[3])?u43.style.backgroundImage='url('+u9[3].src+')':u43.style.backgroundImage='url('+u8+')';
}
else{
(u11[3])?u43.style.backgroundImage='url('+u9[3].src+')':u43.style.backgroundColor=u9[3];
}
}
}
u72=[u96,uc5,ud7];
u73=u72;
u74=u72;
u50=document.getElementById('childcell-'+u96+'-'+uc5+'-'+ud7);
if(cI[u96][uc5][ud7][4]){
if(cP[u96][uc5][7]!=""){
u50.style.backgroundImage='url('+u8+')';
u50.style.backgroundColor=u15[u96][uc5][5];
}
else{
if(u11[5]){
u50.style.backgroundImage='url('+u9[5].src+')';
}
else{
u50.style.backgroundImage='url('+u8+')';
u50.style.backgroundColor=u9[5];
}
}
}
if(cI[u96][uc5][ud7][0]!="~"){u50.firstChild.firstChild.style.color=u15[u96][uc5][8];}
if(altDISPLAY=="status"){
writeStatus(cI[u96][uc5][ud7][3]);
}
else{
u38=cI[u96][uc5][ud7][0];
if(u38=="#"||u38=="~"){u38="";}
writeStatus(u38);
}
showGrid();
}
var ud8='';
ud8+='<div id="u40" class="printhide" style="position:absolute\;left:0px\;top:0px\;">';
var ud9="";
if(redGRID){ud9="background-color:red";}
var ue0=u20;
if(gridWIDTH>0){ue0=gridWIDTH;}
var ue1=u21;
if(gridHEIGHT>0){ue1=gridHEIGHT;}
ud8+='<div id="udm-u42" onmouseover="if(typeof gridClearMenus==\'function\'){gridClearMenus()}" style="'+ud9+'\;cursor:default\;visibility:hidden\;position:absolute\;top:0px\;left:0px\;z-index:'+(zORDER+10)+'\;width:'+ue0+'px\;height:'+ue1+'px\;">&nbsp;</div>';
ud8+='<div id="manch" style="position:absolute\;top:0px\;left:0px\;z-index:'+(zORDER+40)+'\;"></div>';
ud8+='<div id="canch" style="position:absolute\;top:0px\;left:0px\;z-index:'+(zORDER+60)+'\;"></div>';
var ue2=u10[1];
var ue3=u10[0];
var ud3,ud4,ue4,ue5,ue6,ue9,uf0;
var ue7='overflow:hidden';
if(kde){ue7='';}
var ue8='';
if(u6){ue8='display:none';}
if(menuALIGN!="free"){
ue6=u10[0];
if(showBORDERS){ue6=u10[1];}
if(stretchMENU||showBORDERS){
ud8+='<div id="underb" style="'+ue8+'\;cursor:default\;'+ue6+'visibility:visible\;position:absolute\;z-index:'+(zORDER+1)+'\;left:0px\;top:'+u4+'px\;width:'+u20+'px\;height:'+(u23+(2*bSIZE))+'px\;">';
if(stretchMENU&&showBORDERS){ud8+='<div style="margin:'+bSIZE+'px\;width:'+(u20-(2*bSIZE))+'px\;height:'+u23+'px\;'+u10[0]+'cursor:default">&nbsp;</div>';}
ud8+='</div>';
}
ud8+='<div id="udm-navbar" style="'+ue8+'\;'+u10[1]+'position:absolute\;z-index:'+(zORDER+2)+'\;left:'+u5+'px\;top:'+u4+'\;width:'+u32+'px\;height:'+(u23+(2*bSIZE))+'px\;" class=mTD></div>';
ue5=u5+bSIZE;
for(i=0;i<u0;i++){
ud3='';
if(mI[i][0]!=""&&mI[i][0]!="#"&&mI[i][0]!="~"){ud3=' cursor:'+aCURSOR+'\;';}
ud4=' cursor:default\;';
if(mI[i][0]!=""&&mI[i][0]!="#"&&mI[i][0]!="~"){ud4=' cursor:'+aCURSOR+'\;';}
u39=""; if(altDISPLAY=="title"){u39=mI[i][5];}
ue9='onmouseover="u52=document.getElementById(\'submenu-'+i+'\')\;if(!u52){opT('+i+',1,\'x\',openTIMER)}else{partialMainCell('+i+')}"';
uf0=ue9;
ud8+='<div class="linkspan" title="'+u39+'" onfocus="mainCell('+i+')" '+ue9+' onmouseout="if(event.clientX<5||event.clientY<5){if(typeof gridClearMenus==\'function\'){gridClearMenus()}}" onclick="goToUrl(mI['+i+'][0],mI['+i+'][4],['+i+'])" id="maincell-'+i+'" style="'+ue8+'\;z-index:'+(zORDER+3)+'\;visibility:hidden\;position:absolute\;top:'+(u4+bSIZE)+'px\;left:'+ue5+'px\;'+ud3+u14[i][0]+'width:'+mI[i][2]+'px\;height:'+u29[i]+'px\;'+ue7+'"><table class="linkspan" cellpadding="0" cellspacing="0" border="0" style="width:'+mI[i][2]+'px\;height:'+u29[i]+'px" onmouseout="copT();event.stopPropagation()"><tr class="linkspan"><td class=mTD style="color:'+u13[i][9]+'" align="'+mI[i][3]+'"><span '+uf0+' id="maintext-'+i+'" style="'+ud4+'position:relative;left:0px;top:0px">'+mI[i][1]+'</span></td></tr></table></div>';
ue5+=bSIZE+mI[i][2];
}
}
if(menuALIGN=="free"){
for(i=0;i<u0;i++){
ud3='';
if(mI[i][0]!=""&&mI[i][0]!="#"&&mI[i][0]!="~"){ud3=' cursor:'+aCURSOR+'\;';}
ud4=' cursor:default\;';
if(mI[i][0]!=""&&mI[i][0]!="#"&&mI[i][0]!="~"){ud4=' cursor:'+aCURSOR+'\;';}
ud8+='<div style="'+u10[1]+'z-index:'+(zORDER+2)+'\;position:absolute\;left:'+(u5+mI[i][7])+'px\;top:'+(u4+mI[i][6])+'px\;width:'+(mI[i][2]+(2*bSIZE))+'px\;height:'+(u29[i]+(2*bSIZE))+'px\;"></div>';
u39=""; if(altDISPLAY=="title"){u39=mI[i][5];}
ue9='onmouseover="u52=document.getElementById(\'submenu-'+i+'\')\;if(!u52){opT('+i+',1,\'x\',openTIMER)}else{partialMainCell('+i+')}"';
uf0=ue9;
ud8+='<div class="linkspan" title="'+u39+'" onfocus="mainCell('+i+')" '+ue9+' onmouseout="if(event.clientX<5||event.clientY<5){if(typeof gridClearMenus==\'function\'){gridClearMenus()}}" onclick="goToUrl(mI['+i+'][0],mI['+i+'][4])" id="maincell-'+i+'" style="'+ue8+'\;z-index:'+(zORDER+3)+'\;position:absolute\;left:'+(u5+mI[i][7]+bSIZE)+'px\;top:'+(u4+mI[i][6]+bSIZE)+'px\;visibility:hidden\;'+ud3+u14[i][0]+'width:'+mI[i][2]+'px\;height:'+u29[i]+'px\;'+ue7+'"><table class="linkspan" cellpadding="0" cellspacing="0" border="0" style="width:'+mI[i][2]+'px\;height:'+u29[i]+'px" class="linkspan" onmouseout="copT();event.stopPropagation()"><tr class="linkspan"><td class=mTD style="color:'+u13[i][9]+'" align="'+mI[i][3]+'"><span '+uf0+' class="linkspan" id="maintext-'+i+'" style="'+ud4+'position:relative;left:0px;top:0px">'+mI[i][1]+'</span></td></tr></table></div>';
ue5+=bSIZE+mI[i][2];
}
}
ud8+='</div>';
document.write(ud8);
function kpf(e){
u87=e.target;
if(typeof u87.className!="undefined" && u87.className!="mTD"&&u87.className!="linkspan"&&typeof e.target.data!="string"){
copT();
}
}
if(!u6&&(openTIMER>0||openChildTIMER>0)){document.onmousemove=kpf;}
function clickToClose(){
if(menuReadyState){
clearSubMenus();
if(typeof menuClosingFunction=="function"){menuClosingFunction();}
}
}
document.onclick=clickToClose;
var uf1;
var uf2=0;
function loadFunction(){
if(u6){document.addEventListener("mousemove", menuListen, 0);}
if(!u6){
for(i=0;i<u0;i++){
ue4=document.getElementById("maintext-"+i);
if(typeof ue4!="undefined"){
uf1=((u29[i]/2)-(ue4.offsetHeight/2)+vtOFFSET-(vPADDING/2)-1)+"px";
if(kde){uf1=vtOFFSET+"px";}
ue4.style.top=uf1;
if(mI[i][3]=="left"){ue4.style.left=tINDENT+"px";}
if(mI[i][3]=="right"){ue4.style.left=(0-tINDENT)+"px";}
document.getElementById("maincell-"+i).style.visibility="visible";
}
}
}
u41=document.getElementById("udm-navbar");
if(menuALIGN!="free"){u41.style.top=u4+"px";}
u42=document.getElementById("udm-u42");
u45=document.getElementById("manch");
u48=document.getElementById("canch");
uf2=1;
genericOnloadFunction();
if(kde){nsinit();}
}
window.onload=loadFunction;
function reF(){
if(u6){
var u20=window.innerWidth;
u22=14;
if(!kde&&!saf){
if(ns7){u22=15;}
if(mac&&(mz7&&ns6)){u22=16;}
if((mz7&&ns6)&&(agt.indexOf("rc1")!=-1||agt.indexOf("rv:1.2")!=-1)){u22=19;}
if((mz7&&mac)||(ns6&&!mz7)){
if(((mz7&&ns6)&&win&&(agt.indexOf("windows nt 5.1")!=-1))||mac||ns6){
if(document.width<=(innerWidth-30)){u20-=u22;}
}
}
else if((mz7&&ns6)&&win&&(agt.indexOf("windows nt 5.0")!=-1)){if(document.width<=(innerWidth-16)){u20-=16;}}
else if(win){if(document.width<=(innerWidth-17)){u20-=17;}}
if(lin){if(document.width<=(innerWidth-17)){u20-=17;}}
if(agt.indexOf("mac os x")!=-1){u20+=1;}
u20-=u22;
}
if(saf){
u20-=15;
u21-=15;
}
if(op7){
u20=document.body.clientWidth;
}
if((kde||saf)&&u6){u20-=16;}
if(documentWIDTH>0){u20=documentWIDTH;}
u42.style.width=u20+"px";
if(op7){
u42.style.height=(document.body.clientHeight)+"px";
}
else{
u42.style.height=(window.innerHeight)+"px";
}
u21=parseInt(u42.style.height);
}
if(allowRESIZE==true){ window.location.reload();}
}
function nsinit(){setTimeout("window.onresize=redo", 500);}
function redo(){reF();}
if(!kde){
window.onresize=reF;
}
var uf3=1;
var uf4,uf5,uf6,uf7,uf8;
function menuListen(e){
if(uf3){uf4=[e.clientX+32,e.clientY];}
}
var uf9;
function activateMenu(ug0,ug1,ug2,ug3){
if(uf2&&typeof uf4!="undefined"&&typeof sP[ug0]!="undefined"&&u6){
uf9=0;if(typeof ug1!="undefined"){uf9=1;}
uf3=0;
ug5=0;
uf7=uf4[0];
uf8=uf4[1];
if(uf9){uf4=[0,0];}
vOFFSET=0;
hOFFSET=0;
sP[ug0][3]=0;
sP[ug0][4]=0;
if(u17!=""){
u1=sI[ug0].length;
if(!uf9){
if(uf4[0]>(u20/2)){
for(i=0;i<u1;i++){
cP[ug0][i][1]="right";
}
}
else{
for(i=0;i<u1;i++){
cP[ug0][i][1]="left";
}
}
}
else{
for(i=0;i<u1;i++){
if(typeof rcP[ug0][i]!="undefined"){cP[ug0][i][1]=rcP[ug0][i][1];}
}
}
}
mainCell(ug0,0);
uf6=window.pageYOffset;
u1=sI[ug0].length;
if(!uf9){
for(i=0;i<u1;i++){
cP[ug0][i][1]="left";
}
}
else{
for(i=0;i<u1;i++){
if(typeof rcP[ug0][i]!="undefined"){cP[ug0][i][1]=rcP[ug0][i][1];}
}
}
uf5=[u46.offsetWidth,u46.offsetHeight];
if(uf4[0]>(u20/2)){
uf4[0]=uf7-64-uf5[0];
if(!uf9){
for(i=0;i<u1;i++){
cP[ug0][i][1]="right";
}
}
}
if(kde){
if((uf4[1]+uf5[1])>(u21+uf6)){
uf4[1]=(uf8)-((uf4[1]+uf5[1])-(u21+uf6));
}
}
else{
if((uf4[1]+uf5[1])>u21){
uf4[1]=(uf8)-((uf4[1]+uf5[1])-u21);
}
}
if(typeof ug1!="undefined"){
uf4[0]=ug1;
if(typeof ug2 !="undefined"){uf4[1]=ug2;}else{uf4[1]=0;}
uf4[1]-=1;
if(u37=="string"){
uf4[0]-=shSIZE;
uf4[1]-=shSIZE;
}
if(typeof ug3!="undefined" && ug3){
uf4[1]+=uf6;
}
}
hOFFSET=uf4[0];
vOFFSET=uf4[1];
u46.style.left=hOFFSET+"px";
u44.style.left=(hOFFSET)+"px";
if(uf9){
u46.style.top=vOFFSET+"px";
u44.style.top=(vOFFSET-u29[ug0]-bSIZE)+"px";
}
else{
(kde)?u46.style.top=(vOFFSET)+"px":u46.style.top=(vOFFSET+uf6)+"px";
(kde)?u44.style.top=((vOFFSET)-u29[ug0]-bSIZE)+"px":u44.style.top=((vOFFSET+uf6)-u29[ug0]-bSIZE)+"px";
}
u55=parseInt(u44.style.left);
if(u37=="string"){u55-=(shSIZE*2);}
u58=parseInt(u44.style.top)+u29[ug0];
u42.style.top=uf6+"px";
remoteShow(u46);
uf3=1;
}
}
var ug4;
var ug5=0;
var ug6;
function remoteShow(ug7){
ug6=ug7;
if(ug5==1){
clearTimeout(ug4);
ug5=0;
ug7.style.visibility="visible";
}
else{
ug5=1;
ug4=setTimeout("remoteShow(ug6)",50);
}
}
function deactivateMenus(ug8){
if(typeof ug8=="undefined" || ug8==1){
clearSubMenus();
if(typeof menuClosingFunction=="function"){menuClosingFunction();}
}
else if (ug8==0){
if(typeof gridClearMenus=="function"){gridClearMenus();}
}
}