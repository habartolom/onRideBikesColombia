const obProducto1 = {
	nombre: 'Marco Jumper Rin 26',
	precio: 300000,
};
const obProducto2 = {
	nombre: 'Marco Ruta Aluminio Zero',
	precio: 372000,
};
const obProducto3 = {
	nombre: 'Bicicleta MTB 29 Stinger',
	precio: 1590000,
};
const obProducto4 = {
	nombre: 'Bicicleta Fixie Piñon',
	precio: 470000,
};
const obProducto5 = {
	nombre: 'Marco de ruta en Acero On Ride',
	precio: 180000,
};
const obProducto6 = {
	nombre: 'Marco de Acero Ultra Liviano',
	precio: 850000,
};
const obProducto7 = {
	nombre: 'Marco Venzo Thorn 27.5',
	precio: 290000,
};
const obProducto8 = {
	nombre: 'Marco Venzo Loki Rin 27.5',
	precio: 290000,
};
const obProducto9 = {
	nombre: 'Kit Venzo',
	precio: 279900,
};
const obProducto10 = {
	nombre: 'Kit On-Trail Free Bike',
	precio: 59900,
};
const obProducto11 = {
	nombre: 'Doble Plato On-Trail Zero',
	precio: 129900,
};
const obProducto12 = {
	nombre: 'Platos en Aluminio',
	precio: 51900,
};



const producto1 = document.getElementById('producto1');
const producto2 = document.getElementById('producto2');
const producto3 = document.getElementById('producto3');
const producto4 = document.getElementById('producto4');
const producto5 = document.getElementById('producto5');
const producto6 = document.getElementById('producto6');
const producto7 = document.getElementById('producto7');
const producto8 = document.getElementById('producto8');
const producto9 = document.getElementById('producto9');
const producto10 = document.getElementById('producto10');
const producto11 = document.getElementById('producto11');
const producto12 = document.getElementById('producto12');

producto1.addEventListener('click', (e)=>{
    agregarObjeto(obProducto1);
})
producto2.addEventListener('click', ()=>{
    agregarObjeto(obProducto2);
})
producto3.addEventListener('click', ()=>{
    agregarObjeto(obProducto3);
})
producto4.addEventListener('click', ()=>{
    agregarObjeto(obProducto4);
})
producto5.addEventListener('click', ()=>{
    agregarObjeto(obProducto5);
})
producto6.addEventListener('click', ()=>{
    agregarObjeto(obProducto6);
})
producto7.addEventListener('click', ()=>{
    agregarObjeto(obProducto7);
})
producto8.addEventListener('click', ()=>{
    agregarObjeto(obProducto8);
})
producto9.addEventListener('click', ()=>{
    agregarObjeto(obProducto9);
})
producto10.addEventListener('click', ()=>{
    agregarObjeto(obProducto10);
})
producto11.addEventListener('click', ()=>{
    agregarObjeto(obProducto11);
})
producto12.addEventListener('click', ()=>{
    agregarObjeto(obProducto12);
})


const aviso = document.getElementById('aviso');


let productosArray = [];

function agregarObjeto(producto){
	if(localStorage.getItem('productos') != null){
		productosArray = JSON.parse(localStorage.getItem('productos'));
    }
    productosArray.push(producto);
    const productosToString = JSON.stringify(productosArray);
	localStorage.setItem('productos', productosToString);
	aviso.classList.toggle('hidden');

	setTimeout(() => {
		aviso.classList.toggle('hidden');
	}, 1500);

}


