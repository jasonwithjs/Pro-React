/** * Created by kw on 17/7/4. */function Stack() {	var items = [];	this.push = function (element) {		items.push(element);	}	this.pop = function () {		return items.pop();	};	this.peek = function () {		console.log("The last item is: " + items[items.length - 1] + " !");	};	this.isEmpty = function () {		return items.length === 0;	}	this.size = function () {		return items.length;	};	this.clear = function () {		return items = [];	};	this.print = function () {		console.log(items.toString());	};}function baseConverter(decNumber,base) {	var remStack = new Stack(),		rem,		binaryString = '';	while (decNumber > 0) {		rem = Math.floor(decNumber % base);		remStack.push(rem);		console.log(rem);		decNumber = Math.floor(decNumber / base);	}	while (!remStack.isEmpty()){		binaryString += remStack.pop().toString();	}	return binaryString;}console.log(baseConverter(233123,2));