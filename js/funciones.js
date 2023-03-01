// oculta o muestra los datos del inicio donde figura direccion localidad telefono e-mail
function ocultar_mostar_datos_iniciales(elementoId){
  // verifico si esta esta visible
  let elemento = document.getElementById(elementoId);
  let esVisible = elemento.style.display;
  console.log(esVisible);
  if (esVisible == 'none'){
    elemento.style.display = 'block';
  }
  else
  {
    elemento.style.display = 'none';
  }
}

document.getElementById('boton-para-moviles').onclick = function (){
  ocultar_mostar_datos_iniciales('datos-iniciales');
}

document.getElementById('menu-nombre').onclick = function(){
  ocultar_mostar_datos_iniciales('formulario-contacto');
}

document.getElementById('boton-enviar').onclick = function(){
  ocultar_mostar_datos_iniciales('formulario-contacto');
}