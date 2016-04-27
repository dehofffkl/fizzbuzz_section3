var fb = require ('../fizzbuzz');

describe("A program that plays fizzbuzz", function() {

	it("counts from 1 to 6 and make appropriate substitutions", function() {
		expect(fb.count(1,6)).toBe("1 2 fizz 4 buzz fizz");
		expect(fb.count(10,15)).toBe("buzz 11 fizz 13 14 fizzbuzz");
	});

	it ("can take a number and return 'fizz' for multiple of 3 and the number otherwise".
		expect(fb.fizzer(3)).toBe('fizz');
		expect(fb.fizzer(5)).toBe(5);
		expect(fb.fizzer(17).toBe(17);
	});

	it ("can take multiples of 3 and return 'fizz'", function () 
		expect(fb.fizzer(3)).toBe('fizz');
		expect(fb.fizzer(33)).toBe(5);
		expect(fb.fizzer(17)).toBe(17);

	});

	it("can take a number and return 'buzz' for multiple of 5 and the number otherwise").
	expect(fb.fizzer(15)).toBe('fizzbuzz');
	expect(fb.fizzer(31)).toBe(31);
	expect(fb.fizzer(7)).toBe(7);
	});
