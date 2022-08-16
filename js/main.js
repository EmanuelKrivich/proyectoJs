// CLASE Y CONSTUCTOR DE OBJETOS
class Discos {
    constructor(artista, genero, disco, precio) {
        this.artista = artista;
        this.genero = genero;
        this.disco = disco;
        this.precio = precio;
    }
}

// // CREACION DE ARRAYS
const rock = [];
const soul = [];
const jazz = [];

// CREACION DE OBJETOS Y METODO PUSH PARA INCORPORAR OBJETOS A LOS ARRAY
rock.push(new Discos("Led Zeppelin", "Rock", "Houses of the Holy", 4200));
rock.push(new Discos("Led Zeppelin", "Rock", "Physical Graffiti", 4000));
rock.push(new Discos("Pink Floyd", "Rock", "The Dark Side of the Moon", 5000));
rock.push(new Discos("Deep Purple", "Rock", "Machine Head", 3700));
rock.push(new Discos("Van Halen", "Rock", "1984", 3500));


soul.push(new Discos("Stevie Wonder", "Soul", "Innervisions", 4000));
soul.push(new Discos("Lauryn Hill", "Soul", "The Miseducation of Lauryn Hill", 3200));
soul.push(new Discos("Marvin gaye", "Soul", "Lets get it on", 3500));
soul.push(new Discos("Sam Cooke", "Soul", "Mr. Soul", 4000))

jazz.push(new Discos("Miles Davis", "Jazz", "Kind of Blue", 4100));
jazz.push(new Discos("Jamie Cullum", "Jazz", "Twentysomething", 3200));
jazz.push(new Discos("Louis Armstrong", "Jazz", "What a Wonderful World", 4000));
jazz.push(new Discos("Thelonious Monk", "Jazz", "The Unique Thelonious Monk", 3800));


// FUNCION PARA REALIZAR DESCUENTO AL PRECIO
function descuento() {
    let precioDescontado = (valor - ((valor * 25) / 100));
    alert("Con el descuento usted abonará: $" + precioDescontado);
}



// SELECCION DE GENERO MUSICAL
let bienvenida = prompt("¡Bienvendo a DeVinilo! Elija un género musical entre Rock, Soul o Jazz, o presione s para recibir una oferta limitada. Presione n para salir.");

while ((bienvenida != "s") && (bienvenida != "n")) {
    if ((bienvenida == "Rock") || (bienvenida == "rock")) {
        let filtroGenero = rock.filter((elemento) => elemento.genero == "Rock");
        console.log(filtroGenero);
        break;

    } else if ((bienvenida == "Soul") || (bienvenida == "soul")) {
        let filtroGenero = soul.filter((elemento) => elemento.genero == "Soul");
        console.log(filtroGenero);
        break;

    } else if ((bienvenida == "Jazz") || (bienvenida == "jazz")) {
        let filtroGenero = jazz.filter((elemento) => elemento.genero == "Jazz");
        console.log(filtroGenero);
        break;
        
    } else {
        alert("Ingrese un género válido");
        bienvenida = prompt("Vuelva a ingresar un género entre Rock, Soul o Jazz, o presione s para recibir una oferta limitada. Presione n para salir.")
    }
}


// SELECCION DE DISCO EN OFERTA
while (bienvenida == "s") {
    let discoSeleccionado = parseInt(prompt("Puede adquirir uno de estos discos con un 25% de descuento! Seleccione presionando 1,2,3 o 4: " + "\n1-" + rock[0].artista + "-" + rock[0].disco + "\n2-" + rock[1].artista + "-" + rock[1].disco + "\n3-" + rock[2].artista + "-" + rock[2].disco + "\n4-" + soul[0].artista + "-" + soul[0].disco));
    switch (discoSeleccionado) {
        case 1:
            alert("Usted seleccionó " + rock[0].artista + "-" + rock[0].disco + ": $" + rock[0].precio);
            valor = rock[0].precio;
            descuento();
            break;
        case 2:
            alert("Usted seleccionó " + rock[1].artista + "-" + rock[1].disco + ": $" + rock[1].precio);
            valor = rock[1].precio;
            descuento();
            break;
        case 3:
            alert("Usted seleccionó " + rock[2].artista + "-" + rock[2].disco + ": $" + rock[2].precio);
            valor = rock[2].precio;
            descuento();
            break;
        case 4:
            alert("Usted seleccionó " + soul[0].artista + "-" + soul[0].disco + ": $" + soul[0].precio);
            valor = soul[0].precio;
            descuento();
            break;
        default:
            alert("Ingrese un número válido");

    }
    bienvenida = prompt("Si desea seleccionar otro disco presione s, si desea salir presione n");


}

function mostrarDiscosDeRock() {
    let filtroGenero = rock.filter((elemento) => elemento.genero == "Rock");
    console.log(filtroGenero);


    listadoLI = document.getElementById('listadoRock');

    document.querySelector('.generos').style.display = "none";

    
}

retornarNodoLI() {
    let nodo = document.createElement('li');
    nodo.innerText = `${this.nombre} -- ${this.ayuda}`;
    return nodo;
}