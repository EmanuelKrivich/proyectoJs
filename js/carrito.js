let btnCarrito = document.getElementById('btnCarrito');




const mostrarCarrito = () => {

    btnCarrito.onclick = () => {
        Swal.fire({
            title: 'Productos en carrito',
            text: `${carrito}`,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Confirmar compra',
            denyButtonText: `Vaciar`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
                carrito.forEach(element => {
                    carrito.splice(element);
                });;
                Swal.fire(`Carrito vacío`);
            }
        })
    }
}


mostrarCarrito();
