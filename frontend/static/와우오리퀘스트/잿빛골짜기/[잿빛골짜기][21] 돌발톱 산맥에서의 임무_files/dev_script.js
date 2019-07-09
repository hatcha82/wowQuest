//스타 추가
function modifyStar(starNickname, isAdd, clickElement) {
	var methodString = 'POST';
	if (! isAdd) {
		methodString = 'DELETE';
	}
	
	if (isAdd) {
		if (! confirm(starNickname + '님의 팬이 되시겠습니까?')) return false;
	} else {
		if (! confirm(starNickname + '님을 더 이상 스타로 삼지 않으시겠습니까?')) return false;
	}

	$(clickElement).hide();

	$.post(gateHost + encodeURI(starNickname) + '/star', {
		_method: methodString
    }, function (json) {
		$(clickElement).show();
		
    	if (json.isError) {
    		guideMessage(json.message, false);
    		return false;
    	}
    	
		guideMessage(json.message, true);
    }, "json");
}

//리스트 추가
function addStarCategory(address) {
	$.post(address, {
    }, function (json) {
    	if (json.isError) {
    		guideMessage(json.message, false);
    		return false;
    	}
		
		guideMessage(json.message, true);
    }, "json");
}

//리스트 삭제
function deleteStarCategory(address) {
	$.post(address, {
		_method: 'DELETE'
    }, function (json) {
    	if (json.isError) {
    		guideMessage(json.message, false);
    		return false;
    	}
		
		guideMessage(json.message, true, gateHost + '/' + ownerNickname + '/star');
    }, "json");
}

//리스트 수정
function modifyStarCategory(address, changeListName) {
	$.post(address, {
		changeListName: changeListName,
		_method: 'PUT'
    }, function (json) {
    	if (json.isError) {
    		guideMessage(json.message, false);
    		return false;
    	}
		
		guideMessage(json.message, true, gateHost + '/' + ownerNickname + '/star');
    }, "json");
}

//팬그룹 추가
function addFanGroup(address) {
	$.post(address, {
    }, function (json) {
    	if (json.isError) {
    		guideMessage(json.message, false);
    		return false;
    	}
		
		guideMessage(json.message, true);
    }, "json");
}

//팬그룹 삭제
function deleteFanGroup(address) {
	$.post(address, {
		_method: 'DELETE'
    }, function (json) {
    	if (json.isError) {
    		guideMessage(json.message, false);
    		return false;
    	}
		
		guideMessage(json.message, true, gateHost + '/' + ownerNickname + '/fan');
    }, "json");
}

//팬그룹 수정
function modifyFanGroup(address, changeListName) {
	$.post(address, {
		changeFanGroupName: changeListName,
		_method: 'PUT'
    }, function (json) {
    	if (json.isError) {
    		guideMessage(json.message, false);
    		return false;
    	}
		
		guideMessage(json.message, true, gateHost + '/' + ownerNickname + '/fan');
    }, "json");
}

//상단 알림
function getAnnounce(limit) {
	$.post(gateHost + "/announce/announce/" + limit, {
    }, function (json) {
		$('#headerNoticeBox .balloonInnerBox').empty();
		$.each(json.starFanList, function(i, starFan) {
			$('#headerNoticeBox .balloonInnerBox').append('<li><a href=\'' + gateHost + encodeURI(starFan.fanMember.nickname) + '\'>' + starFan.fanMember.nickname + ' 님이 팬으로 등록 되었습니다. </a></li>');
		});
		
    }, "json");
}

//쪽지보내기 전 보내는 사람 세팅
function setToNickname(toMemberNickname) {
	$('#noteSendTo').find('.toMemberNickname').text(toMemberNickname);
}

//쪽지보내기
function sendNote1(clickElement) {
	var toMemberNickname = $(clickElement).prev().prev().find('.toMemberNickname').text();
	var content = $(clickElement).prev().val();
	
    $.post(gateHost + encodeURI(toMemberNickname) + "/note/send", {
        content : content
    }, function (json) {
		if (json.isError) {
    		guideMessage(json.message, false);
    		return false;
		}
		
		guideMessage(json.message, true);   
    }, "json");             	
}

