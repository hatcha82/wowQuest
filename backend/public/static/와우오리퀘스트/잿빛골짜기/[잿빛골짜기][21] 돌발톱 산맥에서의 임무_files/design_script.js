$(function() {
	favoriteNework();
	$('.tooltipBalloon').PFtooltip('balloonText');

	$('.profileSection .iconNoteNot').PFformbox('blockingWriterBox');
	$('.profileSection .iconNoteNot').PFformbox('blockingUserBox');
	$('.hmenu .notice').PFformbox('headerNoticeBox');
	$('.fanList .iconBlockNot').PFformbox('blockingThisGuy');
	$('.iconBlock').PFformbox('blockingThisGuy');
	$('.iconNoteNot').PFformbox('noteSendTo');
	$('.hmenu .pfnDiv').PFformbox('pfnDiv');

	asideForIE6();
	addNewListBox();
	fanList();

	if( $('.boardList') ) {
		$('.boardList table td.title a').ie6maxWidth();
		$('.boardList table td.name a').ie6maxWidth();
	}
});

function asideForIE6() {
	$('#container .newCommentList li a').ie6maxWidth();
	$('#container .keepingList a.nickname').ie6maxWidth();
	$('#container .keepingList a.listTitle').ie6maxWidth();
	$('#container .forumReport li a').ie6maxWidth();
	$('#container .forumPlacing .ranking .rankingList span.server').ie6maxWidth();
	$('#container .forumPlacing .ranking .rankingList span.team').ie6maxWidth();
	$('#container .forumNews .relationNews li').ie6maxWidth();
	$('#container .newsPreview .bulType_gray a').ie6maxWidth();
	$('#container .gameSchedule li a').ie6maxWidth();
}

function addNewListBox() {
	var $addNewGroupBox = $('#addNewGroupBox');
	if (!$addNewGroupBox) return false;
	function hideBox() {
		$addNewGroupBox.hide().parent().css('z-index','1');
	}
	hideBox();
	$('#addNewGroup').click(function(){
		if ($addNewGroupBox.css('display') == 'none') {
			$addNewGroupBox.show().parent().css('z-index','10');
		} else {
			hideBox();
		}
		return false;
	});
	$(document.body).click(function(){
		hideBox();
	});
	$addNewGroupBox.click(function(event){
		event.stopPropagation();
	});
}

// 팬/스타
function fanList() {
	// 그룹&리스트 수정
	$('.groupBooth').each(function(){
		var $this = $(this);
		var $groupBooth = $('.groupBooth');
		var $btn = $('p:first', $this);

		function groupBoothReset() {
			$groupBooth
				.removeClass('relationListOpened')
				.addClass('relationListClosed');
			$('.indented').css({zIndex: 1});
		}

		$btn.click(function(){
			groupBoothReset();
			$this
				.toggleClass('relationListOpened')
				.toggleClass('relationListClosed')
				.parent().css('z-index','10');
		});
		$this.click(function(event){
			event.stopPropagation();
		});
		$(document.body).click(function(){
			groupBoothReset();
		});
	});

	$('.relationList li').click(function(){
		$(this).toggleClass('choice');
		return false;
	});

	// aside left
	$('.groupList ul li:has(div)').each(function(){
		var $thisGroup = $('.groupList ul li:has(div)');
		var $this = $(this);
		var $icon = $('.funcIconS', $this);
		var $iconEdit = $('.iconEditS', $this);
		$icon.hide();
		$this.hover(
			function(){
				$icon.show();
			},
			function(){
				$icon.hide();
			}
		);
		$iconEdit.click(function(event){
			event.stopPropagation();
			$thisGroup.removeClass('onEdit');
			$(this).parent().addClass('onEdit');
			$this.find('input[type=text]').focus();
		});
		$(document.body).click(function(){
			$thisGroup.removeClass('onEdit');
		});
	});
	
	// ie6
	$('.fanList .indented dt a').ie6maxWidth();
}


