function copy(origin){
	var result;
	if(typeof origin == "object"){
		if(origin instanceof Array){
			result = [];
			for(i=0,len=origin.length;i<len;i++){
				result[i]=copy(origin[i]);
		}}else{
			result = {};
			for(var i in origin){
				result.i=copy(origin.i);
			}

		}
	}else{
		result = origin;
	}
	return result;
}