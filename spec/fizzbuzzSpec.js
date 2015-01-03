describe ("FizzBuzz", function(){

	beforeEach(function(){
		fizz = new FizzBuzz;
	});

	it("Should know when a number is divisible by three", function(){
		expect(fizz.isDivisibleByThree(3)).toBe(true)
	});

	it("Should know when a number isn't divisible by three", function(){
		expect(fizz.isDivisibleByThree(1)).toBe(false)
	});

	it("Should know when a number is divisible by five", function(){
		expect(fizz.isDivisibleByFive(5)).toBe(true)
	});

	it("Should know when a number isn't divisible by five", function(){
		expect(fizz.isDivisibleByFive(1)).toBe(false)
	});

	it("Should know when a number is divisible by fifteen", function(){
		expect(fizz.isDivisibleByFifteen(15)).toBe(true)
	});

	it("Should know when a number isn't divisible by fifteen", function(){
		expect(fizz.isDivisibleByFifteen(1)).toBe(false)
	});

	it("Should say 'Fizz' if divisible by 3", function(){
		expect(fizz.say(3)).toBe("Fizz")
	});

});