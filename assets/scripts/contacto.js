/**
 * Si es valido colocar en la clase del contenedor "form-group has-success"
 * Si es valido colocar en la clase del input "form-control is-valid"
 * si no es valido colocar en la clase del contenedor "form-group has-danger"
 * Si es valido colocar en la clase del input "form-control is-invalid"
 */

const nombre = {
	container: document.getElementById('nombreContainer'),
	input: document.getElementById('nombreInput'),
	msgContainer: document.getElementById('nombreMensaje'),
	mensajeError: 'El nombre debe tener mínimo 5 caracteres',
	mensaje: 'El nombre ingresado es correcto',
};

const email = {
	container: document.getElementById('emailContainer'),
	input: document.getElementById('emailInput'),
	msgContainer: document.getElementById('emailMensaje'),
	mensajeError: 'El correo no tiene la estructura adecuada',
	mensaje: 'El email ingresado es correcto',
};

const mensaje = {
	container: document.getElementById('mensajeContainer'),
	input: document.getElementById('mensajeTextArea'),
	msgContainer: document.getElementById('mensajeMensaje'),
	mensajeError: 'El mensaje debe tener mínimo 50 caracteres y máximo 200',
	mensaje: 'El mensaje ingresado es correcto',
};

const telefono = {
    container: document.getElementById('telefonoContainer'),
	input: document.getElementById('telefonoInput'),
	msgContainer: document.getElementById('telefonoMensaje'),
	mensajeError: 'El telefono debe tener mínimo 7 caracteres y debe ser numérico',
	mensaje: 'El telefono ingresado es correcto',
};

function informarError(object) {
	object.container.className = 'form-group has-danger';
	object.input.className = 'form-control is-invalid';
	object.msgContainer.className = 'invalid-feedback';
	object.msgContainer.innerText = object.mensajeError;
}

function informarExito(object) {
	object.container.className = 'form-group has-success';
	object.input.className = 'form-control is-valid';
	object.msgContainer.className = 'valid-feedback';
	object.msgContainer.innerText = object.mensaje;
}

function quitarValidacion(object){
    object.container.className = 'form-group';
    object.input.className = 'form-control';
    object.msgContainer.className = '';
    object.msgContainer.innerText = '';
}

function validarFormulario(event) {
	event.preventDefault();

	let nombreEsValido = () => {
		let esValido = true;

		if (nombre.input.value.length < 5) {
			informarError(nombre);
			esValido = false;
		} else informarExito(nombre);

		return esValido;
	};

    let correoEsValido = () => {
        let esValido = true;

        if (email.input.value.length < 50 || email.input.value.length > 200) {
            informarError(email);
            esValido = false;
        } else informarExito(email);

        return esValido;
    };

	let mensajeEsValido = () => {
		let esValido = true;

		if (mensaje.input.value.length < 50 || mensaje.input.value.length > 200) {
			informarError(mensaje);
			esValido = false;
		} else informarExito(mensaje);

		return esValido;
	};

	let telefonoEsValido = () => {
		let esValido = true;

		if ((telefono.input.value.length < 7) || (telefono.input.value.length > 10)) {
			informarError(telefono);
			esValido = false;
		} else informarExito(telefono);

		return esValido;
    };
    
    if ( nombreEsValido() & correoEsValido() & mensajeEsValido() & telefonoEsValido() ) 
        console.log('puede ingresar');
}

document.getElementById('nombreInput').addEventListener('focus', () => {
	quitarValidacion(nombre);
});

document.getElementById('emailInput').addEventListener('focus', () => {
	quitarValidacion(email);
});

document.getElementById('mensajeTextArea').addEventListener('focus', () => {
	quitarValidacion(mensaje);
});

document.getElementById('telefonoInput').addEventListener('focus', () => {
	quitarValidacion(telefono);
});


telefono.input.addEventListener('keyup', (e) => {
    quitarValidacion(telefono);
    if(e.keyCode >= 65 && e.keyCode <= 90){
        informarError(telefono);
        let value = telefono.input.value;
        telefono.input.value = value.substring(0, value.length - 1);
    }
    
});
