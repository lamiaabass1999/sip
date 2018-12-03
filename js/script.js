function triangles (){
	var a = parseInt(document.getElementById('avalue').value);
	var b = parseInt(document.getElementById('bvalue').value);
	var c = parseInt(document.getElementById('cvalue').value);

	if (a === b && b === c){
		alert("Equilateral: All sides are equall");
	} else if ((a === b && b !== c) || (b === c && b !== a) || (c === a && c !== b)) {
		alert("Isosceles: Exactly 2 sides are equal.");
	} else
		alert("Scalene: No sides are equal.");
	}
