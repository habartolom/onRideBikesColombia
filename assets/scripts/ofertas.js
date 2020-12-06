const botonTitulos = document.getElementById('titulos');
const botonFondos = document.getElementById('fondo');
const botonMostrarOcultar = document.getElementById('toggle');

const titulo = document.getElementById('tituloOfertas');
const containerOfertas = document.getElementById('container');
const oferta = document.getElementById('ofertaOculta');

botonTitulos.addEventListener('click', (e)=>{
    titulo.classList.add("text-danger")
    console.log(e);
});

botonFondos.addEventListener('click', (e)=>{
    containerOfertas.classList.add("bg-black");
});

botonMostrarOcultar.addEventListener('click', (e)=>{
    oferta.classList.toggle('hidden');

});