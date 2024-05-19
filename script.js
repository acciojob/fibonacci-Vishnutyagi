function fabb(n) {
	if(n==0) return 0;
	if(n==1||n==2) return 1;
	return fabb(n-1)+fabb(n-2);
}
function fibonacci(num) {
	return fabb(num);
}

module.exports = fibonacci;