//차단하기 전 사람 세팅
var blockBt;
function setToBlockNickname(blockNickname, clickElement) {
	blockBt = clickElement;
	$('#blockingThisGuy').find('.blockNickname').val(blockNickname);
}

//차단하기
function addBlock(clickElement) {
	var blockNickname = $(clickElement).prev().prev().val();
	var reason = $(clickElement).prev().val();
	
    $.post(gateHost + encodeURI(blockNickname) + "/block", {
        reason : reason
    }, function (json) {
		if (json.isError) {
    		guideMessage(json.message, false);
    		return false;
		}
		
		$('#blockingThisGuy').css({visibility: 'hidden'});
		$(blockBt).removeClass("iconBlock");
		$(blockBt).addClass("iconBlockNot");
		
		guideMessage(json.message, false);   
    }, "json");             	
}

//차단해제
function deleteBlock(nickname) {
	$.post(gateHost + encodeURI(nickname) + "/block", {
        _method: 'DELETE'
    }, function (json) {
		if (json.isError) {
    		guideMessage(json.message, false);
    		return false;
		}
		
		guideMessage(json.message, true);   
    }, "json");             	
}

function boardImage(element, srcString) {
    $('IFRAME').css('visibility', 'hidden');
    $('SELECT').css('visibility', 'hidden');
    
    tempImage = $('<IMG><\/IMG>')
        .attr('src', srcString)
        .css({position: 'absolute', visibility: 'hidden', cursor: 'pointer'})
        .click(function() {
            $(this).remove();
            $('IFRAME').css('visibility', 'visible');
            $('SELECT').css('visibility', 'visible');
        })
        .appendTo('BODY');              
    setTimeout('imageShow(tempImage);', 300);
    return false;
}

function boardImageUseSrc(srcString) {
    $('IFRAME').css('visibility', 'hidden');
    $('SELECT').css('visibility', 'hidden');
    
    tempImage = $('<IMG><\/IMG>')
        .attr('src', srcString)
        .css({position: 'absolute', visibility: 'hidden', cursor: 'pointer'})
        .click(function() {
            $(this).remove();
            $('IFRAME').css('visibility', 'visible');
            $('SELECT').css('visibility', 'visible');
        })
        .appendTo('BODY');              
    setTimeout('imageShow(tempImage);', 300);
    return false;
}

function profileImage(srcString) {
    $('IFRAME').css('visibility', 'hidden');
    $('SELECT').css('visibility', 'hidden');
    tempImage = $('<IMG><\/IMG>')
    .attr('src', srcString)
    .css({position: 'absolute', visibility: 'hidden', cursor: 'pointer'})
    .click(function() {
        $(this).remove();
        $('IFRAME').css('visibility', 'visible');
        $('SELECT').css('visibility', 'visible');
    })
    .appendTo('BODY'); 
    setTimeout('imageShow(tempImage);', 300);
    return false;
}

//쪽지쪽 서제스트
var oldSearch;
function searchForSend(){
	var search = $('#inputReceiver').val();
	
	if ('' == search) {
		suggestSetTimeout = setTimeout("searchForSend()", 500);
		return false;
	}
	
	if (oldSearch == search) {
		suggestSetTimeout = setTimeout("searchForSend()", 500);
		return false;
	}
	
	oldSearch = search;

	var $receiverList = $('#receiverList');
	var $inputReceiver = $('#inputReceiver');
	var $findReceiverList = $('#findReceiverList');
    $('#findReceiverList').empty();
    
    $.post(gateHost + "note/search", {
        searchNickName : search
    }, function(json){
        if (json.isError) {
        	suggestSetTimeout = setTimeout("searchForSend()", 500);
            return false;
        }
        $findReceiverList.hide();
        $('#findReceiverList').append('<ul class="fromList">');
        
        $.each(json.groupList, function(i, NoteWriteSearch){
        		$('.fromList').append('<li class="twoGroup"><a href="#"><span></span>*'+NoteWriteSearch+'</a></li>');
        });

        $.each(json.fanList, function(i, NoteWriteSearch){
    		$('.fromList').append('<li class="oneGroup"><a href="#"><span></span>'+NoteWriteSearch+'</a></li>');
        });
        
        $('#findReceiverList').append('</ul>');
        
    	$inputReceiver.each(function(){
    		var $this = $(this);
   			var pos = $.extend({}, $(this).position());
   			$findReceiverList.show().css({left: pos.left, top:pos.top + 17});
    	});
    
        $('#findReceiverList li').each(function(){
    		var $this = $(this);
    		$this.click(function(event) {
    			var setNick = $('<span class="receiver" onclick="delElement($(this).remove());" ><a href="#">'+$this.text()+',</a></span>');
    			setNick.appendTo($receiverList);
    			$inputReceiver.val('').appendTo($receiverList);
    			$inputReceiver.focus();
    			$findReceiverList.hide();
    		});
    	});
    	
    	suggestSetTimeout = setTimeout("searchForSend()", 500);
    }, "json");
}

