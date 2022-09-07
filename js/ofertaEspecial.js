
Toastify({

    text: "¡Histórico de la semana!",
    duration: 5000,
    offset: {
        y: 100
    },
    
    onClick: () => {
        Swal.fire({
            title: 'Michael Jackson - Thriller',
            text: '$3000',
            imageUrl: 'https://m.media-amazon.com/images/I/51vnfQPXskL.jpg',
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: 'Custom image',
            confirmButtonText: 'Agregar al carrito',
            showCancelButton: true,
            cancelButtonText: 'Cancelar'
          }) .then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Agregado al carrito!',
                '',
                'success'

              )
            }
          })
        
    }

}).showToast();


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

