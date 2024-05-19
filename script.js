
function fibonacci(num) {
	let arr=new Array(num);
	arr[0]=0;
	arr[1]=1;
	for(let i=2; i<num; i++){
		arr[i]=(arr[i-2]+arr[i-1]);
	}
	return arr[num-1];
}
module.exports = fibonacci;