function delElement(value){
	$(value).remove();
}

function sendNoteFromWrite(nickname){
	var userSet = $('.receiverList').text();
	if(userSet == ""){
		alert("입력하지 않았거나 잘못된 사용자입니다.");
		return;
	}
	if($('#content').val() == ""){
		alert('내용을 입력하세요.');
		return;
	}
	var contentVal = $('#content').val();
	$.post(gateHost + encodeURI(nickname) + "/note/write", {
		users : userSet, 
		content : contentVal
	}, function (json) {
	    if (json.isError) {
	        guideMessage(json.message, false);
	        return false;
	    }
	    
		guideMessage(json.message, true, gateHost + encodeURI(nickname) + '/note/0');  
	}, "json");
}

function sendNoteFromView(nickname, tonickname) {
	if($('#content').val() == ""){
		alert('내용을 입력하세요.');
		return;
	} else {
		$('#noteSend').hide();
        $('#lodingImg').show();
                
	    $.post(gateHost + encodeURI(nickname)+"/note/view/0", {
	    	users : tonickname,
	        content: $('#content').val()
	    }, function (json) {
	    	if (json.isError) {
		        guideMessage(json.message, false);
		        return false;
		    }
	    	$('#content').attr("value", "");
	    	guideMessage(json.message, true);  
	    }, "json");
	}
}

function resizeImage(element) {
	var obj = $(element);
    
    obj.css({cursor: 'pointer'});
    if(obj.width() >= 590) {
        obj.width('600px');
    }
    return false;
}

function resizeImageChoice(element, widthSize) {
	var obj = $(element);
    
    obj.css({cursor: 'pointer'});
    if(obj.width() >= widthSize - 10) {
        obj.width(widthSize + 'px');
    }
    return false;
}

function imageShow(viewImage) {
    var boxTop = document.documentElement.clientHeight / 2 - viewImage.height() / 2 + $(window).scrollTop();
    var boxLeft = document.documentElement.clientWidth / 2 - viewImage.width() / 2;

    if (0 > boxTop) boxTop = 0;
    if (0 > boxLeft) boxLeft = 0;

    viewImage.css({top: boxTop, left: boxLeft, visibility: 'visible', zIndex: '1000'});
    return false;
}

function boardImage(element) {
	$('IFRAME').css('visibility', 'hidden');
	$('SELECT').css('visibility', 'hidden');
	
	tempImage = $('<IMG><\/IMG>')
		.attr('src', $(element).attr('src'))
		.css({position: 'absolute', visibility: 'hidden', cursor: 'pointer'})
		.click(function() {
			$(this).remove();
			$('IFRAME').css('visibility', 'visible');
			$('SELECT').css('visibility', 'visible');
		})
    	.appendTo('BODY');				
		
	setTimeout('imageShow(tempImage);', 300);
    return false;
}

//favorite add
function addFavorite(title, link) {
	$.post(gateHost + "favorite/link", {
		title : title, 
		link : link
	}, function (json) {
	    if (json.isError) {
	        guideMessage(json.message, false);
	        return false;
	    }
	    
		guideMessage(json.message, true);  
	}, "json");
}

