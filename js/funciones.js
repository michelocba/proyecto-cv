var mediaqueryList = window.matchMedia("(max-width: 1200px)");
mediaqueryList.addListener( function(EventoMediaQueryList) {
    //console.log('Ejecutado el listener', EventoMediaQueryList);
    if(EventoMediaQueryList.matches) {
        // Realizamos las acciones cuando cambia el estado de la mediaquery y ahora cumple su valor
        console.log("ingeso el media 500px");
        document.getElementById('foto-perfil').clientWidth="200%";
      } 
});

  