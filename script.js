function makeid(l) {
let ans = ""
	while(l != 0){
	  let n = Math.floor(Math.random() * 3)
	  if(n == 0){
	    ans += String.fromCharCode((Math.floor(Math.random() * 26)) + 97) //lowercase
	  }
	  else if(n == 1){
		  ans += Math.floor(Math.random() * 10) //digit
	  }
	  else if(n == 2){
		  ans += String.fromCharCode((Math.floor(Math.random() * 26)) + 65) //uppercase
	  }
		l--
	}
	return ans
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
