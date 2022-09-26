

Toastify({

    text: "¡Histórico de la semana!",
    duration: 5000,
    offset: {
        y: 100
    },
    
    onClick: () => {
        Swal.fire({
            title: `${productos[11].artista} - ${productos[11].album}`,
            text: `$${productos[11].precio}`,
            imageUrl: 'https://m.media-amazon.com/images/I/51vnfQPXskL.jpg',
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: 'Custom image',
            confirmButtonText: 'Agregar al carrito',
            showCancelButton: true,
            cancelButtonText: 'Cancelar'
          }) .then((result) => {
            if (result.isConfirmed) {
              const item = productos[11];
              carrito.push(item);
              Swal.fire(
                'Agregado al carrito!',
                '',
                'success'

              )
            }
          })
        
    }

}).showToast();

let btnUno = document.getElementById('btnUno');
let btnDos = document.getElementById('btnDos');
let btnTres = document.getElementById('btnTres');
let btnCuatro = document.getElementById('btnCuatro');
let btnCinco = document.getElementById('btnCinco');
let btnSeis = document.getElementById('btnSeis');




const mostrarInfoAlbum = (btn, objeto) => {
    btn.onclick = () => {
      fetch('/data.json')
        .then(response => response.json())
        .then(data => {
              Swal.fire(
                `${data[objeto].artista} - ${data[objeto].album} - ${data[objeto].año}`,
                `${data[objeto].info}`
                
              );
            
        })
      
    }
}


mostrarInfoAlbum(btnUno, 0);
mostrarInfoAlbum(btnDos, 1);
mostrarInfoAlbum(btnTres, 2);
mostrarInfoAlbum(btnCuatro, 3);
mostrarInfoAlbum(btnCinco, 4);
mostrarInfoAlbum(btnSeis, 5);


const mostrarListaCanciones = (img,idImg,array,seccion) => {
    img.onmousemove = () => {
        document.querySelector(idImg).style.display = "none";

        fetch('/dataAlbum.json')
        .then(response => response.json())
        .then(data => {
            data[array].forEach(elemento => {
                seccion.innerHTML += `<li>${elemento}</li>`
            });
        })
    }
}

mostrarListaCanciones(imgUno,"#imgUno",0,seccionUno);
mostrarListaCanciones(imgDos,"#imgDos",1,seccionDos);
mostrarListaCanciones(imgTres,"#imgTres",2,seccionTres);
mostrarListaCanciones(imgCuatro,"#imgCuatro",3,seccionCuatro);
mostrarListaCanciones(imgCinco,"#imgCinco",4,seccionCinco);
mostrarListaCanciones(imgSeis,"#imgSeis",5,seccionSeis);

