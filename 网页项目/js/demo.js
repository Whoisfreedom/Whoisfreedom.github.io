$(".a").mouseover(function(){
	$(".down").slideDown();
});
$(".a").mouseleave(function(){
	$(".down").slideUp()
});
$(".a2").mouseover(function(){
	$(".down2").slideDown();
});
$(".a2").mouseleave(function(){
	$(".down2").slideUp()
});
$.ajax({
				url : "http://www.ikindness.cn/api/test/getInfo",
				data : {
					userId : 31514112//用户id，number类型随便给
				}
			}).done(function(data){
				// var baseUrl = data.data.baseUrl;
				$.ajax({
					url : "http://www.ikindness.cn/api/test/getFund",
					data : {//不给此参数，请求一次返回所有，或者给此参数，分别请求6种type
						type : 1//与楼层大类同序
					}
				}).done(function(data){
					var _data = data.data;
					console.log(_data[1].rate);
					$(".inside1 .pag1 div").eq(0).text(_data[0].name);
					$(".inside1 .pag1 div:nth-of-type(2) span").eq(0).text(_data[0].sum);
					for(var i = 1,dataLen=_data.length;i<=dataLen;i++){
						for(var j = 0,spLen = _data[i-1].label.length;j<spLen;j++){
							$(".inside1 .pag" + i + " .pag"+ i +"-3").append("<span>"+_data[i-1].label[j]+"</span>")
						}
						$(".inside1 .pag"+ i +" img").attr("src",_data[i-1].image);
						$(".inside1 .pag" + i + " .pag"+ i +"-2 span").eq(0).text(_data[i-1].name);
						$(".inside1 .pag" + i + " .pag"+ i +"-5>span:nth-of-type(1)>span:nth-of-type(1)").eq(0).text(_data[i-1].rate+"%");
						$(".inside1 .pag" + i + " .pag"+ i +"-5>span:nth-of-type(2)>span:nth-of-type(1)").eq(0).text(_data[i-1].sum);
						$(".inside1 .pag" + i + " .pag"+ i +"-5>span:nth-of-type(3)>span:nth-of-type(1)").eq(0).text(_data[i-1].amount);
						var rat = parseInt(_data[i-1].rate);
						rat>100?$(".inside1 .pag" + i + " .pag"+ i +"-4>div").eq(0).css("left",0+"%"):$(".inside1 .pag" + i + " .pag"+ i +"-4>div").eq(0).css("left",(100-rat)+"%");
					}
				});
			});
$.ajax({
				url : "http://www.ikindness.cn/api/test/getInfo",
				data : {
					userId : 31514112//用户id，number类型随便给
				}
			}).done(function(data){
				var baseUrl = data.data.baseUrl;
				$.ajax({
					url : "http://www.ikindness.cn/api/test/getFund",
					data : {//不给此参数，请求一次返回所有，或者给此参数，分别请求6种type
						type : 2//与楼层大类同序
					}
				}).done(function(data){
					var _data = data.data;
					$(".inside2 .pag1 div").eq(0).text(_data[0].name);
					$(".inside2 .pag1 div:nth-of-type(2) span").eq(0).text(_data[0].sum);
					for(var i = 1,dataLen=_data.length;i<=dataLen;i++){
						for(var j = 0,spLen = _data[i-1].label.length;j<spLen;j++){
							$(".inside2 .pag" + i + " .pag"+ i +"-3").append("<span>"+_data[i-1].label[j]+"</span>")
						}
						$(".inside2 .pag"+ i +" img").attr("src",_data[i-1].image);
						$(".inside2 .pag" + i + " .pag"+ i +"-2 span").eq(0).text(_data[i-1].name);
						$(".inside2 .pag" + i + " .pag"+ i +"-5>span:nth-of-type(1)>span:nth-of-type(1)").eq(0).text(_data[i-1].rate+"%");
						$(".inside2 .pag" + i + " .pag"+ i +"-5>span:nth-of-type(2)>span:nth-of-type(1)").eq(0).text(_data[i-1].sum);
						$(".inside2 .pag" + i + " .pag"+ i +"-5>span:nth-of-type(3)>span:nth-of-type(1)").eq(0).text(_data[i-1].amount);
						var rat = parseInt(_data[i-1].rate);
						rat>100?$(".inside2 .pag" + i + " .pag"+ i +"-4>div").eq(0).css("left",0+"%"):$(".inside2 .pag" + i + " .pag"+ i +"-4>div").eq(0).css("left",(100-rat)+"%");
					}
				});
			});