//favorite delete
function deleteFavorite(id) {
	$.post(gateHost + "/favorite/link", {
		_method: 'DELETE',
		id : id
	}, function (json) {
	    if (json.isError) {
	        guideMessage(json.message, false);
	        return false;
	    }
	    
		guideMessage(json.message, true);  
	}, "json");
}

//favorite modify
function modifyFavorite(id) {
	$.post(gateHost + "/favorite/link", {
		_method: 'PUT',
		id : id
	}, function (json) {
	    if (json.isError) {
	        guideMessage(json.message, false);
	        return false;
	    }
	    
		guideMessage(json.message, true);  
	}, "json");
}

function subImageLoad(){
	$("#sub_image").parent().css("display", "block");
}

function showTabSubIndex(tabOrder, clickElement) {
	$('.areaLeftSub').hide();
	$('.areaLeft' + tabOrder).show();
	$('.mainTab LI').removeClass('on');
	$(clickElement).parent().addClass('on');
}

function showTabSubIndexRight(forum, searchString) {
	$.post('/' + forum + '/post/free/search/forum/' + encodeURI(searchString), {
    }, function (json) {
    	if (json.searchPost == '') {
    		$('.areaUlSubEmpty').show();
    		$('.areaUlSub').hide();
    		
    		return;
    	}
    	
		$('.areaUlSub').empty();
		$('.areaUlSub').show();
    	$.each(json.searchPost, function(i, post) {
    		$('.areaUlSub').append('<li><a href="/' + forum + '/post/' + post.section + '/view/' + post.postId + '">' + post.title + '</a><span style="width: 100px; white-space:nowrap; overflow: hidden;"><img src="http://image.playforum.net/member/level/' + post.lavel + '" alt="" /> ' + post.nickname + '</span></li>');
    	});
    	
    	$('.areaUlSubEmpty').hide();
    }, "json");
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + min)) + min;
}

function wowPhotoPaging(paging, clickElement) {
	$('#wowPhoto UL').hide(); 
	$('#wowPhoto' + paging).show();
	$('#wowPhotoPaging').find('A').removeClass('on');
	$(clickElement).addClass('on');
}

function pfPhotoPaging(paging, clickElement) {
	$('#pfPhoto UL').hide(); 
	$('#pfPhoto' + paging).show();
	$('#pfPhotoPaging').find('A').removeClass('on');
	$(clickElement).addClass('on');
}

function pfStarPaging(paging, clickElement) {
	$('#pfStar UL').hide(); 
	$('#pfStar' + paging).show();
	$('#pfStarPaging').find('A').removeClass('on');
	$(clickElement).addClass('on');
}

function areaPaging(paging, clickElement, areaName) {
	$('.'+areaName+'Area').hide(); 
	$('.'+areaName+'Area').eq(paging).show();
	$('#'+areaName+'Num').find('A').removeClass('on');
	$(clickElement).addClass('on');
}


function showNotice(forum, section, type, noticeNum) {
	$.post('/' + forum + '/' + type + '/' + section + '/notice', {
		noticeNum: noticeNum
    }, function (json) {
    	alert(json.content);
    }, "json");
}

function showGameNewsTab(index, el) {
	var tabNum = index+1;
	$('.mainNews').hide();
	$('.mainTab > li').removeClass('on');
	$('.mainNews').eq(index).show();
	$('.newsTab'+tabNum).addClass('on');
}

function forumMainSetting(){
	var newsNum = Math.round(Math.random()*9);
	$(".mainTab > li").eq(newsNum).addClass('on');
	$(".mainNews").eq(newsNum).show();
	
	var pftalkNum = Math.round(Math.random()*($(".pftalkArea").length-1));
	$(".pftalkArea").eq(pftalkNum).show();
	$('#pftalkNum').find('A').eq(pftalkNum).addClass('on');
	
	var photoNum = Math.round(Math.random()*($(".photoArea").length-1));
	$(".photoArea").eq(photoNum).show();
	$('#photoNum').find('A').eq(photoNum).addClass('on');
}