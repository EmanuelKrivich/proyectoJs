

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









// FUNCION PARA REALIZAR DESCUENTO AL PRECIO
// function descuento() {
//     let precioDescontado = (valor - ((valor * 25) / 100));
// }



// // SELECCION DE DISCO EN OFERTA
// while (bienvenida == "s") {
//     let discoSeleccionado = parseInt(prompt("Puede adquirir uno de estos discos con un 25% de descuento! Seleccione presionando 1,2,3 o 4: " + "\n1-" + rock[0].artista + "-" + rock[0].disco + "\n2-" + rock[1].artista + "-" + rock[1].disco + "\n3-" + rock[2].artista + "-" + rock[2].disco + "\n4-" + soul[0].artista + "-" + soul[0].disco));
//     switch (discoSeleccionado) {
//         case 1:
//             alert("Usted seleccionó " + rock[0].artista + "-" + rock[0].disco + ": $" + rock[0].precio);
//             valor = rock[0].precio;
//             descuento();
//             break;
//         case 2:
//             alert("Usted seleccionó " + rock[1].artista + "-" + rock[1].disco + ": $" + rock[1].precio);
//             valor = rock[1].precio;
//             descuento();
//             break;
//         case 3:
//             alert("Usted seleccionó " + rock[2].artista + "-" + rock[2].disco + ": $" + rock[2].precio);
//             valor = rock[2].precio;
//             descuento();
//             break;
//         case 4:
//             alert("Usted seleccionó " + soul[0].artista + "-" + soul[0].disco + ": $" + soul[0].precio);
//             valor = soul[0].precio;
//             descuento();
//             break;
//         default:
//             alert("Ingrese un número válido");

//     }
//     bienvenida = prompt("Si desea seleccionar otro disco presione s, si desea salir presione n");


// }

// let bienvenida = prompt("¡Bienvendo a DeVinilo! Elija un género musical entre Rock, Soul o Jazz, o presione s para recibir una oferta limitada. Presione n para salir.");

// while ((bienvenida != "s") && (bienvenida != "n")) {
//     if ((bienvenida == "Rock") || (bienvenida == "rock")) {
//         let filtroGenero = rock.filter((elemento) => elemento.genero == "Rock");
//         console.log(filtroGenero);
//         break;

//     } else if ((bienvenida == "Soul") || (bienvenida == "soul")) {
//         let filtroGenero = soul.filter((elemento) => elemento.genero == "Soul");
//         console.log(filtroGenero);
//         break;

//     } else if ((bienvenida == "Jazz") || (bienvenida == "jazz")) {
//         let filtroGenero = jazz.filter((elemento) => elemento.genero == "Jazz");
//         console.log(filtroGenero);
//         break;

//     } else {
//         alert("Ingrese un género válido");
//         bienvenida = prompt("Vuelva a ingresar un género entre Rock, Soul o Jazz, o presione s para recibir una oferta limitada. Presione n para salir.")
//     }
// }



