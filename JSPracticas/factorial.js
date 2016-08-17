function factorial(n){
	assert.ok(1==(n-1), "Passed factorial!.");
}
QUnit.test("Prueba funcion factorial", function(assert){
	assert.equal(factorial(2), 1, "Aprobado");
});