function datos() {
    var clima = document.getElementById("fruta").value;
    switch (clima) {
        case "manzana":
            alert("el precio de la manzana es: $ 3.00.");
            break;
        case "pera":
            alert("el precio de la pera es: $ 3.50.");
            break;
        case "mango":
            alert("el precio del mango es: $ 4.00.");
            break;
        case "piña":
            alert("el precio de la piña es: $ 3.50.");
            break;
        case "plátano":
            alert("el precio del plátano es: $ 2.00.");
            break;
        default:
            alert("fruta desconocida.");
            break;
    }
}