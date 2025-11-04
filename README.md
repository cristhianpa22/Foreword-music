🎼 FOREWORD: Aplicación Web de Streaming de Música
Este proyecto es el front-end de una aplicación de streaming de música, construido completamente con HTML5, Tailwind CSS 4 y JavaScript (Vanilla). Se ha puesto un énfasis especial en la Identidad Visual y la Accesibilidad (A11Y).

Diseñado y Desarrollado por:

Cristhian Padilla

Roderick Correa

Sofia Ballen

<hr>

🖥️1. Estructura del Proyecto
El archivo index.html contiene la estructura, la definición de Tokens de Diseño, componentes reutilizables y la lógica de inicio del Dark Mode.

todos los archivos Contiene toda la estructura HTML semántica, la definición de Tokens (@theme), Componentes Reutilizables (@layer components) y el script de carga de tema.
Perfil (.perfil): Muestra información detallada de la cuenta del usuario, sus seguidores, playlists, opciones de edición, mejora de suscripción y los artistas más escuchados. Se muestra/oculta con JavaScript.
JavaScript (JS/main.js): Contiene el script que alterna la clase hidden para que la sección de Perfil solo se muestre cuando se hace click en el icono de perfil en la navegación (tanto para pantallas grandes como pequeñas).
Lógica de Tema (Inline Script): Contiene un script que gestiona los temas oscuro y claro, guardando la preferencia con localStorage para que el aspecto se mantenga entre sesiones.
Footer: Muestra los derechos de autor de la página y enlaces a las redes sociales.
Navegación (nav): Contiene los enlaces que dirigen a las demás páginas. Implementada en dos versiones: una barra lateral fija para desktop y una barra inferior fija para mobile.

susucripcion.html
Buscador: Contiene un formulario (<form>) con un input que sirve como buscador de la página y el botón de toggle de tema (id="themeToggle").

Hero: Es la sección principal (<section>) de llamada a la acción, que invita al usuario a suscribirse gratis por un mes.

Recomendaciones: Sección que recomienda a los usuarios canciones y artistas que les pueden gustar.





<hr>

🎨 2. Identidad Visual
2.1 Tokens de Diseño
Se creó una paleta de colores por medio de Tokens OKLCH (--color-fore-*) definidos en la directiva @theme de Tailwind CSS.

Los tokens --color-fore-* se utilizaron para los fondos principales y todo lo relacionado con el Dark Mode.

Se definieron otros tokens neutros para el Modo Claro (--color-surface-*).

Se especificó una tipografía adecuada (--fontFamily: "Inter") para la coherencia visual de la aplicación.

2.2 Componentes Reutilizables
Se utilizó la directiva @layer components para crear clases reutilizables que aseguran la consistencia del diseño y la accesibilidad:

.card: Se utilizó para la creación de las dos columnas principales en forma de tarjeta redondeada y con un efecto hover (hover:scale-103).

.btn: Se utilizó para los botones primarios, asegurando un color de acento y un foco visible.

.focus: Se utilizó para que la sección de navegación tuviera accesibilidad total. Permite a los usuarios navegar con el teclado usando la tecla Tab gracias al foco visible de alto contraste (focus:ring-2).

<hr>

🌙 3. Dark Mode
La implementación del Dark Mode es robusta e interactiva, combinando CSS y JavaScript.

Interacción Usuario: En el index.html, el botón con id="themeToggle" se utiliza para que el usuario pueda elegir manualmente el modo claro u oscuro.

Persistencia: La preferencia del usuario se guarda en el navegador con localStorage para que la aplicación mantenga el modo seleccionado en futuras sesiones.

Detección de Sistema: Se utiliza la variante dark de Tailwind (definida con @custom-variant dark (&:where(.dark, .dark *)); .dark) que detecta la preferencia del sistema operativo del usuario si no hay una preferencia guardada, aplicando los estilos del tema oscuro o claro definidos por los tokens.

<hr>


♿ 4. Accesibilidad (A11Y)
Se han incluido buenas prácticas de accesibilidad para mejorar la experiencia con lectores de pantalla y navegación por teclado:

Foco Visible (.focus, .btn): Uso de focus:ring-4 y focus:ring-2 para garantizar un contorno claro y de alto contraste al navegar con el teclado.

