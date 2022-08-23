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
const disco = [];
const blues = [];
const clasico = [];

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
disco.push(new Discos("Kool and the Gang", "Disco", "Celebrate!", 4200));
disco.push(new Discos("Bee Gees", "Disco", "Saturday Night Fever", 4500));
disco.push(new Discos("Chic", "Disco", "Cest Chic", 3800));
blues.push(new Discos("B.B. King", "Blues", "Indianola Mississippi Seeds", 4200));
blues.push(new Discos("Joe Cocker", "Blues", "With a Little Help from My Friends", 4500));
blues.push(new Discos("Muddy Waters", "Blues", "The Muddy Waters Woodstock Album", 3800));
clasico.push(new Discos("Jordi Savall", "Clasico", "The Celtic Viol", 4200));
clasico.push(new Discos("Christina Pluhar", "Clasico", "La Tarantella: Antidotum Tarantulae", 4500));
clasico.push(new Discos("Juan Diego Flórez", "Clasico", "Mozart", 3800));


let btnRock = document.getElementById('btnRock');
let btnJazz = document.getElementById('btnJazz');
let btnBlues = document.getElementById('btnBlues');
let btnSoul = document.getElementById('btnSoul');
let btnDisco = document.getElementById('btnDisco');
let btnClasico = document.getElementById('btnClasico');


const mostrarLista = (btn, idBtn, idImg, tituloH5, array) => {
    btn.onclick = () => {
        document.querySelector(idBtn).style.display = "none";
        document.querySelector(idImg).style.display = "none";

        let h5 = document.createElement("h5");
        h5.innerHTML = tituloH5;
        document.body.appendChild(h5);

        let ul = document.createElement("ul");
        ul.innerHTML = '';
        document.body.appendChild(ul);

        for (index = 0; index < rock.length; index++) {
            ul.innerHTML += `<li>${array[index].artista} - ${array[index].disco}</li>`;
            document.body.appendChild(ul);
        }
    }
}

mostrarLista(btnRock, "#btnRock", "#imgRock", "Rock", rock);
mostrarLista(btnSoul, "#btnSoul", "#imgSoul", "Soul", soul);
mostrarLista(btnJazz, "#btnJazz", "#imgJazz", "Jazz", jazz);
mostrarLista(btnDisco, "#btnDisco", "#imgDisco", "Disco", disco);
mostrarLista(btnBlues, "#btnBlues", "#imgBlues", "Blues", blues);
mostrarLista(btnClasico, "#btnClasico", "#imgClasico", "Clasico", clasico);



