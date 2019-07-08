(function($){
	// icon tooltip
	$.fn.PFtooltip = function(option){
		var tooltipCssClass = option;
		$(this).each(function(){
			var layoutSize = 970;
			var $this = $(this);

			if ($this.children().is('span')) {
				var visibleText = $this.children().text();
				var balloonText = $this.text().split(visibleText)[1];
				$this.text('').text(visibleText);
			} else {
				var balloonText = $this.text();
			}
			$this.show();
			if(!balloonText) return;
			var tooltip = $('<div><div class="'+tooltipCssClass+'">'+balloonText+'</div></div>');

			$this.hover(function() {
				tooltip.css({position: 'absolute', zIndex: 10000, top: 0, left: 0, visibility: 'hidden', width: '240px'}).appendTo(document.body);
				var tooltipText = $('.'+tooltipCssClass, tooltip);
				var pos = $.extend({}, $(this).offset(), {width: $this.width(), height: $this.height()});
				var actualWidth = tooltipText[0].offsetWidth, actualHeight = tooltipText[0].offsetHeight;
				if($(window).width() < layoutSize && (pos.left + tooltipText.width()) > layoutSize) {
					tooltipText.css({backgroundPosition:"right bottom"});
					pos.left = pos.left - 8 - tooltipText.width();
				} else {
					tooltipText.css({backgroundPosition:"0 bottom"});
				}
				tooltip.css({top: pos.top -(actualHeight + 5), left: pos.left});
				tooltip.css({visibility: 'visible'});
			}, function() {
				tooltip.remove();
			});
			$this.focus(function() {
				tooltip.css({position: 'absolute', zIndex: 10000, top: 0, left: 0, visibility: 'hidden', width: '240px'}).appendTo(document.body);
				var tooltipText = $('.'+tooltipCssClass, tooltip);
				var pos = $.extend({}, $(this).offset(), {width: $this.width(), height: $this.height()});
				var actualWidth = tooltipText[0].offsetWidth, actualHeight = tooltipText[0].offsetHeight;
				if($(window).width() < layoutSize && (pos.left + tooltipText.width()) > layoutSize) {
					tooltipText.css({backgroundPosition:"right bottom"});
					pos.left = pos.left - 8 - tooltipText.width();
				} else {
					tooltipText.css({backgroundPosition:"0 bottom"});
				}
				tooltip.css({top: pos.top -(actualHeight + 5), left: pos.left});
				tooltip.css({visibility: 'visible'});
			});
			$this.blur(function() {
				tooltip.remove();
			});
		});
	}

	// floating simple form box
	$.fn.PFformbox= function(targetID){
		var box = '#' + targetID;
		var body = document.body;
		var $box = $(box);
		var $boxes = $('.balloonBox');
		$(body).click(function(){ $box.css({visibility: 'hidden'}); });
		
		if(! $box) return false;
		$box.css({position: 'absolute', zIndex: 10000, top: 0, left: 0, visibility: 'hidden'})
			.appendTo(body)
			.click(function(event){event.stopPropagation();});

		$(this).each(function(){
			var $this = $(this);
			$this.click(function(event) {
				event.stopPropagation();
				var pos = $.extend({}, $(this).offset(), {boxWidth: $box.width(), boxHeight: $box.height(), btnWidth: $this.width(), btnHeight: $this.height()});
				$box.css({top: pos.top + 20, left: pos.left -pos.boxWidth + pos.btnWidth});
				$boxes.css({visibility: 'hidden'});
				$box.css({visibility: 'visible'});
				var $textarea = $('textarea', $box);
				if($textarea) $('textarea', $box).focus();
				return false;
			});
		});
	}

	// folding list
	$.fn.PFfoldingList= function(number){
		var buttonID = $(this).attr('id');
		var $button = $('#'+buttonID+'Button');

		var $listContainer = $('ul',this)[0];
		var $listItems= $('li',$listContainer);
		var $moreItems= $('li:gt('+(number-1)+')',$listContainer);
		var items = $listItems.size();
		if (items<6) {
			$button.remove();
			return;
		}
		$moreItems.hide();

		$button.toggle(
			// spread
			function spread(){
				$('.balloonText').text('줄여보기');
				$(this).removeClass('viewOpen').addClass('viewClose').text('줄여보기');
				$moreItems.show();
			},
			// fold
			function fold(){
				$('.balloonText').text('펼쳐보기');
				$(this).removeClass('viewClose').addClass('viewOpen').text('펼쳐보기');
				$moreItems.hide();
			}
		);
	}

	// max-width for ie6
	$.fn.ie6maxWidth= function(){
		if ( !isie6 ) return false;
		$(this).each(function(){
			var $this = $(this);
			var getMaxwidth = $this.css('max-width');
			var maxwidth = parseFloat(getMaxwidth);
			if ( $this.width() > maxwidth ) $this.width(maxwidth);
		});
	}

	// max-height for ie6
	$.fn.ie6maxHeight= function(){
		if ( !isie6 ) return false;
		$(this).each(function(){
			var $this = $(this);
			var getMaxheight = $this.css('max-height');
			var maxheight = parseFloat(getMaxheight);
			if ( $this.height() > maxheight ) $this.height(maxheight);
		});
	}

	// numbering banner
	$.fn.PFbanner = function(option){
		var params = jQuery.extend({
			animation : 500,
			eventType : 'mouseover',
			bannerNumImageURI : null,
			numImageW : 15,		numImageH : 15,
			numPosX : 'left',	 		numDisX : 5,
			numPosY : 'bottom',	numDisY : 5,
			space : 4,
			random : true,
			interval : 2500,
			direction : 'horizontal'
		},option);

		$(this).each(function(){
			var $bannerList = $(this);
			var $bannerItem = $('li',$bannerList);
			var $bannerItem1 = $('li:eq(0)',$bannerList);
			var motion; (params.animation==false) ? motion=0 : motion=params.animation;
			var amount = $bannerItem.size();

			if ( ! params.bannerW ){
				var bannerW = parseInt($bannerItem1.css('width'));
			} else {
				var bannerW = params.bannerW;
			}
			if ( ! params.bannerH ){
				var bannerW = parseInt($bannerItem1.css('width'));
			} else {
				var bannerH = params.bannerH;
			}

			var num1src = params.bannerNumImageURI;
			var isNumImg; (num1src == null) ? isNumImg=false : isNumImg=true;

			var action; (params.interval > 0) ? action=true : action=false;
			var $animationController;
			var $animationObj;
			var randomset = (params.random) ? Math.floor(Math.random()*amount) : 0;
			var bannerIndex = randomset+1;

			if(params.direction != 'vertical'){ // horizontal
				$($bannerList).wrap("<div class='alibannerContainer'></div>");
				$animationController = $bannerList.parent();
				$bannerList.css({'width':bannerW*amount+'px'});
				$bannerItem.css('float','left');
				$animationObj = $bannerList;
			} else {	 // vertical
				$animationController = $bannerList;
				$animationObj = $bannerList.children('li:first');
			}

			$animationController.css({'position':'relative', 'overflow':'hidden', 'width':bannerW, 'height':bannerH});

			if(isNumImg){
				$bannerItem
					.append('<img src="'+num1src+'" class="bannerNum">')
					.each(function(n) {
						var posA;  (params.numPosX=='right') ? posA=amount-n-1 : posA=n;
						var posX = posA*(params.numImageW+params.space) + params.numDisX + 'px';
						$('.bannerNum', this)
							.css(params.numPosX, posX)
							.attr('alt', n+1);
					});
			} else {
				$bannerItem
					.append('<div class="bannerNum" />')
					.each(function(n) {
						var posA;  (params.numPosX=='right') ? posA=amount-n-1 : posA=n;
						var posX = posA*(params.numImageW+params.space) + params.numDisX + 'px';
						$('.bannerNum', this)
							.css(params.numPosX, posX)
							.css('text-align','center')
							.width(params.numImageW)
							.height(params.numImageH)
							.text(n+1);
					});
			}

			
			var $bannerNum = $('.bannerNum',$bannerList);
			$bannerNum
				.css({'position':'absolute','cursor':'pointer'})
				.css(params.numPosY, params.numDisY+'px')
				.each(function(n) {
					var $thisNum = $(this);
					if(isNumImg) {
						var numsrc = num1src.replace("1.gif", (n+1)+".gif");
						$thisNum.attr('src',numsrc);
					}

					function bannerShow(){
						bannerMotion(n,motion);
						on($thisNum);
						action = false;
					}
					$thisNum.bind(params.eventType,bannerShow);
				});

			function bannerMotion(num,ani){
				bannerIndex = num+1;
				if(params.direction == 'horizontal'){
					$animationObj.stop().animate({'marginLeft':'-'+bannerW*num+'px'},ani,'swing');
				} else {
					$animationObj.stop().animate({'marginTop':'-'+bannerH*num+'px'},ani,'swing');
				}
				resetNum();
			}

			function on(nObj){
				if(isNumImg) if(nObj.attr('src').indexOf('_on.gif') < 0){nObj.attr('src',nObj.attr('src').replace('.gif','_on.gif'));};
				nObj.addClass('bannerNumOn');
			}
			function off(nObj){
				if(isNumImg) if(nObj.attr('src').indexOf('_on.gif') > -1 ){nObj.attr('src',nObj.attr('src').replace('_on.gif','.gif'));};
				nObj.removeClass('bannerNumOn');
			}
			function resetNum(){
				$bannerNum.each(function(){off($(this));});
			}

			function setBanner(setup,ani){
				$setNumImg = $bannerNum.eq(setup);
				bannerMotion(setup,ani);
				on($setNumImg);
			}
			function nextBanner(){
				(bannerIndex >= amount ) ? bannerIndex = 1 : bannerIndex++;
				setBanner(bannerIndex-1,motion);
			}
			setBanner(bannerIndex-1,0);

			function autorun(){
				if(!action) return;
				nextBanner();
			}
			if(action) {
				setInterval(function(){autorun()}, params.interval);
				$bannerList.hover(function(){action = false;},function(){action = true;});
			}
		});
	}
})(jQuery);

var isie6 = false;
if (($.browser.msie) && ($.browser.version == "6.0")) isie6 = true;

function fixedPositionForIE6(type,target,length){ //type:fixedSide or fixedBottom,  length:fixedSide=topCss or  fixedBottom:objHeight 
	var viewportScroll = (document.documentElement) ? document.documentElement.scrollTop : document.body.scrollTop;	
	var viewportHeight = (document.documentElement) ? document.documentElement.clientHeight : document.body.clientHeight;
	var $holder = $(target);
	if(type == "fixedTop"){
		var objTop =  (length != null) ? length : parseInt($holder.css('top'));
	} else if( type == "fixedBottom"){
		var objHeight = (length != null) ? length : parseInt($holder.css('bottom'));
		var objTop = viewportHeight - objHeight;
	}
	return objTop + viewportScroll + "px";
}
