/*
	写一个deepclone(深度克隆)的函数。 
	
	如果对象中某个值为对象类型，那么赋值的时候依然为赋址。
	
	解决：
		循环的时候，只要发现某个值为对象类型，那么继续循环这个对象类型，把对象类型中的值再赋值给另一个对象。
		
		
	[1,2,3,4,5,6]
	
	[1,3,5]
	
	[2,4,6]
	
*/

var arr = [1,2,3,4,[0,1,2],{name:'leo'},function fn(){}];	

//var arr2 = deepclone(arr);

//如果数据为纯数据：没有function(){}
var arr2 = JSON.parse(JSON.stringify(arr));

function deepclone(obj){
//		debugger; //为了调试使用的。
	var toSting = Object.prototype.toString;
	var o = obj.push?[]:{};
	for(var attr in obj){
		if(toSting.call(obj[attr]) === '[object Object]' || toSting.call(obj[attr]) === '[object Array]'){
			o[attr] = deepclone(obj[attr]);
		}else{
			o[attr] = obj[attr];
		}
	}
	return o;
}

arr2[4].push('x');
console.log(arr2);
	
//	for(var i=0;i<arr.length;i++){
//		arr2[i] = arr[i];
//	}

//	var obj = {
//		0:'a',
//		1:'b',
//		2:'c',
//		length:3
//	}
//	for(var i=0;i<obj.length;i++){
//		console.log(obj[i]);
//	}

//arr2.push(5);