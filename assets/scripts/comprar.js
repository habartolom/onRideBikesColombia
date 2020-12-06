const listaProductos = document.getElementById('listaProductos');

let productosArray = JSON.parse(localStorage.getItem('productos'));
if (productosArray != null) {
	for (let i = 0; i < productosArray.length; i++) {
		listaProductos.innerHTML += `
		    <tr>
		        <th scope="row">${i+1}</th>
		        <td>${productosArray[i].nombre}</td>
		        <td>${productosArray[i].precio}</td>
		    </tr>
		`
	}
}

const aviso = document.getElementById('aviso');
const error = document.getElementById('error');

const button = document.getElementById('botonComprar');
button.addEventListener('click', ()=>{

    if(localStorage.getItem('productos') != null){

        localStorage.removeItem('productos');
        aviso.classList.toggle('hidden');
        setTimeout(()=>{
            window.location.reload();
        }, 2000);
    }
    else{
        error.classList.toggle('hidden');
    }
});