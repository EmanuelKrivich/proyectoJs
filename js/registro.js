// REGISTRO
let btnRegistro = document.getElementById('btnRegistro');
let formularioRegistro = document.getElementById('formularioRegistro');

let usuario = localStorage.getItem('usuario');

const registroUsuario = () => {
if (usuario) {
    formularioRegistro.innerText = `¡Bienvenido ${usuario}!`;

} else {
    btnRegistro.onclick = () => {
        let usuario = document.getElementById('inputUsuario').value;
        let clave = document.getElementById('inputClave').value;

        localStorage.setItem("usuario", usuario);
        localStorage.setItem("clave", clave);

    }

}





}