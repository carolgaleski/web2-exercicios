var diaSemana;
(function (diaSemana) {
    diaSemana[diaSemana["Domingo"] = 0] = "Domingo";
    diaSemana[diaSemana["Segunda"] = 1] = "Segunda";
    diaSemana[diaSemana["Ter\u00E7a"] = 2] = "Ter\u00E7a";
    diaSemana[diaSemana["Quarta"] = 3] = "Quarta";
    diaSemana[diaSemana["Quinta"] = 4] = "Quinta";
    diaSemana[diaSemana["Sexta"] = 5] = "Sexta";
    diaSemana[diaSemana["Sabado"] = 6] = "Sabado";
})(diaSemana || (diaSemana = {}));
function retornaDia(dia) {
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
var diaHoje = new Date().getDay();
console.log("Hoje \u00E9: ".concat(retornaDia(diaHoje)));
