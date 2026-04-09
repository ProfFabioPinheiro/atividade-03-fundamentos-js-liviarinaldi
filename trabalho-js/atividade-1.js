function valor(valorr, desconto){
    const valorD = valorr*(desconto/100)
    const valorF = valorr - desconto;
    console.log("O valor do desconto é: " + valorD + " reais"+ " o valor inicial é: " + valorr + " reais"+" o valor final é: " + valorF + " reais");
}

valor(100, 40);