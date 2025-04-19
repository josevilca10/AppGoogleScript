var tareasPendientes = [
  "Estudiar para el examen de sistemas",
  "Revisar proyecto de Apps Script",
  "Ir a jugar futbol"
];

function main() {
  var menu = "SELECCIONA UNA OPCIÓN:\n" +
             "1. AGREGAR TAREA\n" +
             "2. VER TAREAS PENDIENTES\n" +
             "3. SALIR";
  //MANUALMENTE POR AHORA PARA REALIAR ALGUNAS PRUEBAS
  var opcion = '2';

  Logger.log(menu);
  Logger.log("Opción seleccionada: " + opcion);

  switch (opcion) {
    case "1":
      agregarTarea();
      break;
    case "2":
      verTareas();
      break;
    case "3":
      Logger.log("¡Hasta luego!");
      break;
    default:
      Logger.log("Opción inválida.");
  }
}

function agregarTarea() {
  var nuevaTarea = "Leer documentación de de pweb2";
  tareasPendientes.push(nuevaTarea);
  Logger.log(" Tarea agregada: " + nuevaTarea);
}

function verTareas() {
  if (tareasPendientes.length === 0) {
    Logger.log(" No tienes tareas pendientes.");
  } else {
    var lista = " TAREAS PENDIENTES:\n";
    for (var i = 0; i < tareasPendientes.length; i++) {
      lista += (i + 1) + ". " + tareasPendientes[i] + "\n";
    }
    Logger.log(lista);
  }
}