Jerarquía Textual: Uso correcto de h2 para los títulos de las secciones principales (Recomendaciones, Suscripción), evitando la duplicidad de h1 y manteniendo una estructura semántica clara.

Contraste de Color: La paleta OKLCH fue seleccionada buscando colores con luminancia controlada que mantengan un buen contraste en ambos temas (Claro y Oscuro).

ARIA Attributes: Se usa aria-label en los enlaces de redes sociales y aria-pressed en el botón de toggle de tema para proporcionar contexto a los lectores de pantalla.

color-scheme Meta Tag: Se usa meta name="color-scheme" content="light dark" /> para optimizar la representación del tema en el sistema operativo.

<hr>

🖼️5.Galería de Desarrollo y Versión Final

Proceso de creación del Hero y de las secciones de Recomendaciones.

<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/324a8a89-198b-490b-9e40-9d5771821957" />

Prueba de la responsividad en diferentes pantallas móviles.

<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/5eb521c7-8a80-438b-8e00-801dc24a7171" />

Primer modelo de la sección de perfil.

<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/5a3dfb4f-3691-4814-a778-3d638faed6a6" />

Pruebas de la versión final de Perfil con código y responsividad.

<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/0046b83e-cdb1-4525-b171-627877157016" />

Resultado final en pantallas grandes con tema oscuro y foco activo.

<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/7813216b-74ef-4f2a-ab39-0346cd91f0e4" />

Resultado final en pantallas grandes con tema claro.

<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/6791d82e-0b53-4fc9-8d5b-ab097ec543a9" />

Vista de la aplicación en dispositivos pequeños con tema claro.

<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/0bcab03f-f399-4e1e-8d2b-d964e8b5da8f" />

Vista de la aplicación en dispositivos pequeños con tema oscuro y foco activo.

<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/14546c7c-198b-49c8-b6a4-2bf7beec1955" />

<br>
# Documentacion del proyecto: Biblioteca y Reproductor de Musica  
**Autora:** Sofia Ballen  

---

## Descripcion general

El objetivo principal de esta seccion es permitir al usuario explorar sus canciones, artistas, albumes y listas de reproduccion, al mismo tiempo que puede escuchar musica desde un reproductor integrado.  

El desarrollo se enfoco en lograr una interfaz limpia, facil de usar, completamente responsiva y coherente con el estilo visual del proyecto general.  

---

## Estructura y funcionamiento

La pagina esta dividida en tres secciones principales que trabajan de forma complementaria:

### 1. Buscador principal
Ubicado en la parte superior, contiene un campo de entrada y un icono de lupa.  
El buscador esta diseñado con un boton de cambio de tema (modo claro/oscuro).  
El diseño se adapta a cualquier tamaño de pantalla, evitando que los elementos se desborden o se corten en dispositivos moviles.
<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/4bf3f850-3257-46dc-871b-e0651ae68307" />
<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/011c54e4-9dd1-4a32-9719-d5d45f046536" />
### 2. Contenido principal
Esta seccion muestra la biblioteca del usuario, donde se organizan los diferentes apartados:  
**Me gusta**
<br>
<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/e614fe98-3e78-4e91-80a6-858c441b6908" />
<br>
**Albums**
<br>
<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/0a2e4fed-50b3-4a34-8a90-0a107299621b" />
<br>
**Artistas**
<br>
<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/379ab371-abb5-4da2-bfce-139fc1ad6e9b" />
<br>
**Historial**
<br>
<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/0fa94ca9-1a3c-4bca-af6f-435ce1bc554a" />
<br>
**Playlist**
<br>
<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/77e9df2d-b411-4238-b352-9b40a0af6a39" />
<br>
Cada categoria presenta un conjunto de tarjetas que incluyen imagen, titulo y artista en la parte del reproductor.
Estas tarjetas usan la clase `.card`, tienen bordes redondeados, sombras y una ligera animacion al pasar el cursor.  

El diseño busca mantener equilibrio visual y claridad en la distribucion del contenido.  
Los botones de filtro permiten moverse entre categorias de manera rapida y clara, conservando la consistencia del tema general del sitio.  

