//배열 확장(remove, insert)
Array.prototype.insert = function(index, value) {

	if (value instanceof Array) {
		// this.splice(index, 0, v1,v2,v3,v4);
//		var _this = this;
		value.forEach(function(element) {
//			_this.splice(index++, 0, element);
			this.splice(index++, 0, element); // this가 window를 가리킴
			
		}.bind(this)); // 밖에 스코프에서의 this를 묶어서 내부 스코프로 넣어서 사용한다. 
					   // 여기서는 forEach문 안에있는 this 밖에있는 this로 대체해서 사용. 
	} else {
		this.splice(index, 0, value);
	}

}

Array.prototype.remove = function(index) {
	this.splice(index, 1);
}