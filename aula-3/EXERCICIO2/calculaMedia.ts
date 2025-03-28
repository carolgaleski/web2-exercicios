function media (...numeros: number[]): number {
    return numeros.reduce((soma, num) => soma + num, 0) / numeros.length;
}

console.log( media(10, 25, 82));