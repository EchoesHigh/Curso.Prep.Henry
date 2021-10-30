// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for ( let i = 0; i < array.length; i++ ){
    array[i] = array[i] + 1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let res = "";
  let espacio = " ";
  for ( let i = 0; i < palabras.length; i++){
    if ( i > 0 ){
      res += espacio;
    }
    res += palabras[i];
  }
  return res;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if ( array.length == 0 ) {
    return false;
  }
  for ( let i = 0; i < array.length; i++ ) {
    if ( array[i] == elemento ) {
      return true;
    }
    else {
      return false;
    }
  }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let res = null;
  for ( let i = 0; i < numeros.length; i++ ) {
    res += Number.parseInt(numeros[i]);
  }
  return res;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let res = null;
  for ( let i = 0; i < resultadosTest.length; i++) {
    res += Number.parseInt(resultadosTest[i]);
  }
  res = res / resultadosTest.length;
  return res;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let res = 0;
  for ( let i = 0; i < numeros.length; i++ ) {
    if ( numeros[i] > res ) {
      res = numeros[i];
    }
  }
  return res;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let res = 1;
  if ( arguments.length == 0 ) {
    res = 0;
  }
  for ( let i = 0; i < arguments.length; i++ ) {
    res *= arguments[i];
  }
  return res;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let res = null;
  for ( let i = 0; i < arreglo.length; i++ ) {
    if ( arreglo[i] > 18 ) {
      res += 1;
    }
  }
  return res;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if ( numeroDeDia == 7 || numeroDeDia == 1 ) {
    return "Es fin de semana";
  }
  else if ( numeroDeDia > 1 && numeroDeDia < 7 ) {
    return "Es dia Laboral";
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let res = n.toString();
  let start = "9";
  if ( res.startsWith(start) ) {
    return true;
  }
  else {
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  for ( i = 0; i < arreglo.length; i++ ) {
    if ( i > 0 ) {
      if ( arreglo [i] !== arreglo [i-1] ) {
        return false;
      }
    }
  }
  return true;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let enero = "Enero";
  let marzo = "Marzo";
  let noviembre = "Noviembre";
  let res = [];
  let a = null;
  let b = null;
  let c = null;
  for ( i = 0; i < array.length; i++ ) {
    if ( array[i] == enero ){
      res.push(array[i]);
      a = 1;
    }
    else if ( array[i] == marzo ) {
      res.push(array[i]);
      b = 1;
    }
    else if ( array[i] == noviembre ) {
      res.push(array[i]);
      c = 1;
    }
  }
  if ( a == 1 && b == 1 && c == 1 ) {
    return res;
  }
  else {
    return "No se encontraron los meses pedidos";
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let res = [];
  for ( let i = 0; i < array.length; i++ ) {
    if ( array[i] > 100 ) {
      res.push(array[i]);
    }
  }
  return res;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let res = [];
  let veces = 10;
  for ( let i = 1; i <= veces; i++ ) {
    numero += 2;
    res.push(numero);
    if ( numero == i ) {
      return "Se interrumpió la ejecución";
    }
  }
  return res;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let res = [];
  let veces = 10;
  let valor = 5;
  for ( let i = 1; i <= veces; i++ ) {
    if ( i == valor ) {
      continue;
    }
    numero += 2;
    res.push(numero);
  }
  return res;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
