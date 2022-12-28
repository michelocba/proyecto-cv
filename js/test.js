function cambiarAnchoFotoPerfil() {
  let anchoPantalla = 1200;
  let anchoFoto = 12;
  let hasta = 300;
  let pasoAnchoPantalla = 200;
  let aumentoAnchoFoto = 4;
  let mediaqueryList;
  for (anchoPantalla; anchoPantalla > hasta; anchoPantalla -= pasoAnchoPantalla) {
    console.log("variable anchoPantalla: " + anchoPantalla);
    mediaqueryList = window.matchMedia('(max-width: ' + anchoPantalla + 'px)');
    mediaqueryList.addListener(function (EventoMediaQueryList) {
      //console.log('Ejecutado el listener', EventoMediaQueryList);
      if (EventoMediaQueryList.matches) {
        // Realizamos las acciones cuando cambia el estado de la mediaquery y ahora cumple su valor
        //console.log(anchoPantalla);
        document.getElementById("foto-perfil").style.width = +anchoFoto + '%';
        //document.getElementById('foto-perfil').clientWidth="200%";
        //document.write('Ingreso al tamaño de pantalla: '+screen.width+' pixeles');
      }
    });
    anchoFoto += aumentoAnchoFoto;
  }
}