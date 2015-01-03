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

});