### 3. Reproductor de musica
El reproductor se encuentra fijo en la parte inferior de la pagina para mantenerse visible en todo momento.  
Incluye los controles basicos de reproduccion: play, pausa, siguiente, anterior y una barra de progreso sincronizada con el audio.  
Cuando el usuario selecciona una cancion en la biblioteca, la informacion del tema aparece automaticamente en el reproductor.  

---

## Tokens y componentes principales

Los tokens de diseño se definieron con variables OKLCH y se aplicaron en las directivas de Tailwind CSS para mantener coherencia visual.  
Algunos de los principales son:

- **--color-fore-700:** color de fondo principal.  
- **--color-fore-600:** fondos secundarios.  
- **--color-surface-100:** tonos neutros para el modo claro.  
- **--color-accent:** acento amarillo para bordes e iconos.  

Los componentes reutilizables fueron los siguientes:

- `.btn`: botones redondeados con foco visible.  
- `.card`: tarjetas de canciones y albumes.  
- `.bottom-nav`: barra inferior responsiva.  
- `.focus`: control de accesibilidad para navegacion con teclado.  
- `.player-controls`: conjunto de controles del reproductor.  

---

## Fortalezas del proyecto

1. **Diseño visual consistente:**  
   Se mantuvo la identidad visual del proyecto en cada elemento, cuidando los colores, la tipografia y el espaciado.

2. **Interfaz clara y organizada:**  
   Cada seccion esta bien delimitada, lo que facilita la navegacion y mejora la experiencia del usuario.

3. **Responsividad completa:**  
   Todos los componentes se adaptan correctamente a distintos tamaños de pantalla.

4. **Accesibilidad real:**  
   Se aplicaron buenas practicas de accesibilidad como foco visible, contraste de color adecuado y compatibilidad con navegacion mediante teclado.

5. **Modo oscuro funcional:**  
   El boton de cambio de tema permite alternar entre los modos claro y oscuro, recordando la preferencia del usuario gracias a localStorage.

---

## Observaciones de accesibilidad

- Todos los botones e iconos incluyen descripciones mediante atributos `aria-label`.
- Los elementos interactivos muestran un foco claro cuando se navega con teclado.
- Se mantiene un contraste adecuado entre el texto y el fondo en ambos modos de tema.
- El reproductor puede controlarse con el teclado.
- Se incluye la etiqueta meta `color-scheme` para optimizar la experiencia en navegadores modernos.

**Desarrollado por:** Sofia Ballen

## implementacion de una interfaz en la pestaña inicio
Define una rejilla (grid). En dispositivos pequeños (cols-1) es una sola columna. En dispositivos grandes (lg:grid-cols-2) son dos columnas. gap-4 añade espacio entre los elementos, define el color de fondo de la tarjeta. Utiliza colores personalizados (surface-light, fore-700), añade una transición suave de 300ms, agranda la tarjeta ligeramente (scale-[1.05]) y aumenta la sombra cuando el ratón pasa por encima, ocupa el espacio restante (flex-grow) junto a la imagen, establece el fondo y el relleno para el recuadro del álbum, similar a la tarjeta de artista anterior.

imagen de referencia
<br>
<img width="1524" height="925" alt="image" src="https://github.com/user-attachments/assets/c8610ba3-c2e2-4730-b758-91a50f66d18e" />
<img width="1527" height="925" alt="image" src="https://github.com/user-attachments/assets/2ad085c9-1d4f-45f8-ac70-a7a267a86f3f" />
<br>
## implementacion de formulario de pago
Centra la tarjeta del formulario horizontal y verticalmente, asegura que la tarjeta no sea demasiado ancha (max-w-md), le da relleno (p-8), esquinas redondeadas (rounded-xl), y una sombra fuerte (shadow-2xl), utiliza tus colores personalizados (surface-light, fore-700) para el fondo de la tarjeta y asegura el cambio al Modo Oscuro, estiliza la casilla con un tamaño fijo y define el color del tick y el anillo de enfoque. (Nota: Si quieres que el anillo de enfoque del checkbox coincida con tu color púrpura, deberías cambiar focus:ring-blue-500 a focus:ring-[#A020F0]).
imagen de referencia
<br>
<img width="1833" height="923" alt="image" src="https://github.com/user-attachments/assets/46fcf1b2-9bf7-48cf-bad4-c54a98191538" />
<br>




