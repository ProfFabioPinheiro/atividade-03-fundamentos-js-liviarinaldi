function triangulo (c1, c2){
    const ca1 = c1*c1;
    const ca2 = c2*c2;
    const hp = ca2 + ca1;
    const h = Math.sqrt(hp);

    console.log("O valor da hipotenusa é:" + h);
}

triangulo (8, 15);