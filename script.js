
function fibonacci(num) {
	let arr=new Array();
	arr.push(0);
	arr.push(1);
	for(let i=1; i<=num-2; i++){
		arr.push(arr[i-2]+arr[i-1]);
	}
	return arr[num-1];
}
module.exports = fibonacci;
