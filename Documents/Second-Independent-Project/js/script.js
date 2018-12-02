var side1 = prompt('Enter Side 1 of the triangle');
var side2 = prompt('Enter Side 2 of the triangle');
var side3 = prompt('Enter Side 3 of the triangle');

if (side1 === side2 && side2 === side3){
	alert("Equilateral: All sides are equall");
} else if ((side1 === side2 && side2 !== side3) || (side2 === side3 && side2 !== side1) || (side3 === side1 && side3 !== side2)) {
	alert("Isosceles: Exactly 2 sides are equal.");
} else {
	alert("Scalene: No sides are equal.");
}
