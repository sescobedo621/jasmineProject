function Calculator(calcValue){
	this._calcValue = calcValue || 0;

}

Calculator.prototype.getCalcValue = function(){
	return this._calcValue;
}

Calculator.prototype.setCalcValue = function(num){
	this._calcValue = num;
}

Calculator.prototype.add = function(num){
	this._calcValue += num;
	return this._calcValue;
}

Calculator.prototype.subtract = function(num){
	this._calcValue -= num;
	return this._calcValue;
}

Calculator.prototype.multiply = function(num){
	this._calcValue *= num;
	return this._calcValue;
}

Calculator.prototype.divide = function(num){
	this._calcValue /= num;
	return this._calcValue;
}

Calculator.prototype.clear = function(){
	this.setCalcValue(0);
}

module.exports = Calculator;