function receiverSearchBox() {
	var $receiverList = $('#receiverList');
	var $inputReceiver = $('#inputReceiver');
	var $findReceiverList = $('#findReceiverList');

	$inputReceiver.click(function(event) {
		var pos = $.extend({}, $(this).position());
		$findReceiverList.show().css({left: pos.left, top:pos.top + 17});
	});

	$('#findReceiverList li').each(function(){
		var $this = $(this);
		$this.click(function(event) {
			var setNick = $('<span class="receiver"><a href="#">'+$this.text()+'</a></span>');
			setNick.appendTo($receiverList);
			$inputReceiver.val('').appendTo($receiverList);
			$findReceiverList.hide();

		});
	});
}

function noteWrite() {
	receiverSearchBox();
}

function guideMessage(message, isReload, redirectSrc) {
	if(! message) return false;
	var guideMessage = message;
	var container = $('body');
	var $msgBox = $('<div class="guideMessage"><p>' + guideMessage + '</p></div>');
	$msgBox.appendTo(container).hide();
	$msgBox.each(function(){
		var $this = $(this);
		function showThisMsg(){
			if(isie6) { $this.show() }
			else {$this.slideDown('fast');}
		}

		function removeThisMsg() {
			if(isie6) { $this.hide() }
			else {$this.slideUp(150);}

			if (undefined != redirectSrc) {
				location.href = redirectSrc;
				return false;
			}
			if (isReload) location.reload();
		}

		$msgBox.click(removeThisMsg);
		showThisMsg();
		setTimeout(removeThisMsg,1200);
	});
}

function checkComment(targetId) {
	var input = $('#'+targetId);
	var commentGuide = input.val();
	input.focus( function(){
		if( $.trim(input.val()) == commentGuide ){ input.val(''); }
	});
	input.blur( function(){
		if( $.trim(input.val()) == '' ){ input.val(commentGuide); }
	});
}


function layerOver(btnId) {
	var btn = $('#'+btnId);
	var target = $(btn).attr('href');
	$(btn).hover(
		function(){
			$(target).css('visibility','visible').show();
		},
		function(){
			$(target).hide();
		}
	);
	$(btn).click(function(){return false;});
	$(btn).focus( function(){ $(target).css('visibility','visible').show(); });
	$(btn).blur(  function(){$(target).hide();});
}

function commentFold() {
	var commentContainer = $('.commentList dd');
	if( !commentContainer[0] ) return false;
	
	commentContainer.each(function(n) {
		var $this = $(this);
		if( $this.height() < 360 ) return;
		var setId = 'longComment' +n;
		var commentPosition = $.extend({}, $(this).offset());
		var btn = $('<a href="#'+setId+'" class="commentFunction">펼치기</a>');

		$this.addClass('folded');
		$thisContainer = $this.parent().parent();
		$thisContainer.attr('id',setId);
		var commentPosition = $thisContainer.offset();
		
		var scrollTop = commentPosition.top;

		btn.appendTo($this).toggle(
			function(){
				$this.removeClass('folded');
				$(this).text('접기');
			},
			function(){
				$this.addClass('folded');
				$(this).text('펼치기');
				if ( $.browser.msie ) window.scrollTo(0, scrollTop);
			}
		);
	});
}


