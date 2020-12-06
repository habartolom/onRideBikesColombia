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


const button = document.getElementById('botonComprar');
button.addEventListener('click', ()=>{
    localStorage.removeItem('productos');
    window.location = "./comprar.html";
    swal({
        title: "Felicitaciones!",
        text: "Se ha realizado tu compra con éxito. Vuelve pronto!",
        icon: "success",
      });
    setTimeout(()=>{
    }, 2000);
});