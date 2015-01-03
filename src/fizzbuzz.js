function FizzBuzz () {};

FizzBuzz.prototype.isDivisibleByThree = function(number) {
	return number % 3 == 0
};

FizzBuzz.prototype.isDivisibleByFive = function(number) {
	return number % 5 == 0
};

FizzBuzz.prototype.isDivisibleByFifteen = function(number) {
	return number % 15 == 0
};

FizzBuzz.prototype.say = function(number) {
	if(this.isDivisibleByFifteen(number)) return "FizzBuzz"
	if(this.isDivisibleByThree(number)) return "Fizz"
	if(this.isDivisibleByFive(number)) return "Buzz"
	return number
};