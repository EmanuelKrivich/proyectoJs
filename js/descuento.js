

Toastify({

    text: "¡25% en discos de Soul!",
    duration: 5000,
    offset: {
        y: 100
    },
    
    onClick: () => {

        const { value: discoOferta } = Swal.fire({
            title: 'Seleccione uno de los siguientes discos',
            input: 'select',
            inputOptions: {
              'Soul': {
                stevieWonder: `${soul[0].artista} - ${soul[0].album} - ${soul[0].precio}`,
                laurynHill: `${soul[1].artista} - ${soul[1].album} - ${soul[1].precio}`,
                marvinGaye: `${soul[2].artista} - ${soul[2].album} - ${soul[2].precio}`,
                samCooke: `${soul[3].artista} - ${soul[3].album} - ${soul[3].precio}`
              },
            },
            inputPlaceholder: 'Seleccione un disco',
            showCancelButton: true,
            inputValidator: (value) => {
              return new Promise((resolve) => {
                if (value != '') { 
                  Swal.fire(
                    'Agregado al carrito!',
                    '',
                    'success'
                  )
                  resolve()
                } else {
                  resolve('Seleccione un disco')
                }
              })
            }
          })
          
        
          
    }

    }).showToast();







