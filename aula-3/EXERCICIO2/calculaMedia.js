function media() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    return numeros.reduce(function (soma, num) { return soma + num; }, 0) / numeros.length;
}
console.log(media(10, 25, 82));
