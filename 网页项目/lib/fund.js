var data = [
	{
		name : "",
		anchorHref : "",
		imageUrl : "./image/banner/1.jpg"
	},
	{
		name : "",
		anchorHref : "",
		imageUrl : "./image/banner/2.jpg"
	},
	{
		name : "",
		anchorHref : "",
		imageUrl : "./image/banner/3.jpg"
	},
	{
		name : "",
		anchorHref : "",
		imageUrl : "./image/banner/4.jpg"
	},
	{
		name : "",
		anchorHref : "",
		imageUrl : "./image/banner/5.jpg"
	}
];
$(".banner").banner({
	data : data,
	type : "slide",
	indicator : 2
});
var title = ["科技", "生活", "设计", "娱乐", "农业", "公益"];
$.ajax({
	url : "http://www.ikindness.cn/api/test/getFund"
}).done(function(data){
	var _data = data.data,
		__data,
		product,
		label,
		container,
		$container = $(".item .w1190"),
		meterWidth = 248,
		leftWidth,
		rightWidth,
		percent;
	for(var h = 0; h < 6; h++){
		__data = _data.filter(function(list, index){
			return list.type == h + 1;
		});
		product = [];
		for(var i = 0, dataLen = __data.length; i < dataLen; i++){
			label = [];
			percent = __data[i].rate/100;
			leftWidth = (percent >= 1 ? 1 : percent) * meterWidth; 
			rightWidth = meterWidth - leftWidth;
			for(var j = 0, labelLen = __data[i].label.length; j < labelLen; j++){
				label.push("<em>" + __data[i].label[j] + "</em>");
			}
			product.push(
				"<a class=\"case" + (i ? "" : " first") + "\" style=\"background-image:url(" + __data[i].image + ")\">"
				+ (i ? (
					"<p class=\"title\">" + __data[i].name + "</p>"
					+ "<p class=\"label\">"
					+ label.join(" ")
					+ "</p>"
					+ "<p class=\"meter\" style=\"border-left-width:" + leftWidth + "px;border-right-width:" + rightWidth + "px;\"></p>"
					+ "<div class=\"count\">"
					+ "<div class=\"section\">"
					+ "<p class=\"value\">" + __data[i].rate + "%</p>"
					+ "<p class=\"name\">达成率</p>"
					+ "</div>"
					+ "<div class=\"section\">"
					+ "<p class=\"value\">" + __data[i].sum + "</p>"
					+ "<p class=\"name\">已筹金额</p>"
					+ "</div>"
					+ "<div class=\"section\">"
					+ "<p class=\"value\">" + __data[i].amount + "</p>"
					+ "<p class=\"name\">支持人数</p>"
					+ "</div>"
					+ "</div>"
				) : (
					"<p class=\"title\">" + __data[i].name + "</p>"
					+ "<p class=\"sum\">已筹金额￥" + __data[i].sum + "</p>"
					+ "<span>查看项目&nbsp;&gt;</span>"
				)) + "</a>"
			);
		}
		container = "<h1>"
			+ "<a>"
			+ "<span>" + (h + 1) + "F</span>"
			+ "<b>" + title[h] + "</b>"
			+ "</a>"
			+ "</h1>"
			+ "<div class=\"container\">" + product.join(" ") + "</div>";
		$container.append(container);
	}
});