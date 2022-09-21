// CLASE Y CONSTUCTOR DE OBJETOS
class Discos {
    constructor(id, artista, genero, album, año, precio, img) {
        this.id = id;
        this.artista = artista;
        this.genero = genero;
        this.album = album;
        this.año = año;
        this.precio = precio;
        this.img = img;
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
rock.push(new Discos(1, "Led Zeppelin", "Rock", "Houses of the Holy", 1973, 4200));
rock.push(new Discos(2, "Led Zeppelin", "Rock", "Physical Graffiti", 1975,  4000));
rock.push(new Discos(3, "Pink Floyd", "Rock", "The Dark Side of the Moon", 1973, 5000));
rock.push(new Discos(4, "Deep Purple", "Rock", "Machine Head", 1972, 3700));
rock.push(new Discos(5, "Van Halen", "Rock", "1984", 1984, 3500));
soul.push(new Discos(6,"Stevie Wonder", "Soul", "Innervisions", 1973, 4000));
soul.push(new Discos(7, "Lauryn Hill", "Soul", "The Miseducation of Lauryn Hill", 1998, 3200));
soul.push(new Discos(8, "Marvin gaye", "Soul", "Lets get it on", 1973, 3500, 'https://i.discogs.com/uJn0lZIHqXtVKsWZLe8VW_SKKXSx-7R-S1oZ8j91wvA/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMTk2/MzAxLTE1MTE2NTM2/MTEtMjkxMy5qcGVn.jpeg'));
soul.push(new Discos(9, "Sam Cooke", "Soul", "Mr. Soul", 1963, 4000))
jazz.push(new Discos(10, "Miles Davis", "Jazz", "Kind of Blue", 1959, 4100));
jazz.push(new Discos(11, "Jamie Cullum", "Jazz", "Twentysomething", 2003, 3200));
jazz.push(new Discos(12, "Louis Armstrong", "Jazz", "What a Wonderful World", 1967, 4000));
jazz.push(new Discos(13, "Thelonious Monk", "Jazz", "The Unique Thelonious Monk", 1956, 3800));
disco.push(new Discos(14, "Kool and the Gang", "Disco", "Celebrate!", 1980, 4200));
disco.push(new Discos(15, "Bee Gees", "Disco", "Saturday Night Fever", 1977, 4500));
disco.push(new Discos(16, "Chic", "Disco", "Cest Chic", 1978, 3800));
blues.push(new Discos(17, "B.B. King", "Blues", "Indianola Mississippi Seeds", 1970, 4200));
blues.push(new Discos(18, "Joe Cocker", "Blues", "With a Little Help from My Friends", 1969, 4500));
blues.push(new Discos(19, "Muddy Waters", "Blues", "The Muddy Waters Woodstock Album", 1975, 3800));
clasico.push(new Discos(20, "Jordi Savall", "Clasico", "The Celtic Viol", 2009, 4200));
clasico.push(new Discos(21, "Christina Pluhar", "Clasico", "La Tarantella: Antidotum Tarantulae", 2001, 4500));
clasico.push(new Discos(22, "Juan Diego Flórez", "Clasico", "Mozart", 2017, 3800));



// FUNCION PARA MOSTRAR LISTA DE DISCOS EN LUGAR DE IMAGEN
// 

const carrito = [];

const mostrarLista = (img, idBtn, idImg, tituloH5, array, seccion) => {
    img.onmousemove = () => {
        document.querySelector(idBtn).style.display = "none";
        document.querySelector(idImg).style.display = "none";

        seccion.innerHTML = `<h5>${tituloH5}</h5>`;
        array.forEach(objeto => {
            const div = document.createElement('div');
            div.innerHTML += `<li>${objeto.artista} - ${objeto.album}</li> - $${objeto.precio} - <button id="btnAgregar${objeto.id}">Agregar al carrito</button>`
            
            seccion.appendChild(div);

        
           const boton = document.getElementById(`btnAgregar${objeto.id}`);
           boton.onclick = () => {
                
                Swal.fire({
                    title: `${objeto.artista} - ${objeto.album}`,
                    text: `$${objeto.precio}`,
                    imageUrl: `${objeto.img}`,
                    imageWidth: 400,
                    imageHeight: 400,
                    imageAlt: 'Custom image',
                    confirmButtonText: 'Agregar al carrito',
                    showCancelButton: true,
                    cancelButtonText: 'Cancelar'
                  }) .then((result) => {
                    if (result.isConfirmed) {
                        const item = objeto;
                        carrito.push(item);
                      Swal.fire(
                        'Agregado al carrito!',
                        '',
                        'success'
        
                      )
                    }
                  });
           }
           


        });
        

           
       

    }
     
}

mostrarLista(imgRock, "#imgRock", "#imgRock", "Rock", rock, seccionRock);
mostrarLista(imgSoul, "#imgSoul", "#imgSoul", "Soul", soul, seccionSoul);
mostrarLista(imgJazz, "#imgJazz", "#imgJazz", "Jazz", jazz, seccionJazz);
mostrarLista(imgDisco, "#imgDisco", "#imgDisco", "Disco", disco, seccionDisco);
mostrarLista(imgBlues, "#imgBlues", "#imgBlues", "Blues", blues, seccionBlues);
mostrarLista(imgClasico, "#imgClasico", "#imgClasico", "Clasico", clasico, seccionClasico);

















// const btnAgregar = document.getElementById('btnAgregar');
            // btnAgregar.onclick = () => {
                
            //     carrito.push(objeto);
            //     console.log(carrito);
            // } 
