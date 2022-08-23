
// REGISTRO



let btnRegistro = document.getElementById('btnRegistro');
let headerIndex = document.getElementById('headerIndex');

let usuario = localStorage.getItem('usuario');

if (usuario) {
    let titulo = document.getElementById('titulo');
    titulo.innerText = `¡Bienvenido ${usuario}`;
    document.body.appendChild(titulo);
} else {
    btnRegistro.onclick = () => {
let usuario = document.getElementById('inputUsuario').value;
let clave = document.getElementById('inputClave').value; 

localStorage.setItem("usuario", usuario);
localStorage.setItem("clave", clave);
}

 





}

