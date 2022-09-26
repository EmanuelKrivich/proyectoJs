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
                    imageAlt: 'Imagen album',
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
  

  
