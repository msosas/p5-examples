var num = 123456;
var inverted = [];

num = num.toString();

num = num.split("");

for (var i = num.length-1; i >= 0; i--) {
	inverted.push(num[i]);
}

inverted = inverted.join('');
parseInt(inverted);

console.log(num);

console.log(inverted);


