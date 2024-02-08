let numero_juegos = prompt('Ingresa la cantidad de veces que quieres jugar: ');
      let contador = 0;
      while(contador < numero_juegos){
        let select_jugador = prompt('Ingrese tu jugada. Piedra, papel ó tijera.', ' ');
        ganador = Quiengana(select_jugador, selectMaquina());
        contador++;

        switch (ganador) {
          case 'jugador':
            alert(`¡Felicitaciones, haz ganado!`)
            break;
          case 'máquina':
            alert(`Lo siento, haz perdido`)
            break;
          default:
            alert('El resultado es un empate')
        }

        function selectMaquina() {
          switch (Math.floor(Math.random() * 3)) {
            case 0:
              return 'piedra';
              break;
            case 1:
              return 'papel';
              break;
            case 2:
              return 'tijera';
              break;
          }
        }

        function Quiengana(jugador, maquina) {
          let resultado = '';
          if (jugador == maquina) {
            resultado = 'empate';
          }
          else if ((jugador == 'tijera' && maquina == 'papel') ||
            (jugador == 'papel' && maquina == 'piedra') ||
            (jugador == 'piedra' && maquina == 'tijera')) {
            resultado = 'jugador';
          }
          else {
            resultado = 'máquina';
          }
          return resultado;
        }
      }