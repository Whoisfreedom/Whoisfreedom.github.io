var data = {
	setting:[{imageUrl:"./img/banner/1.jpg"},
			{imageUrl:"./img/banner/2.jpg"},
			{imageUrl:"./img/banner/3.jpg"},
			{imageUrl:"./img/banner/4.jpg"},
			{imageUrl:"./img/banner/5.jpg"},],
	type:"slide",
	indicator:2
}
console.log(data.setting);
$.fn.extend({
	banner : function(option){
		var animateType = "_" + option.type;
		this._data = option.setting;
		this._dataLen = option.setting.length;
		this._index = 0;
		this._indicatorType = option.indicator;
		this[animateType] && this[animateType](this);
	},
	_tab : function($banner){
		$banner.addClass("tab")._init(function(index){
			$($banner.selector + " a").eq(index).addClass("current").siblings().removeClass("current");
		});
		console.log($banner.selector)

	},
	_fade : function($banner){
		$banner.addClass("fade")._init(function(index){
			$($banner.selector + " a").eq(index).fadeIn().siblings("a").fadeOut();
		});
	},
	_slide : function($banner){
		$banner.addClass("slide")._init(function(index, _prevIndex){
			var width = $banner.width(),
				dataLen = $banner._dataLen,
				prevIndex = _prevIndex || (index - 1 >= 0 ? index - 1 : dataLen - index - 1),
				nextIndx = index + 1 >= dataLen ? dataLen - index - 1: index + 1;
			$($banner.selector + " a").eq(index).css("left", width + "px").animate({
				left : 0
			});
			$($banner.selector + " a").eq(prevIndex).animate({
				left : - width + "px"
			});
			typeof _prevIndex === "number" || $($banner.selector + " a").eq(nextIndx).css("left" , width + "px");
		});	
	},
	_init : function(setAction){
		var $banner = this,
			dataLen = $banner._dataLen,
			prevIndex;
		$banner._createDOM().delegate(".indicator em", "click", function(){
			prevIndex = $banner._index;
			$banner._index = $(this).index();
			$banner._changeMovement(setAction, prevIndex);
		})._autoChange(setAction);
	},
	_createImage : function(){
		var $banner = this,
			data = $banner._data,
			dataLen = $banner._dataLen,
			i;
		for(i = 0; i < dataLen; i++){
			$banner.append("<a class=\"" + (i  ? "" : "current") + "\" title=" + data[i].name + " href=" + data[i].anchorHref + " style=\"background-image:url(" + data[i].imageUrl + ")\"></a>");
		}
	},
	_createIndicator : function(type){
		var $indicator = $("<div class=\"indicator theme" + type + "\"></div>");
		var $banner = this,
			data = $banner._data,
			dataLen = $banner._dataLen,
			i;
		for(i = 1; i <= dataLen; i++){
			$indicator.append("<em class=\"" + (i >> 1 ? "" : "current") + "\">" + (type >> 1 ? ""  : i) + "</em>")
		}
		$banner.append($indicator);
	},
	_createDOM : function(){
		var indicatorType = this._indicatorType;
		this._createImage();
		indicatorType && this._createIndicator(indicatorType);
		return this;
	},
	_setIndex : function(index, setAction){
		var $banner = this,
			dataLen = $banner.dataLen;
		this._index = index;
		this._changeMovement(setAction);
	},
	_changeMovement : function(setAction, prevIndex){
		setAction(this._index, prevIndex);
		$(this.selector + " .indicator em").eq(this._index).addClass("current").siblings().removeClass("current");
	},
	_autoChange : function(setAction){
		var $banner = this,
			dataLen = $banner._dataLen;
		setTimeout(function(){
			function change(){
				var currentIndex = $banner._index + 1 >= dataLen ? 0 : $banner._index + 1;
				$banner._setIndex(currentIndex, setAction);
				setTimeout(function(){
					change();
				}, 4000);
			}
			change();
		}, 2400);
	}
});
$(".banner").banner(data);