$.ajax({
				url : "http://www.ikindness.cn/api/test/getInfo",
				data : {
					userId : 31514112//用户id，number类型随便给
				}
			}).done(function(data){
				var baseUrl = data.data.baseUrl;
				$.ajax({
					url : "http://www.ikindness.cn/api/test/getFund",
					data : {//不给此参数，请求一次返回所有，或者给此参数，分别请求6种type
						type : 3//与楼层大类同序
					}
				}).done(function(data){
					var _data = data.data;
					$(".inside3 .pag1 div").eq(0).text(_data[0].name);
					$(".inside3 .pag1 div:nth-of-type(2) span").eq(0).text(_data[0].sum);
					for(var i = 1,dataLen=_data.length;i<=dataLen;i++){
						for(var j = 0,spLen = _data[i-1].label.length;j<spLen;j++){
							$(".inside3 .pag" + i + " .pag"+ i +"-3").append("<span>"+_data[i-1].label[j]+"</span>")
						}
						$(".inside3 .pag"+ i +" img").attr("src",_data[i-1].image);
						$(".inside3 .pag" + i + " .pag"+ i +"-2 span").eq(0).text(_data[i-1].name);
						$(".inside3 .pag" + i + " .pag"+ i +"-5>span:nth-of-type(1)>span:nth-of-type(1)").eq(0).text(_data[i-1].rate+"%");
						$(".inside3 .pag" + i + " .pag"+ i +"-5>span:nth-of-type(2)>span:nth-of-type(1)").eq(0).text(_data[i-1].sum);
						$(".inside3 .pag" + i + " .pag"+ i +"-5>span:nth-of-type(3)>span:nth-of-type(1)").eq(0).text(_data[i-1].amount);
						var rat = parseInt(_data[i-1].rate);
						rat>100?$(".inside3 .pag" + i + " .pag"+ i +"-4>div").eq(0).css("left",0+"%"):$(".inside3 .pag" + i + " .pag"+ i +"-4>div").eq(0).css("left",(100-rat)+"%");
					}
				});
			});
$.ajax({
				url : "http://www.ikindness.cn/api/test/getInfo",
				data : {
					userId : 31514112//用户id，number类型随便给
				}
			}).done(function(data){
				var baseUrl = data.data.baseUrl;
				$.ajax({
					url : "http://www.ikindness.cn/api/test/getFund",
					data : {//不给此参数，请求一次返回所有，或者给此参数，分别请求6种type
						type : 4//与楼层大类同序
					}
				}).done(function(data){
					var _data = data.data;
					$(".inside4 .pag1 div").eq(0).text(_data[0].name);
					$(".inside4 .pag1 div:nth-of-type(2) span").eq(0).text(_data[0].sum);
					for(var i = 1,dataLen=_data.length;i<=dataLen;i++){
						for(var j = 0,spLen = _data[i-1].label.length;j<spLen;j++){
							$(".inside4 .pag" + i + " .pag"+ i +"-3").append("<span>"+_data[i-1].label[j]+"</span>")
						}
						$(".inside4 .pag"+ i +" img").attr("src",_data[i-1].image);
						$(".inside4 .pag" + i + " .pag"+ i +"-2 span").eq(0).text(_data[i-1].name);
						$(".inside4 .pag" + i + " .pag"+ i +"-5>span:nth-of-type(1)>span:nth-of-type(1)").eq(0).text(_data[i-1].rate+"%");
						$(".inside4 .pag" + i + " .pag"+ i +"-5>span:nth-of-type(2)>span:nth-of-type(1)").eq(0).text(_data[i-1].sum);
						$(".inside4 .pag" + i + " .pag"+ i +"-5>span:nth-of-type(3)>span:nth-of-type(1)").eq(0).text(_data[i-1].amount);
						var rat = parseInt(_data[i-1].rate);
						rat>100?$(".inside4 .pag" + i + " .pag"+ i +"-4>div").eq(0).css("left",0+"%"):$(".inside4 .pag" + i + " .pag"+ i +"-4>div").eq(0).css("left",(100-rat)+"%");
					}
				});
			});
