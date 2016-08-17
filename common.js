function myFunction() {
    document.getElementById("demo").style.color = "red";
}

function validaNombre(){
    var nomValido = document.getElementById("demo1").value;
	alert(nomValido);
	document.getElementById("demo").style.color = "black";
}


function muestraNombre() {
    alert(document.getElementById("demo2").value);
}