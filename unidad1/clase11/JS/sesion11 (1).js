function datos() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;
    var f = document.getElementById("f").checked;
    var m = document.getElementById("m").checked;
    var estatura = document.getElementById("estatura").value;
    var peso = document.getElementById("peso").value;
    var deporte = document.getElementById("deporte").checked;

    var mensaje = "Nombre : " + nombre +"\nApellido : " + apellido +"\nEmail : " + email +"\nFecha de nacimiento : " + date +"\nMujer : " + f +"\nHombre : " + m +"\nEstatura : " + estatura +"\npeso : " + peso +"\n¿Haces deporte? : " + deporte;
    console.log(mensaje);   
    var resultado=peso/estatura**2;
    var obesidad=resultado<=30;
    var mensaje="\nResultado: " + resultado +"\nObesidad: " + obesidad;
    alert(mensaje)
}