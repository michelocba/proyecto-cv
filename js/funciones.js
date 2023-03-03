// oculta o muestra los datos del inicio donde figura direccion localidad telefono e-mail
function ocultar_mostar_datos_iniciales(elementoId){
  // verifico si esta esta visible
  let elemento = document.getElementById(elementoId);
  let esVisible = elemento.style.display;
  
  if (esVisible == 'none' || esVisible == ''){
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

document.getElementById('facebook').onclick = function(){
  window.open('https://www.facebook.com/MICHELO.HDM');
}

document.getElementById('instagram').onclick = function(){
  window.open('https://www.instagram.com/michelocba/');
}

document.getElementById('twitter').onclick = function(){
  window.open('https://twitter.com/hectormichelet1');
}

document.getElementById('linkedin').onclick = function(){
  window.open('https://www.linkedin.com/in/h%C3%A9ctor-alberto-micheletti-1308471b/');
}

document.getElementById('whatsapp').onclick = function(){
  window.open('https://api.whatsapp.com/send?phone=542548356842');
}