// gnb favorite
function favoriteNework() {
	var container = $('#favoriteNework');
	var fav = $('#favoriteList');
	if (!fav) return;
	var forumNew = $('#bookmarkMenu');
	if (forumNew) {
		container.appendTo(forumNew);
	}
	var open = false;

	function foldFavoriteList(){
		fav.hide();
		open = false;
	}
	function openFavoriteList(){
		fav.show();
		open = true;
	}
	$(document.body).click(foldFavoriteList);

	$('.favoriteTop .button', container).click(function(event){
		event.stopPropagation();
		if ( open ) { 
			foldFavoriteList();
		} else {
			openFavoriteList();
		}
		return false;
	});
	$('li',fav).hover(
		function(){ $('.funcIconS',this).css('visibility','visible'); },
		function(){ $('.funcIconS',this).css('visibility','hidden'); }
	);
	$('li a.item',fav).focus(function(){
		$thisContainer = $(this).parent();
		$('.funcIconS',$thisContainer).css('visibility','visible');
	});
	$('li a.iconDeleteS',fav).blur(function(){
		$thisContainer = $(this).parent();
		$('.funcIconS',$thisContainer).css('visibility','hidden');
	});
	$('#favoriteAdd').click(function(event){
		event.stopPropagation();
	});
	checkComment('favoriteAdd');
	foldFavoriteList();
}

function scrollToContentBottom() {
	var height = parseInt($('#contents').height());
	window.scroll(0,height+90);
}


/* image roll =========================================================================*/
function imgOver() {
	this.src = this.src.replace(".gif", "_on.gif");
}
function imgOut() {
	this.src = this.src.replace("_on.gif", ".gif");
}

function initSubMenu(tabContainer) {
	if(tabContainer!=null) {
		triggers = tabContainer.getElementsByTagName("a");
	
		for(i = 0; i < triggers.length; i++) {
			triggers.item(i).imgEl = triggers.item(i).getElementsByTagName("img").item(0);
			triggers.item(i).imgEl.onmouseover = imgOver;
			triggers.item(i).imgEl.onmouseout = imgOut;
	
			if (triggers.item(i).href.split("#")[1])
				triggers.item(i).targetEl = document.getElementById(triggers.item(i).href.split("#")[1]);
			if (!triggers.item(i).targetEl)
				continue;
			
			triggers.item(i).targetEl.style.display = "none";
		}
	}
}


//cube
function slidingCube(showNum) {
	var action = true;
	var index = 0;
	var showItem = showNum;
	var interval = 3000;
	var fv = 500;
	var $list = $('ul.cube2');
	var $paging = $('ol.cube2Paging');

	var pages = $list.find('li').size() - showItem;
	var width = parseInt($list.find('li').width());
	$list.wrap('<div class="cubeMask" />');

	/* action */
	function next(){
		var $moveItem = $('li:first-child',$list);
		$moveItem
			.appendTo($list)
			.clone().prependTo($list).animate(
				{'marginLeft':'-'+width+'px','opacity':0}, fv, 'swing',
				function() {
					$(this).remove();
				}
			);
		index ++;
		setPaging();
	}
	function prev(){
		var $moveItem = $('li:last-child',$list);
		$moveItem.css({'marginLeft':'-'+width+'px','opacity':0}).prependTo($list).animate(
			{'marginLeft':0,'opacity':1}, fv, 'swing'
		);
		index --;
		setPaging();
	}
	function setPaging() {
		$('li',$paging).removeClass('on');
		$('li',$paging).slice(index,index+showItem).addClass('on');
	}
	function goIndex(n){
		var times = Math.abs(index-n);
		if (index-n < 0) {
			next();
			if(times == 2) {
				setTimeout(function(){next();},fv);
			}
		} else if (index-n > 0) {
			for (var i = 0; i < times ; i++) {
				prev();
			}
		}
	}
	function autorun(){
		if(!action) return;
		if (index < pages) {
			next();
		} else {
			goIndex(0);
		}
	}
	if(action) {
		setInterval(function(){autorun()}, interval);
		$list.add($paging).hover(function(){action = false;},function(){action = true;});
	}
	/* paging button */
	$('li:lt('+showItem+')',$paging).addClass('on');
	$('button',$paging).click(function(){
		if( $(this).parent().is('.on') ) return;
		var n = $('button',$paging).index($(this));
		if ( n < showItem-1 && n != 0 ) {
			n = 1;
		} else if ( n == 5) {
			n = 2;
		}
		goIndex(n);
	});
}