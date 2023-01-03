function datos() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;
    var f = document.getElementById("f").checked;
    var m = document.getElementById("m").checked;
    var   dni= document.getElementById("DNI").value;
    var numero  = document.getElementById("número").value;
    var   ubicacion= document.getElementById("ubicación").value;

    var mensaje = "\nNombre : " + nombre +"\nApellido : " + apellido +"\nEmail : " + email +"\nFecha de nacimiento : " + date +"\nMujer : " + f +"\nHombre : " + m +"\nDNI : " +dni+"\nNúmero : " + numero +"\nUbicación : " + ubicacion;
    console.log(mensaje);   
}