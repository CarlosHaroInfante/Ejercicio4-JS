/**
 * 
 */

 let arrayDef = ["David", 19, "Guille", 33, "Carlos", 20];
 
 let num = prompt("Dame un número entre el 0 y el 5")
 
 if(arrayDef.length > num){
	 
	
	document.write(arrayDef[num]);
	
	 
 }
 else{
	 
	 
	 document.write("Esta fuera del rango permitido");
 }