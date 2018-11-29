define([""],function(){
	return{
		randomColor(){
			var R = randomInt(0,255);
			var G = randomInt(0,255);
			var B = randomInt(0,255);
			return "rgb("+R+","+G+","+B+")";
		},
		//限定一个数字的大小范围
		section(val, min, max) {
			return Math.max(min, Math.min(max, val));
		},
		randomInt(min, max){
			return Math.floor(Math.random()*(max-min)) + min;
		},
		addEventHandler(ele, eventType, fn, isCapture){
			if(ele.addEventListener) {
				ele.addEventListener(eventType, fn, isCapture);
			} else {
				ele.attachEvent("on"+eventType, fn);
			}
		}
	};
})


