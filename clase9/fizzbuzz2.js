function FizzBuzz2(word1, word2,n) {
	var c=1;
	var phrase = "";
	while(c <= n)
	{
		if(c%3 === 0 && c%5 === 0) {
			phrase = phrase + word1+word2 + "; "
			
		}
		else {
			if (c%3 === 0) {
				phrase = phrase + word1 + "; "
				
			}
			else {
				if(c%5 === 0) {
					phrase = phrase + word2 + "; "
					
				}
				else {
					phrase = phrase + c + "; "
					
				}
			}
		}
		c++;
	}
	console.log(phrase.slice(0, phrase.length-2));
};

FizzBuzz2("chuy","tuy",100);