var texto = 'Hola mundo!';
texto = '2';
console.log(texto);
var NUM = 4;
// NUM = 5;
// let - var
function letVsVar() {
    var num1 = 3;
    var num2 = 3;
    // num2 = 'Hola mundo'
    if (true) {
        var num1_1 = 5;
        var num2 = 5;
        console.log('N1: ', num1_1);
        console.log('N2: ', num2);
    }
    console.log('N1: ', num1);
    console.log('N2: ', num2);
}
letVsVar();
var n;
console.log(n);
// n = 4;
n = true;
// Arrays
var colores = ['azul', 'blanco', 'negro', 'amarillo'];
var numeros = [1, 2, 3, 4];
// forEach
// map
// filter
// find
// reduce
var direccion = ['C/ Santa Teresa', 12, 1, 'G'];
var serie = {
    nombre: 'Vikings',
    temporadas: 5,
    episodios: 69,
    episodiosVistos: 45,
    episodiosPorVer: function () {
        return this.episodios - this.episodiosVistos;
    }
};
var strYNums = ['AAA', 88, 334, 'JJJ'];
// Template Literals
console.log('La serie ' + serie.nombre + ' \ntiene ' + serie.temporadas + ' temporadas');
console.log("La serie " + serie.nombre + "\ntiene " + serie.temporadas + " temporadas");
for (var prop in serie) {
    console.log(prop + " -> " + serie[prop]);
}
for (var _i = 0, strYNums_1 = strYNums; _i < strYNums_1.length; _i++) {
    var val = strYNums_1[_i];
    console.log(val);
}
// Desestructuracion, rest op y spread op
// let nombre: String = serie.nombre
// let temporadas: Number = serie.temporadas
// let episodios: Number = serie.episodios
// let episodiosVistos: Number = serie.episodiosVistos
var episodiosVistos = serie.episodiosVistos, titulo = serie.nombre, temporadas = serie.temporadas;
console.log(titulo, temporadas, episodiosVistos);
console.log(serie);
var a = colores[0], ne = colores[2];
console.log(a, ne);
var seriesConPersonajes = [
    {
        titulo: 'Serie 1',
        personajes: ['P1', 'P2']
    },
    {
        titulo: 'Serie 2',
        personajes: ['P1']
    }
];
// let [, s2] = seriesConPersonajes;
// let [, { personajes }] = seriesConPersonajes;
// let [ p1 ] = personajes;
// console.log(personajes)
var p1 = seriesConPersonajes[1].personajes[0];
console.log(p1);
// Rest op
function getNumeroLoteria(numSorteo) {
    var nums = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nums[_i - 1] = arguments[_i];
    }
    // console.log('Sorteo: ' + numSorteo)
    // console.log('Números: ' + nums)
    return "Los n\u00FAmeros para el sorteo " + numSorteo + " son: " + nums.sort().join(', ');
}
// const getNumeroLoteria = (numSorteo, ...nums) => {
//   // console.log('Sorteo: ' + numSorteo)
//   // console.log('Números: ' + nums)
//   return `Los números para el sorteo ${numSorteo} son: ${nums.sort().join(', ')}`
// }
console.log(getNumeroLoteria(1, 2, 3, 4, 5, 6));
console.log(getNumeroLoteria(1, 2, 3, 4, 5, 6, 7, 8, 9));
// function getColores(c1, c2, c3, c4) {
//   console.log(c1)
//   console.log(c3)
// }
// getColores(...colores);
var coloresAAnyadir = ['rojo', 'verde'];
var nuevosColores1 = [colores, coloresAAnyadir];
var nuevosColores2 = colores.concat(coloresAAnyadir);
console.log(nuevosColores1);
console.log(nuevosColores2);
// const pConEdad = {...serie, nombre: 'Charly', edad: 39}
// function paramsOpcionales (a: Number, b: String = 'aaaaa', c?: Boolean, d: String): void {
//   console.log(b)
// }
// paramsOpcionales(1, '2')
// paramsOpcionales(1, '2', false)
// paramsOpcionales(1)
// paramsOpcionales(1, 'a', null, 'b')
// () => {}
// (a) => {}
// a => {}
// (a, b) => {}
// (a, b) => a + b
// (a, b) => { return a + b }
// (a, b) => { return {a: b} }
// (a, b) => ({a: b})
function pelicula() {
    this.añoEstreno = 2000;
    setTimeout(function () {
        console.log(this.añoEstreno);
    }, 1500);
}
peliculaArrow();
// function pelicula() {
//   let self = this;
//   this.añoEstreno = 2000;
//   setTimeout(function() {
//     console.log(self.añoEstreno);
//   }, 1500);
// }
// function pelicula() {
//   this.añoEstreno = 2000;
//   setTimeout(function() {
//     console.log(this.añoEstreno);
//   // }.bind({añoEstreno: 2020}), 1500);
//   }.bind(this), 1500);
// }
function peliculaArrow() {
    var _this = this;
    this.añoEstreno = 2000;
    setTimeout(function () {
        console.log(_this.añoEstreno);
    }, 1500);
}
function doble(n1) {
    if (typeof (n1) === 'string') {
        return n1 + n1;
    }
    else if (typeof (n1) === 'number') {
        return n1 * 2;
    }
}
console.log(doble('a'));
console.log(doble(2));
var peli = {
    id: 12,
    titulo: 'Los mercenarios',
    genero: 'accion',
    duracion: 113,
    ganadoraOscar: function (gana) { return console.log(gana ? 'Ha ganado un oscar' : 'No ha ganado ningún oscar'); }
};
var DesarrolladorJavascript = /** @class */ (function () {
    function DesarrolladorJavascript() {
    }
    DesarrolladorJavascript.prototype.trabaja = function () {
        console.log('Desarrollo aplicaciones con JavaScript');
    };
    return DesarrolladorJavascript;
}());
var DesarrolladorTypescript = /** @class */ (function () {
    function DesarrolladorTypescript() {
    }
    DesarrolladorTypescript.prototype.trabaja = function () {
        console.log('Desarrollo aplicaciones con TypeScript');
    };
    return DesarrolladorTypescript;
}());
var desarrollador = new DesarrolladorJavascript();
desarrollador.trabaja();
// interface Mascota {
//   nombre: string,
//   tipo: string,
//   sonido: string
// }
// let perro: Mascota = {
//   nombre: '',
//   tipo: '',
//   sonido: '',
// }
// let gato: Mascota = {
//   nombre: '',
//   tipo: '',
//   sonido: '',
// }
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
;
console.log(Direction.Up);
function haciaDondeVoy(direccionEscogida) {
    switch (direccionEscogida) {
        case Direction.Up:
            console.log('Va hacía arriba');
            break;
        case Direction.Down:
            console.log('Va hacía abajo');
            break;
    }
    // case 'down':
    //   console.log('Va hacía abajo');
    //   break;
    // }
    // case 'up':
    //   console.log('Va hacía abajo');
    //   break;
    // }
}
haciaDondeVoy(Direction.Down);
console.log(Direction.Down);
// haciaDondeVoy('upp')
var Languages;
(function (Languages) {
    Languages[Languages["Spanish"] = 2] = "Spanish";
    Languages[Languages["French"] = 8] = "French";
    Languages[Languages["English"] = 4] = "English";
    Languages[Languages["Germany"] = 7] = "Germany";
    Languages[Languages["Portugues"] = 8] = "Portugues";
})(Languages || (Languages = {}));
;
function dameItemAleatorio(items) {
    var posicion = Math.floor(Math.random() * items.length);
    return items[posicion];
}
var itemNum = dameItemAleatorio([1, 3, 5, 2]);
var itemFamiliaGot = dameItemAleatorio(['Stark', 'Lannister', 'Baratheon', 'Targaryen', 'Martell', 'Greyjoy']);
console.log(itemNum);
console.log(itemFamiliaGot);
