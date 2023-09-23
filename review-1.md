## ¿Qué es mi producto y para que sirve?
Es una base de datos donde puedes crear una lista de tareas con la cual podrás llevar un control de tus actividades
pendientes por realizar, podras crear, cambiar de estado y eliminar tareas de una manera facil y eficiente, por medio de la conexion a un servidor y que podras ubicar en la ruta: http://localhost:8000/

## ¿Cuáles son las funcionalidades más importantes y porque los usuarios las usarían?
Las funcionalidades más importantes de la base de datos son:

- Crear tareas: Permite registrar tareas, donde es obligatorio que estas tengan un Id único que las identifique y 
una descripcion y un estado (completa o incompleta).
Ruta: http://localhost:8000/

- Actualizar estado de las tareas: Permite llevar un control sobres las tareas que se han cumplido y las que aún quedan pendientes, se debe digitar el id de la tarea actualizar.
Ruta: http://localhost:8000//updated/id

- Ver las tareas: Los usuarios pueden ver una tarea en especifico con ingresar su id en la barra de tareas
Ruta: http://localhost:8000//tasks/:id

- Eliminar tareas: Permite eliminar tareas que ya fueron completadas y no se requiere llevar registro e igualmnete 
eliminar tareas mal digitas o que no corresponde realizarlas, lo que permite manterner una lista organizada y 
actualizada. 
Ruta: http://localhost:8000/deleted/:id