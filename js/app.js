let app = {
  checkNombre: false,
  checkRut: false,
  checkTelefono: false,
  checkEmail: false,
  checkMensaje: false,
  estiloBordeRojo: 'border: 1px solid red',
  validarNombre: () => {
    console.log('validarNombre')
    let inputNombre = document.getElementById('nombre')
    let valueNombre = inputNombre.value
    if(valueNombre != '') {
      app.checkNombre = (valueNombre.length > 3)
    }
    app.resaltarBorde('nombre', app.checkNombre)
  },
  validarRut: () => {
    let inputRut = document.getElementById('rut')
    let valueRut = inputRut.value
    if (valueRut != '') {
      app.checkRut = valueRut.substring((valueRut.length - 2), (valueRut.length - 1)) == '-'
      app.checkRut = app.checkRut && (valueRut.length >= 9 && valueRut.length <= 10)
    }
    app.resaltarBorde('rut', app.checkRut)
  },
  validarTelefono: () => {
    let inputTelefono = document.getElementById('telefono')
    let valueTelefono = inputTelefono.value
    if (valueTelefono != '') {
      app.checkTelefono = valueTelefono.substring(0, 1) == '9'
      app.checkTelefono = app.checkTelefono && valueTelefono.length == 9
    }
    app.resaltarBorde('telefono', app.checkTelefono)
  },
  validarEmail: () => {
    let inputEmail = document.getElementById('email')
    let valueEmail = inputEmail.value
    if (valueEmail != '') {
      app.checkEmail = String(valueEmail).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) != null
    }
    app.resaltarBorde('email', app.checkEmail)
  },
  validarMensaje: () => {
    let textAreaMensaje = document.getElementById('mensaje')
    let valueMensaje = textAreaMensaje.value
    if (valueMensaje != '') {
      app.checkMensaje = valueMensaje.length > 3
    }
    app.resaltarBorde('mensaje', app.checkMensaje)
  },
  validarFormulario: () => {
    event.preventDefault()

    app.resaltarBorde('nombre', app.checkNombre)
    app.resaltarBorde('rut', app.checkRut)
    app.resaltarBorde('telefono', app.checkTelefono)
    app.resaltarBorde('email', app.checkEmail)
    app.resaltarBorde('mensaje', app.checkMensaje)

    let go = true
    go = go && app.checkNombre
    go = go && app.checkRut
    go = go && app.checkTelefono
    go = go && app.checkEmail
    go = go && app.checkMensaje

    if (go) {
      let nombre = document.getElementById('nombre').value
      let rut = document.getElementById('rut').value
      let telefono = document.getElementById('telefono').value
      let email = document.getElementById('email').value
      let motivo = document.querySelector('input[name="motivo"]:checked').value
      let sucursal = document.getElementById('sucursal').value
      sucursal = sucursal == 'default' ? 'Sin sucursal de preferencia' : sucursal
      let modelo = document.getElementById('modelo').value
      modelo = modelo == 'default' ? 'Sin modelo de preferencia' : modelo
      let mensaje = document.getElementById('mensaje').value
      let html = `<p><b>Nombre: </b>${nombre}</p><p><b>Rut: </b>${rut}</p><p><b>Telefono: </b>${telefono}</p><p><b>Email: </b>${email}</p><p><b>Motivo: </b>${motivo}</p><p><b>Sucursal: </b>${sucursal}</p><p><b>Modelo: </b>${modelo}</p><p><b>Mensaje: </b>${mensaje}</p>`
      document.getElementById('cuerpoDetalleModal').innerHTML = ''
      document.getElementById('cuerpoDetalleModal').insertAdjacentHTML('afterbegin', html)
      let detalleModal = new bootstrap.Modal('#staticBackdrop', {
        keyboard: false
      })
      detalleModal.show()
    }

  },
  limpiarFormulario: () => {
    app.checkNombre = false
    app.checkRut = false
    app.checkTelefono = false
    app.checkEmail = false
    app.checkMensaje = false
    app.resaltarBorde('nombre', true)
    app.resaltarBorde('rut', true)
    app.resaltarBorde('telefono', true)
    app.resaltarBorde('email', true)
    app.resaltarBorde('mensaje', true)
  },
  resaltarBorde: (elemento, status) => {
    document.getElementById(elemento).style.cssText = !status ? app.estiloBordeRojo : ''
  }
}