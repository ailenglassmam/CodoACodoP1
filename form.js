function resumenCuenta() {

  // declaro el valor de la entrada general 
  const entradaGeneral = 200;

  // declaro una variable para llamar a la cantidad de entradas solicitadas en formulario
  let cantEntradas = Number(document.getElementById('cantidad').value);

  // imprimo para verificar que los valores sean reconocidos
  console.log(cantEntradas);

  // declaro una variable para llamar a la categoria de entrada en formulario
  let tipoEntrada = document.getElementById('categoria').value;

  // imprimo para verificar que los valores sean reconocidos
  console.log(tipoEntrada);

  console.log('Comienzo de resumen');

  // declaro una variable para el resumen de cuenta sin descuento

  let totalPagar;

  // calculo el precio total a pagar sin descuento

  totalPagar = cantEntradas * entradaGeneral;

  console.log(totalPagar);

  // declaro variables con los descuentos

  const descEst = (80 * entradaGeneral) / 100;
  const descTra = (50 * entradaGeneral) / 100;
  const descJun = (15 * entradaGeneral) / 100;

  console.log(descEst, descTra, descJun);

  // creo un condicional para indicar qué descuento aplicar dependiendo del tipo de ticket ingresado.
  console.log('args test', {tipoEntrada, estudiante});

  if(tipoEntrada == 'estudiante') {
    //console.log('testeo', {totalPagar, descEst});

   return totalPagar - descEst;
  }
  else if (tipoEntrada == 'trainee') {
    //console.log('testeo', {totalPagar, descTra});
  } else {
   // console.log('testeo', {totalPagar, descJun});
  };

};

  //  console.log(totalPagar);

  // declaro una variable para llamar al input donde visualizaremos el resumen de cuentas

  //let total = document.getElementById('total');

  //total.value = `Total a pagar $ ${totalPagar}`
  




 
  




