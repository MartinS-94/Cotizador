function convertir(){
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    const dolar = 104.25;
    const dolarBlue = 211;
    const euro = 118.47;
    const real = 19.95;
    const pesoChileno = 801.75;
    const sol = 3.87;

if (document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("El cambio de Peso argentino a Dolar es: $" + resultado.toFixed(2));
        console.log("------Nueva cotizacion------")
        console.log("$" + valore + " pesos argentinos es igual a " + "$" + resultado.toFixed(2) + " dolares oficiales.");
    }

    else if (document.getElementById("dos").checked){
        resultado = valore / dolarBlue;
        alert("El cambio de Peso argentino a Dolar Blue es: $" + resultado.toFixed(2));
        console.log("------Nueva cotizacion------")
        console.log("$" + valore + " pesos argentinos es igual a " + "$" + resultado.toFixed(2) + " dolares a cambio blue.");
    }

    else if (document.getElementById("tres").checked){
        resultado = valore / euro;
        alert("El cambio de Peso argentino a Euro es: $" + resultado.toFixed(2));
        console.log("------Nueva cotizacion------")
        console.log("$" + valore + " pesos argentinos es igual a " + "$" + resultado.toFixed(2) + " euros.");
    }

    else if (document.getElementById("cuatro").checked){
        resultado = valore / real;
        alert("El cambio de Peso argentino a Real es: $" + resultado.toFixed(2));
        console.log("------Nueva cotizacion------")
        console.log("$" + valore + " pesos argentinos es igual a " + "$" + resultado.toFixed(2) + " reales.");
    }

    else if (document.getElementById("cinco").checked){
        resultado = valore / pesoChileno;
        alert("El cambio de Peso argentino a Peso Chileno es: $" + resultado.toFixed(2));
        console.log("------Nueva cotizacion------")
        console.log("$" + valore + " pesos argentinos es igual a " + "$" + resultado.toFixed(2) + " pesos chilenos.");
    }

    else if (document.getElementById("seis").checked){
        resultado = valore / sol;
        alert("El cambio de Peso argentino a Soles es: $" + resultado.toFixed(2));
        console.log("------Nueva cotizacion------")
        console.log("$" + valore + " pesos argentinos es igual a " + "$" + resultado.toFixed(2) + " soles.");
    }

    else {
        alert("Tienes que ingresar un monto en Pesos Argentinos para realizar la conversión");
    }
}
