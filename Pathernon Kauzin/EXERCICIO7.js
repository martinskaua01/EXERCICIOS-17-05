a1 = Math.floor(Math.random() * 20)
b1 = Math.floor(Math.random() * 20)
matriz1 = [a1, b1]

a2 = Math.floor(Math.random() * 20)
b2 = Math.floor(Math.random() * 20)
matriz2 = [b2, b2]

matrizP = [matriz1, matriz2]
console.log(matrizP);
Determinante1 = matrizP[1][1] * matrizP[0][0]
Determinante2 = matrizP[1][0] * matrizP[0][1]
Determinante = Determinante1 - Determinante2
console.log(Determinante);