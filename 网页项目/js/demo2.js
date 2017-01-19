
var a =1,
b=1;
var type = 1;
var _data;
var priceUp,
priceDown,
soldDown,
soldUp,
floorNum,
resultFloor,
result,
result1,
money;
$.ajax({
	url:"http://www.ikindness.cn/api/test/getInfo",
	data:{
		userId:34534534
	}

}).done(function(data){
	console.log(data.data.money);
	money=data.data.money;
})
$.ajax({
	url:"http://www.ikindness.cn/api/test/getProduct",
}).done(function(data){
	console.log(data);
	_data = data.data;
	console.log(_data);
	result = data.data;
	resultFloor= Math.ceil(result.length/10);
	floorNum = Math.ceil(_data.length/10);
	datapr = _data.concat(),
	datanu = _data.concat();
	setProduct(_data);
	$(".top").text(floorNum);
});
$(".sure").click(function(){
	result = setPricearea($(".from").val(),$(".to").val(),result);
	choose();
});
$(".place ul li a").click(function(){
	var thisPlace = $(this).text();
	if(b==1){
	result1 = result;
	result = setArea(thisPlace,result);
	b++;
	}else{
	result = setArea(thisPlace,result1);	
	}
	choose();
});
function choose(){
	a=1;
	$(".number").text(a);
	$(".inside").html("");
	setProduct(result);
	resultFloor = Math.ceil(result.length/10);
	$(".top").text(resultFloor);
	type = 6;
}
function setPricearea(from,to,proDuct){
	var priceArea = [];
	var _from = parseFloat(from);
	var _to = parseFloat(to);
	var _product = proDuct;
	for(var i = 0;i<_product.length;i++){
		if(_from<=parseFloat(_product[i].price)){
			if(parseFloat(_product[i].price)<_to){
			priceArea.push(_product[i]);
			}
		}
	}
	return priceArea;
};
function setArea(place,proDuct){
	var placeArea = [];
	var area = place;
	var _product = proDuct;
	for(var i = 0;i<_product.length;i++){
		var productArea = _product[i].location.substring(0,2);
		if(productArea==area){
			placeArea.push(_product[i]);
		}
	}
	return placeArea;
};
function setProduct(_data){
	var product =[];
	var finallyNum = _data.length%10;
	var	floorNum3 = Math.ceil(_data.length/10);
	finallyNum=finallyNum==0?10:finallyNum;
	var order = a-1;
	if(floorNum3>a){
	for(var i = order*10;i<order*10+10;i++){
		product.push(
			"<div class=\"inside"+ i +"\">"
			+"<a href=\"http://" + _data[i].href +"\"style=\"background-image:url(https:"+_data[i].image+")\">"
			+"<div><span>找相似</span><span>找相同</span></div>"
			+"</a>"
			+"<div>"
			+"<span>￥</span><span>"+ _data[i].price + "</span>"
			+"<img src=\"./img/baoyou.png\"/>"
			+"</div>"
			+"<a>" + _data[i].name + "</a>"
			+"<div>"
			+"<a></a><a>"+_data[i].owner+"</a><span>"+_data[i].location+"</span>"
			+"</div>"
			+"<div>" + "<img src=\"./img/jin.png\"/>"
			+"<input type=\"button\" class=\"buy\" value=\"购买\"/>"
			+"</div>"
			+"</div>"
		)
	}}else if(floorNum3==a){
		for(var i = order*10;i<order*10+finallyNum;i++){
		product.push(
			"<div class=\"inside"+ i +"\">"
			+"<a href=\"" + _data[i].href +"\"style=\"background-image:url(https:"+_data[i].image+")\">"
			+"</a>"
			+"<div>"
			+"<span>￥</span><span>"+ _data[i].price + "</span>"
			+"<img src=\"./img/baoyou.png\"/>"
			+"</div>"
			+"<a>" + _data[i].name + "</a>"
			+"<div>"
			+"<a></a><a>"+_data[i].owner+"</a><span>"+_data[i].location+"</span>"
			+"</div>"
			+"<div>" + "<img src=\"./img/jin.png\"/>"
			+"<input type=\"button\" class=\"buy\" value=\"购买\"/>"
			+"</div>"
			+"</div>"
		)
	}
	};
	var floor1 = product.join(" ");
	$(".inside").append(floor1);
};
$("body").delegate(".buy","click",function(){
	console.log($(this).parent().parent().find("div").eq(1).find("span").eq(1).text());
	var onePrice = parseFloat($(this).parent().parent().find("div").eq(1).find("span").eq(1).text());
	money = money-onePrice;
	money>0?console.log("您还有"+money+"块钱"):alert("充值能让你变得更强！！！");
});
function pricepaixu(datapr){
	for(var i = 0;i<datapr.length;i++){	
		for(var j = 0;j<datapr.length-1;j++){
		
			//升序排列
			if(parseFloat(datapr[j].price)>parseFloat(datapr[j+1].price)){
				//交换内容
				var tempNum = datapr[j];
				datapr[j] = datapr[j+1];
				datapr[j+1] = tempNum;
			}
		}
	}
	return datapr;
}
function numpaixu(datanu){
	for(var i = 0;i<datanu.length;i++){	
		for(var j = 0;j<datanu.length-1;j++){
		
			//升序排列
			if(parseFloat(datanu[j].sold)<parseFloat(datanu[j+1].sold)){
				//交换内容
				var tempNum = datanu[j];
				datanu[j] = datanu[j+1];
				datanu[j+1] = tempNum;
			}
		}
	}
	return datanu;
}
function aDown(){
	a--;
	a=a==0?resultFloor:a;
	$(".inside").html("");
	$(".number").text(a);
}
function aUp(){
	a++;
	a==resultFloor+1?a=1:a=a;
	$(".inside").html("");
	$(".number").text(a);
}
$(".next").click(function(){
	if(type==1){
		aUp();
		setProduct(result);
	}else if(type==2){
		aUp();
		setProduct(result);
	}else if(type==3){
		aUp();
		setProduct(result);
	}else if(type==4){
		aUp();
		setProduct(result);
	}else if(type==5){
		aUp();
		setProduct(result);
	}else if(type==6){
		a++;
		a==resultFloor+1?a=1:a=a;
		$(".inside").html("");
		$(".number").text(a);
		setProduct(result);
	}
});
$(".before").click(function(){
	if(type==1){
		aDown();
		setProduct(result);
	}else if(type==2){
		aDown();
		setProduct(result);
	}else if(type==3){
		aDown();
		setProduct(result);
	}else if(type==4){
		aDown();
		setProduct(result);
	}else if(type==5){
		aDown();
		setProduct(result);
	}else if(type==6){
		a--;
		a=a==0?resultFloor:a;
		console.log(resultFloor);
		$(".inside").html("");
		$(".number").text(a);
		setProduct(result);
	}
});
$(".priceUp").click(function(){
	$(".inside").html("");
	resultFloor = Math.ceil(result.length/10);
	a =1;
	$(".number").text(a);
	$(".top").text(resultFloor);
	result = pricepaixu(result);
	setProduct(result);
	type=2;
});
$(".priceDown").click(function(){
	$(".inside").html("");
	resultFloor = Math.ceil(result.length/10);
	a =1;
	$(".number").text(a);
	$(".top").text(resultFloor);
	result = pricepaixu(result).reverse();
	setProduct(result);
	type=3;
});
$(".soldUp").click(function(){
	$(".inside").html("");
	resultFloor = Math.ceil(result.length/10);
	a =1;
	$(".number").text(a);
	$(".top").text(resultFloor);
	result = numpaixu(result);
	setProduct(result);
	type=4;
});
$(".soldDown").click(function(){
	$(".inside").html("");
	resultFloor = Math.ceil(result.length/10);
	a =1;
	$(".number").text(a);
	$(".top").text(resultFloor);
	result = numpaixu(result).reverse();
	setProduct(result);
	type=5;
});