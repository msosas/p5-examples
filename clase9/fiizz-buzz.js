var c=1;
while(c <= 100)
{
	if(c%3 === 0 && c%5 === 0) {
		console.log("FizzBuzz");
	}
	else {
		if (c%3 === 0) {
			console.log("Fizz");
		}
		else {
			if(c%5 === 0) {
				console.log("Buzz");
			}
			else {
				console.log(c);
			}
		}
	}
	c++;
}