- Identificacion de elementos de framework

Recomendacion: abrir desde el VS un "open to the side" para ver mejor la tabla

| Elemento de React | ¿Dónde lo usas en este problema? | ¿Por qué es el adecuado? |
|---|---|---|
| Componente | Lo uso para armar la interfaz del directorio de mascotas, incluyendo el filtro, la búsqueda y la lista de tarjetas. | Sirve para modularizar la app y mantener el código más ordenado, limpio y fácil de mantener. |
| JSX | Lo empleo dentro del return de cada componente para definir la estructura visual de la interfaz. | Facilita mucho construir la UI porque permite mezclar lógica en JavaScript con etiquetas HTML de forma intuitiva. |
| Props | Las uso para pasar los datos de cada mascota desde la lista principal hacia los componentes hijos que muestran cada tarjeta. | Son ideales para la comunicación unidireccional y permiten reutilizar componentes con distintos datos. |
| Estado (useState) | Lo aplico para guardar el filtro seleccionado, el texto de búsqueda y la lista de mascotas que se muestra en pantalla. | Es fundamental para que React detecte cambios y actualice la interfaz automáticamente. |
| Renderizado de listas | Lo uso al recorrer el arreglo de mascotas con .map() para renderizar una tarjeta por cada elemento. | Es la forma más clara y eficiente de mostrar contenido dinámico, además de permitir usar key correctamente. |
| Renderizado condicional | Lo utilizo para mostrar un mensaje cuando no hay mascotas que coincidan con los filtros aplicados. | Permite mostrar diferentes vistas según el estado actual de la aplicación y mejorar la experiencia del usuario. |

- Respuestas Breves

¿que ventaja tiene dividir el directorio en componentes en lugar de escribir todo en un solo archivo?

- la ventajas de Componentes es que Facilita el mantenimiento, permite reutilizar código sin duplicarlo y mejora el orden, es ideal para el trabajo en equipo, ya que evita conflictos en los archivos.

¿Que diferencia hay entre props y estado en tu solucion? da un ejemplo concreto de cada uno tomado de esta aplicacion.

- La diferencia entre Props y Estado es que el Estado es interno, mutable y maneja los datos locales del componente mientras que los Las Props vienen desde un componente padre, son de solo lectura y sirven para configurarlo.

Ejemplos :

- Props: en App.jsx paso la lista de mascotas a ListaMascotas mediante una prop llamada mascotas, luego ListaMascotas reutiliza esa información para renderizar varias tarjetas con MascotaCard.

- Estado: en App.jsx uso useState para guardar el valor del filtro seleccionado y el texto ingresado en el buscador, Cuando el usuario escribe o cambia el filtro, React actualiza el estado y la pantalla se vuelve a renderizar automáticamente.

