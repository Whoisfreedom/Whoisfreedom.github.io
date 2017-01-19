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
					console.log(_data);
					for(var i = 1,dataLen=_data.length;i<=dataLen;i++){
						console.log("src",_data[i-1].image)
						console.log($(".inside1 .pag"+ i +" img"))
						$(".inside1 .pag"+ i +" img").attr("src",_data[i-1].image)
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
					console.log(_data);
					for(var i = 1,dataLen=_data.length;i<=dataLen;i++){
						console.log("src",_data[i-1].image)
						console.log($(".inside1 .pag"+ i +" img"))
						$(".inside2 .pag"+ i +" img").attr("src",_data[i-1].image)
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
					console.log(_data);
					for(var i = 1,dataLen=_data.length;i<=dataLen;i++){
						console.log("src",_data[i-1].image)
						console.log($(".inside1 .pag"+ i +" img"))
						$(".inside3 .pag"+ i +" img").attr("src",_data[i-1].image)
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
					console.log(_data);
					for(var i = 1,dataLen=_data.length;i<=dataLen;i++){
						console.log("src",_data[i-1].image)
						console.log($(".inside1 .pag"+ i +" img"))
						$(".inside4 .pag"+ i +" img").attr("src",_data[i-1].image)
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
					console.log(_data);
					for(var i = 1,dataLen=_data.length;i<=dataLen;i++){
						console.log("src",_data[i-1].image)
						console.log($(".inside1 .pag"+ i +" img"))
						$(".inside5 .pag"+ i +" img").attr("src",_data[i-1].image)
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
					console.log(_data);
					for(var i = 1,dataLen=_data.length;i<=dataLen;i++){
						console.log("src",_data[i-1].image)
						console.log($(".inside1 .pag"+ i +" img"))
						$(".inside6 .pag"+ i +" img").attr("src",_data[i-1].image)
					}
				});
			});
