/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna True si "x" e "y" son iguales.
   // De lo contrario, retorna False.
   // Tu código:
   return (x == y)
   sonIguales(5, 9);
}

function tienenMismaLongitud(str1, str2) {
   // Retorna True si los dos strings tienen la misma longitud.
   // De lo contrario, retorna False.
   // Tu código:
   return (str1 >= str2);
   tienenMismaLongitud("Hola", "Hola");
}

function menosQueNoventa(num) {
   // Retorna True si el argumento "num" es menor que noventa.
   // De lo contrario, retorna False.
   // Tu código:
   return (num < 90);
   menosQueNoventa(89);
}

function mayorQueCincuenta(num) {
   // Retorna True si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna False.
   // Tu código:
   return (num > 50);
   mayorQueCincuenta(89);
}

function esPar(num) {
   // Retorna True si "num" es par.
   // De lo contrario, retorna False.
   // Tu código:
   return (num % 2) == 0;
   esPar(4);
}

function esImpar(num) {
   // Retorna True si "num" es impar.
   // De lo contrario, retorna False.
   // Tu código:
   return (num % 2) == 1;
   esImpar(15);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
