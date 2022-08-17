let btnRock = document.getElementById('btnRock');
let btnJazz = document.getElementById('btnJazz');
let btnBlues = document.getElementById('btnBlues');
let btnSoul = document.getElementById('btnSoul');
let btnDisco = document.getElementById('btnDisco');
let btnClasico = document.getElementById('btnClasico');
let btnBuscar = document.getElementById('btnBuscar');
let inputBuscar = document.getElementById('inputBuscar');

btnRock.onclick = () => {

    document.querySelector("#imgRock").style.display = "none";
    document.querySelector("#btnRock").style.display = "none";

    let h5 = document.createElement("h5");
    h5.innerHTML = "Rock";
    document.body.appendChild(h5);

    for (index = 0; index < rock.length; index++) {
        let ulRock = document.createElement("ul");
        ulRock.innerHTML = `<li>${rock[index].artista} - ${rock[index].disco}</li>`;
        document.body.appendChild(ulRock);
    }
}

btnJazz.onclick = () => {

    document.querySelector("#imgJazz").style.display = "none";
    document.querySelector("#btnJazz").style.display = "none";

    let h5 = document.createElement("h5");
    h5.innerHTML = "Jazz";
    document.body.appendChild(h5);

    for (index = 0; index < jazz.length; index++) {
        let ulJazz = document.createElement("ul");
        ulJazz.innerHTML = `<li>${jazz[index].artista} - ${jazz[index].disco}</li>`;
        document.body.appendChild(ulJazz);
    }
}

btnSoul.onclick = () => {

    document.querySelector("#imgSoul").style.display = "none";
    document.querySelector("#btnSoul").style.display = "none";

    let h5 = document.createElement("h5");
    h5.innerHTML = "Soul";
    document.body.appendChild(h5);

    for (index = 0; index < soul.length; index++) {
        let ulSoul = document.createElement("ul");
        ulSoul.innerHTML = `<li>${soul[index].artista} - ${soul[index].disco}</li>`;
        document.body.appendChild(ulSoul);
    }
}

btnDisco.onclick = () => {

    document.querySelector("#imgDisco").style.display = "none";
    document.querySelector("#btnDisco").style.display = "none";

    let h5 = document.createElement("h5");
    h5.innerHTML = "Disco";
    document.body.appendChild(h5);

    for (index = 0; index < disco.length; index++) {
        let ulDisco = document.createElement("ul");
        ulDisco.innerHTML = `<li>${disco[index].artista} - ${disco[index].disco}</li>`;
        document.body.appendChild(ulDisco);
    }
}

btnBlues.onclick = () => {

    document.querySelector("#imgBlues").style.display = "none";
    document.querySelector("#btnBlues").style.display = "none";

    let h5 = document.createElement("h5");
    h5.innerHTML = "Blues";
    document.body.appendChild(h5);

    for (index = 0; index < blues.length; index++) {
        let ulBlues = document.createElement("ul");
        ulBlues.innerHTML = `<li>${blues[index].artista} - ${blues[index].disco}</li>`;
        document.body.appendChild(ulBlues);
    }
}

btnClasico.onclick = () => {

    document.querySelector("#imgClasico").style.display = "none";
    document.querySelector("#btnClasico").style.display = "none";
    
    let h5 = document.createElement("h5");
    h5.innerHTML = "Clasico";
    document.body.appendChild(h5);

    for (index = 0; index < clasico.length; index++) {
        let ulClasico = document.createElement("ul");
        ulClasico.innerHTML = `<li>${clasico[index].artista} - ${clasico[index].disco}</li>`;
        document.body.appendChild(ulClasico);
    }
}