$.ajax({
				url : "http://www.ikindness.cn/api/test/getInfo",
				data : {
					userId : 31514112//用户id，number类型随便给
				}
			}).done(function(data){
				var baseUrl = data.data.baseUrl;
				$.ajax({
					url : "http://www.ikindness.cn/api/test/getFund",
					data : {//不给此参数，请求一次返回所有，或者给此参数，分别请求6种type
						type : 5//与楼层大类同序
					}
				}).done(function(data){
					var _data = data.data;
					$(".inside5 .pag1 div").eq(0).text(_data[0].name);
					$(".inside5 .pag1 div:nth-of-type(2) span").eq(0).text(_data[0].sum);
					for(var i = 1,dataLen=_data.length;i<=dataLen;i++){
						for(var j = 0,spLen = _data[i-1].label.length;j<spLen;j++){
							$(".inside5 .pag" + i + " .pag"+ i +"-3").append("<span>"+_data[i-1].label[j]+"</span>")
						}
						$(".inside5 .pag"+ i +" img").attr("src",_data[i-1].image);
						$(".inside5 .pag" + i + " .pag"+ i +"-2 span").eq(0).text(_data[i-1].name);
						$(".inside5 .pag" + i + " .pag"+ i +"-5>span:nth-of-type(1)>span:nth-of-type(1)").eq(0).text(_data[i-1].rate+"%");
						$(".inside5 .pag" + i + " .pag"+ i +"-5>span:nth-of-type(2)>span:nth-of-type(1)").eq(0).text(_data[i-1].sum);
						$(".inside5 .pag" + i + " .pag"+ i +"-5>span:nth-of-type(3)>span:nth-of-type(1)").eq(0).text(_data[i-1].amount);
						var rat = parseInt(_data[i-1].rate);
						console.log($(".inside5 .pag" + i + " .pag"+ i +"-4>div").eq(0).css("left"));
						rat>100 ? $(".inside5 .pag" + i + " .pag"+ i +"-4>div").eq(0).css("left",0+"%"):$(".inside5 .pag" + i + " .pag"+ i +"-4>div").eq(0).css("left",rat-100+"%");
					}
				});
			});
$.ajax({
				url : "http://www.ikindness.cn/api/test/getInfo",
				data : {
					userId : 31514112//用户id，number类型随便给
				}
			}).done(function(data){
				var baseUrl = data.data.baseUrl;
				$.ajax({
					url : "http://www.ikindness.cn/api/test/getFund",
					data : {//不给此参数，请求一次返回所有，或者给此参数，分别请求6种type
						type : 6//与楼层大类同序
					}
				}).done(function(data){
					var _data = data.data;
					$(".inside6 .pag1 div").eq(0).text(_data[0].name);
					$(".inside6 .pag1 div:nth-of-type(2) span").eq(0).text(_data[0].sum);
					for(var i = 1,dataLen=_data.length;i<=dataLen;i++){
						for(var j = 0,spLen = _data[i-1].label.length;j<spLen;j++){
							$(".inside6 .pag" + i + " .pag"+ i +"-3").append("<span>"+_data[i-1].label[j]+"</span>")
						}
						$(".inside6 .pag"+ i +" img").attr("src",_data[i-1].image);
						$(".inside6 .pag" + i + " .pag"+ i +"-2 span").eq(0).text(_data[i-1].name);
						$(".inside6 .pag" + i + " .pag"+ i +"-5>span:nth-of-type(1)>span:nth-of-type(1)").eq(0).text(_data[i-1].rate+"%");
						$(".inside6 .pag" + i + " .pag"+ i +"-5>span:nth-of-type(2)>span:nth-of-type(1)").eq(0).text(_data[i-1].sum);
						$(".inside6 .pag" + i + " .pag"+ i +"-5>span:nth-of-type(3)>span:nth-of-type(1)").eq(0).text(_data[i-1].amount);
						var rat = parseInt(_data[i-1].rate);
						rat>100?$(".inside6 .pag" + i + " .pag"+ i +"-4>div").eq(0).css("left",0+"%"):$(".inside6 .pag" + i + " .pag"+ i +"-4>div").eq(0).css("left",rat-100+"%");
					}
				});
			});
