enum diaSemana {
    Domingo = 0,
    Segunda = 1,
    Terça = 2,
    Quarta = 3,
    Quinta = 4,
    Sexta = 5,
    Sabado = 6,
  }
  
  function retornaDia(dia: number): string {
  switch (dia) {
    case diaSemana.Domingo:
        return 'Domingo';
    case diaSemana.Segunda:
        return 'Segunda';
        case diaSemana.Terça:
        return 'Terça';
    case diaSemana.Quarta:
        return 'QUarta';
        case diaSemana.Quinta:
        return 'QUinta';
    case diaSemana.Sexta:
        return 'Sexta';
    case diaSemana.Sabado:
        return 'sábado';
    default:
        return 'inválido';
    
}
  }

  console.log(retornaDia(6));

  //dia semana atual

  const diaHoje: number = new Date().getDay();
  console.log(`Hoje é: ${retornaDia(diaHoje)}`);