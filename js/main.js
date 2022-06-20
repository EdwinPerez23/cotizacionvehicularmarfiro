var primaNeta;
var superCompania;
var seguroCampesino;
var derechoEmision;
var subtotal;
var iva12;
var primaTotal;

function calcular(){
    // Obtengo datos ingresados por el usuario
    let valorComercial = document.getElementById("valor_comercial").value;
    let tasa = document.getElementById("tasa").value;

    primaNeta = parseFloat( ((valorComercial * tasa)/100).toFixed(2) );
    console.log("Prima neta: "+primaNeta);

    superCompania = parseFloat( ((primaNeta * 3.5)/100).toFixed(2) );
    console.log("Superintendencia de Compañías: "+superCompania);

    seguroCampesino = parseFloat( ((primaNeta * 0.5)/100).toFixed(2) );
    console.log("Seguro Campesino: "+seguroCampesino);

    calcularDerechoEmision();

    subtotal = primaNeta + superCompania + seguroCampesino + derechoEmision;
    console.log("Subtotal: "+subtotal);

    iva12 = parseFloat( ((subtotal * 12)/100).toFixed(2) );
    console.log("Iva: "+iva12);

    primaTotal = (subtotal + iva12).toFixed(2);
    console.log("Prima total: "+primaTotal);

    imprimirTotales();
}

function calcularDerechoEmision (){
    if (primaNeta >= 0 && primaNeta <= 250)
    {
        derechoEmision = 0.5;
    }
    else if (primaNeta >= 250.01 && primaNeta <= 500)
    {
        derechoEmision = 1;
    }
    else if (primaNeta >= 500.01 && primaNeta <= 1000)
    {
        derechoEmision = 3;
    }
    else if (primaNeta >= 1000.01 && primaNeta <= 2000)
    {
        derechoEmision = 5;
    }
    else if (primaNeta >= 2000.01 && primaNeta <= 4000)
    {
        derechoEmision = 7;
    }
    else if (primaNeta >= 4000.01)
    {
        derechoEmision = 9;
    }
    console.log("Derecho de emisión: "+derechoEmision);
}

function imprimirTotales (){
    document.getElementById("resultadoPrimaNeta").innerHTML = "$ "+primaNeta;
    document.getElementById("resultadoPrimaTotal").innerHTML = "$ "+primaTotal;
}

