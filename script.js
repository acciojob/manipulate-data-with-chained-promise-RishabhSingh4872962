//your JS code here. If required.
const output=document.getElementById("output");
function arr() {
	return new Promise((resolve,reject)=>{ 
		setTimeout(resolve,3000,[1,2,3,4])
	})
} 
arr().then((val)=>{
	return new Promise((res,rej)=>{
		setTimeout(res,1000,val.filter((ele)=>ele%2==0))
	})
}).then((val)=>{
	output.innerText=val.join(" ")
	setTimeout(()=>{
		output.innerText=(val.map((ele)=>ele*2)).join(" ");
	},2000)
})