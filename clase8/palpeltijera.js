var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

var word = "";

//while(word !== "P" && word !== "Pa" && word !== "T") { 
	for (var i=0; i < 2; i++) {
		word += letters.charAt(Math.floor(Math.random() * 10));
		console.log(word + "\n");
	}
//}


