function fibo(n) {
	var a=0;
	var b=1;
	var c=0;

	var i=0;

	for (var i = 0; i < n-1; i++) {

	  a=a+b
	  b=c
	  c=a
	}

	console.log(a)
}



fibo(10);