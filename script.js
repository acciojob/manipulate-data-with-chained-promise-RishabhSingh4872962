//your JS code here. If required.
function arr() {
	return new Promise((resolve,reject)=>{
		setTimeout(resolve,3000,[1,2,3,4])
	})
} 
arr().then((val)=>{
	console.log(val);
	return val
}).then((val)=>{
	return new Promise((res,rej)=>{
		setTimeout(res,1000,val.filter((ele)=>ele%2==0))
	})
}).then((val)=>{
	setTimeout(()=>{
		console.log(val.map((ele)=>ele*2))
	},2000)
})