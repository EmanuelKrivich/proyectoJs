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
rock.push(new Discos(1, "Led Zeppelin", "Rock", "Houses of the Holy", 1973, 4200, 'https://retrovinilosymas.com/wp-content/uploads/2021/08/811SlSR63IL._SL1425_.jpg'));
rock.push(new Discos(2, "Led Zeppelin", "Rock", "Physical Graffiti", 1975,  4000, 'https://i.discogs.com/SJ1rQk2bpwNuXy4KuBJ45kzYmQNXwzKi1n_6tsIH8Ss/rs:fit/g:sm/q:90/h:600/w:594/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMDM1/NjYtMTM2ODM4MTMx/Ni05MDU0LmpwZWc.jpeg'));
rock.push(new Discos(3, "Pink Floyd", "Rock", "The Dark Side of the Moon", 1973, 5000, 'https://http2.mlstatic.com/D_NQ_NP_822954-MLA29220312370_012019-O.jpg'));
rock.push(new Discos(4, "Deep Purple", "Rock", "Machine Head", 1972, 3700, 'https://crazyminds.es/wp-content/uploads/71fU7JDo9DL._SL1000_.jpg'));
rock.push(new Discos(5, "Van Halen", "Rock", "1984", 1984, 3500, 'https://lastfm.freetls.fastly.net/i/u/ar0/d5d89fd2535b34b05341f0e425c4f31b.jpg'));
rock.push(new Discos(6, "Queen", "Rock", "Innuendo", 1991, 4200, 'https://www.aqueenofmagic.com/wp-content/uploads/2018/02/SharedImage-53611.jpg'));
rock.push(new Discos(7, "Dire Straits", "Rock", "Brothers In Arms", 1985, 3800, 'https://http2.mlstatic.com/D_NQ_NP_713066-MLA48853447240_012022-O.jpg'));
soul.push(new Discos(8, "Stevie Wonder", "Soul", "Innervisions", 1973, 4000, 'https://m.media-amazon.com/images/I/7133jfYbw0L._SL1400_.jpg'));
soul.push(new Discos(9, "Lauryn Hill", "Soul", "The Miseducation of Lauryn Hill", 1998, 3200, 'https://media.pitchfork.com/photos/5929c0e05e6ef9596932360b/1:1/w_600/de722e4f.jpg'));
soul.push(new Discos(10, "Marvin gaye", "Soul", "Lets get it on", 1973, 3500, 'https://i.discogs.com/uJn0lZIHqXtVKsWZLe8VW_SKKXSx-7R-S1oZ8j91wvA/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMTk2/MzAxLTE1MTE2NTM2/MTEtMjkxMy5qcGVn.jpeg'));
soul.push(new Discos(11, "Sam Cooke", "Soul", "Mr. Soul", 1963, 4000, 'https://www.bluescentric.com/images/product/large/4095.jpg'));
soul.push(new Discos(12, "Michael Jackson", "Soul", "Thriller", 1982, 4500, 'https://m.media-amazon.com/images/I/51vnfQPXskL.jpg'));
jazz.push(new Discos(13, "Miles Davis", "Jazz", "Kind of Blue", 1959, 4100, 'https://is1-ssl.mzstatic.com/image/thumb/Music/v4/1a/02/77/1a02770a-a45e-ebed-6eff-5b87ce390dc4/886444350761.jpg/1200x1200bf-60.jpg'));
jazz.push(new Discos(14, "Jamie Cullum", "Jazz", "Twentysomething", 2003, 3200, 'https://i.scdn.co/image/ab67616d0000b273d09895afbe4a008f7536f89d'));
jazz.push(new Discos(15, "Louis Armstrong", "Jazz", "What a Wonderful World", 1967, 4000, 'https://lastfm.freetls.fastly.net/i/u/770x0/d47bee4a56df4d7ecdff726e7afcdc74.jpg'));
jazz.push(new Discos(16, "Thelonious Monk", "Jazz", "The Unique Thelonious Monk", 1956, 3800, 'https://i.discogs.com/HLoNg_D4-RcTHphkYpsx2bMmvP8rEIv6yo-UpKi_BRA/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMyNjU1/ODQtMTM3ODAxNzUx/OC0yNjcyLmpwZWc.jpeg'));
disco.push(new Discos(17, "Kool and the Gang", "Disco", "Celebrate!", 1980, 4200, 'https://m.media-amazon.com/images/I/81T68Sx-s3L._SL1400_.jpg'));
disco.push(new Discos(18, "Bee Gees", "Disco", "Saturday Night Fever", 1977, 4500, 'https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/3GCBWDHIPNAFFNTQWK4YDJCJLU.jpg'));
disco.push(new Discos(19, "Chic", "Disco", "Cest Chic", 1978, 3800, 'https://i.discogs.com/XfMvMh3sOW915IaPOzcN6onBQaTPWFe1pypfOnm0vvc/rs:fit/g:sm/q:90/h:600/w:588/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNjk5/NzktMTQ2NzcwODQw/Ni03NzUyLmpwZWc.jpeg'));
blues.push(new Discos(20, "B.B. King", "Blues", "Indianola Mississippi Seeds", 1970, 4200, 'https://i.discogs.com/kqa-2WGmPhVv0-ZvKM3O17mQcX9O1ptqCc1lRB7dW4k/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU4MDQ2/MDQtMTQwMzEyOTg2/NS05MjYxLmpwZWc.jpeg'));
blues.push(new Discos(21, "Joe Cocker", "Blues", "With a Little Help from My Friends", 1969, 4500, 'https://i.scdn.co/image/ab67616d0000b2735bb09aa81ffb17ccf902629f'));
blues.push(new Discos(22, "Muddy Waters", "Blues", "The Muddy Waters Woodstock Album", 1975, 3800, 'https://i.discogs.com/ZBi3By7TnlcVscl67uUlV7I3kOISgi4vl9nCPIgIzeo/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyODUy/NTMwLTE1NDMxODc1/MTctMTQyMy5qcGVn.jpeg'));
clasico.push(new Discos(23, "Jordi Savall", "Clasico", "The Celtic Viol", 2009, 4200, 'https://i.scdn.co/image/ab67616d0000b273c116247f96457eed582dccce'));
clasico.push(new Discos(24, "Christina Pluhar", "Clasico", "La Tarantella: Antidotum Tarantulae", 2001, 4500, 'https://i.scdn.co/image/ab67616d0000b273533c1fb196c0b6ab47f24021'));
clasico.push(new Discos(25, "Juan Diego Flórez", "Clasico", "Mozart", 2017, 3800, 'https://i2.wp.com/iopera.es/wp-content/uploads/2018/05/Juan-Diego-Fl%C3%B3rez-canta-Mozart.jpg?fit=928%2C816'));





const carrito = [];










