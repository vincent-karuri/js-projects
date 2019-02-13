// example 1
function obj() {
	
}

obj.field_one = 1;
obj.field_two = 2;
obj.field_three = 3;
obj.mult = (num1, num2) => {
	return num1 * num2;
};	

print(obj.field_one);
print(obj.field_two);
print(obj.field_three);

print(obj.mult(3, 2));

// example 2
var obj1 = {
};	
obj1.mult = (num1, num2) => {
	return num1 * num2;
};
print(obj.mult(3, 3));


// example 3
var obj1 = {
	mult : (num1, num2) => {
		return num1 * num2;
	}
};	
print(obj.mult(4, 4));

// example 4 (must have a this.* for it to be accessible in the instance variable)
function obj2() {
	this.mult = (num1, num2) => {
		return num1 * num2;
	};	
}

print(new obj2().mult(5,5));

// example 5 (this fails, I guess mult is considered a private variable here)
function obj3() {
	mult = (num1, num2) => {
		return num1 * num2;
	};	
}

print(obj3.mult(6,6));
