describe('Calculator tests', function(){

	var Calculator = require('../Calculator.js');

	it('a calculator is a valid class', function(){
		var calculator = new Calculator();
		expect(calculator).toBeTruthy();
	});

	describe('calulator property works', function(){
		var calulator = new Calculator();

		it('calcValue is defined', function(){
			expect(calulator._calcValue).toBeDefined();
		});

		it('calcValue getter works', function(){
			expect(calulator.getCalcValue()).toEqual(0);
		});

		it('calcValue setter works', function(){
			calulator.setCalcValue(2);
			expect(calulator.getCalcValue()).toEqual(2);
		});
	});

	describe('calculator functions work', function(){
		var calc = new Calculator(2);

		it('add works', function(){
			expect(calc.add(2)).toEqual(4);
		});

		it('subtract works', function(){
			expect(calc.subtract(2)).toEqual(2);
		});

		it('multiply works', function(){
			expect(calc.multiply(2)).toEqual(4);
		});

		it('divide works', function(){
			expect(calc.divide(2)).toEqual(2);
		});

		it('clears calcValue', function(){
			calc.clear();
			expect(calc.getCalcValue()).toEqual(0);
		});
	});

	describe('calculator functions are precise', function(){
		var calc = new Calculator(7);

		it('divide is precise', function(){
			expect(calc.divide(2)).toEqual(3.5);
		});

		it('add is precise', function(){
			calc.clear();
			calc.setCalcValue(2);

			expect(calc.add(2.35)).toEqual(4.35);
		});

		it('subtract is precise', function(){
			calc.clear();
			calc.setCalcValue(4);

			expect(calc.subtract(2.35)).toEqual(1.65);

		});

		it('multiply is precise', function(){
			calc.clear();
			calc.setCalcValue(2);

			expect(calc.multiply(2.45)).toEqual(4.9);
		});
	});

});

