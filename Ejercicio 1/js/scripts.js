/*Ejercicio 1.

Declara un array que vamos a llamar “clasificaciones” con los siguientes valores:
Ana, Oswaldo, Raúl, Celia, María, Antonio
(vamos a suponer que es el orden de clasificación de un concurso, en un momento dado)
1.	Imprime la clasificación actual.
El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array:
2.	Celia adelanta a Raúl
3.	Antonio es descalificado y se elimina del concurso
4.	Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden
5.	Hay una nueva participante que pasa a encabezar la clasificación: Marta
6.	Imprime nuevamente la clasificación actualizada y comprueba que se ha hecho correctamente
Marta, Ana, Roberto, Amaya, Oswaldo, Celia, Raúl, María

CONSIDERACIONES:
•	Recuerda que el código debe estar entre las etiquetas “<script>…</script>“.
•	Intenta realizar el ejercicio empleando cuando puedas las funciones que hemos visto en el apartado sobre arrays
(eliminar, añadir e insertar valores).
*/

var clasificaciones = ["Ana", "Oswaldo", "Raúl", "Celia", "María", "Antonio"]

// primer ejercicio
for (var x = 0; x < clasificaciones.length; x++)
{   
    document.write("<br>");
    document.write((x+1) + "° Posición: " + clasificaciones[x]);
}
// segundo ejercicio
var raul = clasificaciones[2];
var celia = clasificaciones[3];
clasificaciones[2] = celia;
clasificaciones[3] = raul;

// tercer ejercicio
clasificaciones.pop();

// cuarto ejercicio
clasificaciones.splice(1, 0, 'Roberto');
clasificaciones.splice(2, 0, 'Amaya');

// quinto ejercicio
clasificaciones.unshift('Marta')

// sexto ejercicio
document.write("<br>");
document.write("<br>");
document.write("Resultados Finales!");
for (var x = 0; x < clasificaciones.length; x++)
{   
    document.write("<br>");
    document.write((x+1) + "° Posición: " + clasificaciones[x]);
}
